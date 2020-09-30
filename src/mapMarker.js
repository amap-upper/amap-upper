export default function(AMapU) {
  function _buildMarkers(OverlayGroup, {
    data,
    markerStyles = [],
    setLastIcon = true,
    initIcon,
    markerOpt = {},
    markerFormatter,
    clickCallback
  }) {
    const icons = {};
    markerStyles.forEach(({ iconName, icon }) => {
      if (!iconName || !icon) {
        throw Error('markerStylesItem must has iconName as String and icon as AMap.Icon');
      }
      icons[iconName] = new AMap.Icon(icon);
    });

    console.log(icons);
    initIcon = initIcon || (markerStyles[0] && markerStyles[0].iconName);

    const markers = data.map((item, index) => {
      const opt = markerFormatter ? markerFormatter(item, index, icons) : {};

      const marker = new AMap.Marker({
        position: [item.longitude, item.latitude],
        extData: item,
        anchor: 'bottom-center',
        offset: new AMap.Pixel(0, 0),
        topWhenClick: true,
        icon: icons[initIcon],
        ...markerOpt,
        ...opt
      });

      marker._u_key = item.key || marker._amap_id;
      OverlayGroup && (marker._u_dataIndex = index + OverlayGroup._u_lastLength);

      marker._u_setIcon = marker.setIcon;
      marker.setIcon = (iconName) => {
        let icon;
        if (typeof (iconName) === 'string') {
          icon = icons[iconName];
          if (!icon) {
            throw Error('no has this icon, plase check you iconName:' + iconName);
          }
        } else {
          icon = iconName;
        }
        marker.lastIcon = marker.getIcon();
        marker._u_setIcon(icon);
      };

      clickCallback && marker.on('click', e => {
        this.oldClickMarker && setLastIcon && this.oldClickMarker.setIcon(this.oldClickMarker.lastIcon);
        this.oldClickMarker = e.target;
        clickCallback(e, this.oldClickMarker, icons);
      });

      return marker;
    });

    return markers;
  }

  AMapU.prototype.mapMarkers = function({
    type,
    data,
    markerStyles = {},
    initGroup = true,
    onlyMarkers = false,
    setLastIcon = true,
    initIcon,
    markerOpt = {},
    markerFormatter,
    clickCallback
  }) {

    if (onlyMarkers) {
      return _buildMarkers.call(this, null, ...arguments);
    }

    if (!this.mapMarkersMap) {
      this.mapMarkersMap = new Map();
    }

    let OverlayGroup = this.mapMarkersMap.get(type);
    if (!OverlayGroup) {
      OverlayGroup = new AMap.OverlayGroup();

      OverlayGroup._u_data = [];
      OverlayGroup._u_lastLength = 0;
      OverlayGroup._u_markersOptions = {
        type,
        markerStyles,
        initGroup: false,
        onlyMarkers: false,
        setLastIcon,
        initIcon,
        markerOpt,
        markerFormatter,
        clickCallback
      };

      this.mapMarkersMap.set(type, OverlayGroup);
    }

    if (initGroup) {
      OverlayGroup.clearOverlays();
      OverlayGroup._u_data = [];
      OverlayGroup._u_lastLength = 0;
    }

    const markers = _buildMarkers.call(this, OverlayGroup, ...arguments);

    OverlayGroup._u_data = OverlayGroup._u_data.concat(data);
    OverlayGroup._u_lastLength = OverlayGroup._u_data.length;

    if (initGroup) {
      OverlayGroup.setMap(this.map);
      OverlayGroup.addOverlays(markers);
    }
    return markers;
  };

  AMapU.prototype.inactiveLastMarker = function() {
    this.oldClickMarker && this.oldClickMarker.setIcon(this.oldClickMarker.lastIcon);
    this.oldClickMarker = null;
  };

  AMapU.prototype.getMapMarkersByType = function(type) {
    return (this.mapMarkersMap && this.mapMarkersMap.get(type)) || null;
  };

  AMapU.prototype.showMapMarkersByType = function(type) {
    const overlays = (this.mapMarkersMap && this.mapMarkersMap.get(type)) || null;
    overlays && overlays.show();
    return overlays;
  };

  AMapU.prototype.hideMapMarkersByType = function(type) {
    const overlays = (this.mapMarkersMap && this.mapMarkersMap.get(type)) || null;
    overlays && overlays.hide();
    return overlays;
  };

  AMapU.prototype.clearMapMarkersByType = function(type) {
    const overlays = (this.mapMarkersMap && this.mapMarkersMap.get(type)) || null;
    if (overlays) {
      overlays.setMap(null);
      this.mapMarkersMap.delete(type);
    }
    return overlays;
  };

  AMapU.prototype.addMapMarkersByType = function(type, data) {
    const overlays = (this.mapMarkersMap && this.mapMarkersMap.get(type)) || null;
    if (overlays) {
      overlays.addOverlays(this.mapMarkers({ ...overlays._u_markersOptions, data }));
    } else {
      throw Error('no have this type');
    }
    return overlays;
  };

  AMapU.prototype.getMarkerExtDataByType = function(type) {
    const overlays = (this.mapMarkersMap && this.mapMarkersMap.get(type)) || null;
    if (overlays) {
      return overlays._u_data;
    } else {
      throw Error('no have this type');
    }
  };
}
