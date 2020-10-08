import { _buildMarkers } from '../utils/buildMarkers';

export default function(AMapU) {
  AMapU.prototype.markerClusterer = function({
    type,
    data,
    markerStyles = [],
    setLastIcon = true,
    initIcon,
    markerOpt = {},
    markerFormatter,
    clickCallback,
    clusterStyles = [],
    clusterOption = {}
  }) {
    if (!this.clusterMarkersMap) {
      this.clusterMarkersMap = new Map();
    }

    let cluster = this.clusterMarkersMap.get(type);
    if (!cluster) {
      cluster = new AMap.MarkerClusterer(this.map, [], {
        styles: clusterStyles,
        minClusterSize: 5,
        ...clusterOption
      });

      cluster._u_data = [];
      cluster._u_markersOptions = {
        markerStyles,
        setLastIcon,
        initIcon,
        markerOpt,
        markerFormatter,
        clickCallback
      };

      this.clusterMarkersMap.set(type, cluster);
    }

    cluster._u_data = data;
    const markers = _buildMarkers.call(this, 0, ...arguments);
    cluster.setMarkers(markers);
  };

  AMapU.prototype.getMarkerClustererByType = function(type) {
    return (this.clusterMarkersMap && this.clusterMarkersMap.get(type)) || null;
  };

  AMapU.prototype.hideMarkerClustererByType = function(type) {
    const cluster = (this.clusterMarkersMap && this.clusterMarkersMap.get(type)) || null;
    if (cluster) {
      cluster.setMap(null);
    } else {
      throw Error('no have this type');
    }
    return cluster;
  };

  AMapU.prototype.showMarkerClustererByType = function(type) {
    const cluster = (this.clusterMarkersMap && this.clusterMarkersMap.get(type)) || null;
    if (cluster) {
      cluster.setMap(this.map);
    } else {
      throw Error('no have this type');
    }
    return cluster;
  };

  AMapU.prototype.clearMarkerClustererByType = function(type) {
    const cluster = (this.clusterMarkersMap && this.clusterMarkersMap.get(type)) || null;
    if (cluster) {
      cluster.setMap(null);
      this.clusterMarkersMap.delete(type);
    }
    return cluster;
  };

  AMapU.prototype.addMarkerClustererByType = function(type, data) {
    const cluster = (this.clusterMarkersMap && this.clusterMarkersMap.get(type)) || null;
    if (cluster) {
      const markers = _buildMarkers.call(this, cluster._u_data.length, { ...cluster._u_markersOptions, data });
      cluster.addMarkers(markers);
    } else {
      throw Error('no have this type');
    }
    return cluster;
  };

  AMapU.prototype.getClusterExtDataByType = function(type) {
    const cluster = (this.clusterMarkersMap && this.clusterMarkersMap.get(type)) || null;
    if (cluster) {
      return cluster._u_data;
    } else {
      throw Error('no have this type');
    }
  };
}
