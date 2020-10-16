export default function(AMapU) {
  AMapU.prototype.massMarks = function({
    type,
    data,
    initIcon,
    markerStyles = [],
    setLastIcon = true,
    initGroup = true,
    styleFormatter,
    options = {},
    clickCallback
  }) {

    const icons = {};
    const styles = [];
    markerStyles.forEach(({ iconName, icon }, index) => {
      if (!iconName || !icon) {
        throw Error('markerStylesItem must has iconName as String and icon as mass Icon');
      }
      styles.push(icon);
      icons[iconName] = index;
    });
    initIcon = initIcon || (markerStyles[0] && markerStyles[0].iconName);

    data.forEach((dataItem, dataIndex) => {
      dataItem.style = icons[initIcon] || 0;
      if (styleFormatter) {
        const iconName = styleFormatter(dataItem, dataIndex, icons);
        if (typeof icons[iconName] === 'number') {
          dataItem.style = icons[iconName];
        }
      }
    });

    if (!initGroup) {
      return data;
    }

    if (!this.massMarksMap) {
      this.massMarksMap = new Map();
    }

    let mass = this.massMarksMap.get(type);
    if (mass) {
      mass.setMap(null);
      this.massMarksMap.delete(type);
    }
    mass = new AMap.MassMarks(data, {
      zIndex: 100,
      alwaysRender: false,
      ...options,
      style: styles
    });
    mass._u_styles = styles;
    mass._u_data = data;
    mass._u_massOptions = {
      type,
      initIcon,
      markerStyles,
      setLastIcon,
      styleFormatter
    };
    clickCallback && mass.on('click', e => {
      this.oldClickMassData && setLastIcon && (this.oldClickMassData.setIcon(this.oldClickMassData._u_lastIcon));
      e.data.setIcon = (iconName) => {

        if (typeof icons[iconName] === 'number') {
          e.data._u_lastIcon = Object.keys(icons).find(key => icons[key] === e.data.style);
          e.data.style = icons[iconName];
        }
      };
      clickCallback(e, this.oldClickMassData, icons);

      this.oldClickMassData = e.data;
      setTimeout(() => {
        this.renderMassMarksByType(type);
      });
    });
    mass.setMap(this.map);
    this.massMarksMap.set(type, mass);

    return mass;
  };

  AMapU.prototype.renderMassMarksByType = function(type) {
    const mass = this.massMarksMap.get(type);
    if (mass) {
      mass.setStyle(mass._u_styles);
    }
    return mass;
  };

  AMapU.prototype.getMassMarksByType = function(type) {
    return (this.massMarksMap && this.massMarksMap.get(type)) || null;
  };

  AMapU.prototype.showMassMarksByType = function(type) {
    const mass = (this.massMarksMap && this.massMarksMap.get(type)) || null;
    mass && mass.show();
    return mass;
  };

  AMapU.prototype.hideMassMarksByType = function(type) {
    const mass = (this.massMarksMap && this.massMarksMap.get(type)) || null;
    mass && mass.hide();
    return mass;
  };

  AMapU.prototype.clearMassMarksByType = function(type) {
    const mass = (this.massMarksMap && this.massMarksMap.get(type)) || null;
    if (mass) {
      mass.setMap(null);
      this.massMarksMap.delete(type);
    }
    return mass;
  };

  AMapU.prototype.addMassMarksByType = function(type, data) {
    const mass = (this.massMarksMap && this.massMarksMap.get(type)) || null;
    if (mass) {
      const options = Object.assign({}, mass._u_massOptions, { initGroup: false, data });
      data = this.massMarks(options);
      mass._u_data = mass._u_data.concat(data);
      mass.setData(mass._u_data);
    } else {
      throw Error('no have this type');
    }
    return mass;
  };

  AMapU.prototype.getMassExtDataByType = function(type) {
    const mass = (this.massMarksMap && this.massMarksMap.get(type)) || null;
    if (mass) {
      return mass._u_data;
    } else {
      throw Error('no have this type');
    }
  };

  AMapU.prototype.inactiveLastMassMarks = function() {
    this.oldClickMassData && this.oldClickMassData.setIcon && (this.oldClickMassData.setIcon(this.oldClickMassData._u_lastIcon));
    this.oldClickMassData = null;
  };
}
