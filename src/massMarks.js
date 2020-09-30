export default function(AMapU) {
  AMapU.prototype.massMarks = function({
    type,
    data,
    initIcon,
    markerStyles = [],
    setLastIcon = true,
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
        const iconName = styleFormatter(dataItem, dataIndex);
        if (typeof icons[iconName] === 'number') {
          dataItem.style = icons[iconName];
        }
      }
    });

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
      ...options,
      style: styles
    });
    mass._u_styles = styles;
    clickCallback && mass.on('click', e => {
      this.oldClickMassData && setLastIcon && (this.oldClickMassData.style = this.oldClickMassData._u_lastStyle);
      e.data.setIcon = (iconName) => {
        if (typeof icons[iconName] === 'number') {
          e.data._u_lastStyle = e.data.style;
          e.data.style = icons[iconName];
        }
      };
      this.oldClickMassData = e.data;
      clickCallback(e, icons);
      setTimeout(() => {
        this.renderMassMarks(type);
      });
    });
    mass.setMap(this.map);
    this.massMarksMap.set(type, mass);
  };

  AMapU.prototype.renderMassMarks = function(type) {
    const mass = this.massMarksMap.get(type);
    if (mass) {
      mass.setStyle(mass._u_styles);
    }
  };

  AMapU.prototype.getMassMarkersByType = function(type) {
    return (this.massMarksMap && this.massMarksMap.get(type)) || null;
  };

  AMapU.prototype.showMassMarkersByType = function(type) {
    const overlays = (this.massMarksMap && this.massMarksMap.get(type)) || null;
    overlays && overlays.show();
    return overlays;
  };

  AMapU.prototype.hideMassMarkersByType = function(type) {
    const overlays = (this.massMarksMap && this.massMarksMap.get(type)) || null;
    overlays && overlays.hide();
    return overlays;
  };

  AMapU.prototype.clearMassMarkersByType = function(type) {
    const overlays = (this.massMarksMap && this.massMarksMap.get(type)) || null;
    if (overlays) {
      overlays.setMap(null);
      this.massMarksMap.delete(type);
    }
    return overlays;
  };

  AMapU.prototype.addMassMarkersByType = function(type, data) {
    const overlays = (this.massMarksMap && this.massMarksMap.get(type)) || null;
    if (overlays) {
      overlays.addOverlays(this.mapMarkers({ ...overlays._u_markersOptions, data }));
    } else {
      throw Error('no have this type');
    }
    return overlays;
  };

  AMapU.prototype.getMassExtDataByType = function(type) {
    const overlays = (this.massMarksMap && this.massMarksMap.get(type)) || null;
    if (overlays) {
      return overlays._u_data;
    } else {
      throw Error('no have this type');
    }
  };
}
