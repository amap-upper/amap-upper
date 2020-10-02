// import AMapStyle from './amap-style'
import AMapLoader from '@amap/amap-jsapi-loader';
import MapUpper from './mapC';

class MapLoader {
  constructor(amapApiOptions) {
    // 定义初始化状态常量
    this.PENDING = 'pending';// 地图api加载中
    this.FULFILLED = 'fulfilled';// 地图API加载成功
    this.REJECTED = 'rejected';// 地图API 加载失败

    this.status = this.PENDING;

    // 存放initMap
    this.onFulfillInitMaps = [];

    const _options = {
      // key: 'e4493da5c834ae788f61df36e4a98be8', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '1.4.15', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ['AMap.Geocoder', 'AMap.PolyEditor', 'AMap.MarkerClusterer', 'AMap.MouseTool', 'AMap.Autocomplete', 'AMap.PlaceSearch'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      // AMapUI: { // 是否加载 AMapUI，缺省不加载
      //   version: '1.1', // AMapUI 缺省 1.1
      //   plugins: [] // 需要加载的 AMapUI ui插件
      // }
    };

    const options = Object.assign({}, _options, amapApiOptions);

    if (!options.key) {
      throw Error('key has not be fount.');
    }

    AMapLoader.load(options).then(pack => {
      window.AMap = pack;
      this.status = this.FULFILLED;
      this.onFulfillInitMaps.forEach(fn => fn());
    });
  }

  initMap(options, mapDoneCallback) {
    if (this.status === this.REJECTED) {
      throw Error('jsApi加载出错，请检查！');
    }
    if (this.status === this.FULFILLED) {
      mapDoneCallback(new MapUpper(options));
    }
    if (this.status === this.PENDING) {
      this.onFulfillInitMaps.push(() => {
        mapDoneCallback(new MapUpper(options));
      });
    }
  }
}

let mapUpperInstance = null;
function load(amapApiOptions) {
  if (!mapUpperInstance) {
    mapUpperInstance = new MapLoader(amapApiOptions);
  }
  return mapUpperInstance;
}

function initMap(options, mapDoneCallback) {
  if (!mapUpperInstance) {
    throw Error('You must execute load before executing initMap');
  }
  mapUpperInstance.initMap(options, mapDoneCallback);

}

export default { load, initMap };
