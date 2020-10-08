import { _buildMarkers } from '../utils/buildMarkers';

export default function(AMapU) {
  AMapU.prototype.mapMarkers = function({
    type,
    data,
    markerStyles = {},
    setLastIcon = true,
    initIcon,
    markerOpt = {},
    markerFormatter,
    clickCallback
  }) {

    if (!this.mapMarkersMap) {
      this.mapMarkersMap = new Map();
    }

    let OverlayGroup = this.mapMarkersMap.get(type);
    if (!OverlayGroup) {
      OverlayGroup = new AMap.OverlayGroup();

      OverlayGroup._u_data = [];
      OverlayGroup._u_lastLength = 0;
      OverlayGroup._u_markersOptions = {
        markerStyles,
        setLastIcon,
        initIcon,
        markerOpt,
        markerFormatter,
        clickCallback
      };

      this.mapMarkersMap.set(type, OverlayGroup);
    }

    OverlayGroup.clearOverlays();
    OverlayGroup._u_data = data;

    const markers = _buildMarkers.call(this, 0, ...arguments);

    OverlayGroup.setMap(this.map);
    OverlayGroup.addOverlays(markers);
    return markers;
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
      const markers = _buildMarkers.call(this, overlays._u_data.length, { ...overlays._u_markersOptions, data });
      overlays.addOverlays(markers);
      overlays._u_data = overlays._u_data.concat(data);
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

  AMapU.prototype.inactiveLastMarker = function() {
    this.oldClickMarker && this.oldClickMarker.setIcon(this.oldClickMarker.lastIcon);
    this.oldClickMarker = null;
  };
}
