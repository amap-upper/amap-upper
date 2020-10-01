import initTools from './tools';
import initMapMarkers from './mapMarker';
import massMarks from './massMarks';
import markerClusterer from './markerClusterer'

class MapUpper {
  // eslint-disable-next-line no-useless-constructor
  constructor( options) {
    this.map = null;
    this.initMap(options);
  }

  /**
   *初始化地图
   * @param {Object} options 参数配置与高德的相同
   * @memberof MapContainer
   */
  initMap(options) {
    this.map = new AMap.Map(
      options.target,
      Object.assign({
        center: [120.682817, 30.513707],
        zooms: [3, 20],
        zoom: 13,
        expandZoomRange: true,
        ...options
      })
    );
  }
}

initTools(MapUpper);
initMapMarkers(MapUpper);
massMarks(MapUpper);
markerClusterer(MapUpper)


export default MapUpper;
