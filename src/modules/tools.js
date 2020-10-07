import gcoord from 'gcoord';

function initTools(AMapU) {
  AMapU.prototype.triggerEvent = function(c, eventName, extArgs = {}) {
    AMap.event.trigger(c, eventName, { target: c, ...extArgs });
  };

  AMapU.prototype.getAddressByLnglat = function(lnglat, city = '全国', radius = 1000) {
    return new Promise((resolve, reject)=>{
      try {
        const geocoder = new AMap.Geocoder({
          city,
          radius
        });
        geocoder.getAddress(lnglat, function(status, result) {
          if (status === 'complete' && result.regeocode) {
            resolve(result);
          } else {
            reject(new Error('根据经纬度查询地址失败'));
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  AMapU.prototype.getLngLatByAddress = function(keyword, city = '全国') {
    return new Promise((resolve, reject)=>{
      const autocomplete = new AMap.PlaceSearch({ city });
      try {
        autocomplete.search(keyword, (status, { poiList = { pois: [] }}) => {
          if (status === 'complete' && poiList.pois.length) {
            resolve(poiList);
          } else {
            reject(new Error('没有获取到结果'));
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  /**
   * 转换经纬度
   * @param {Array} lnglat 经纬度
   * @param {Any} source 如果是坐标系，则作为源坐标系，目标坐标系取后一个实参，或者预设的高德坐标系////如果不是坐标系，则转换为boolean，如果true 则使用预设源WGS84，目标AMap,如果false，则反转
   */
  AMapU.prototype.transformCoord = function(lnglat, source) {
    const _SOURCE = 'WGS84';
    const _TARGET = 'AMap';
    if (!lnglat[0] || !lnglat[1]) return lnglat;
    let transformSourceAndTo = [_SOURCE, _TARGET];
    if (source && Object.hasOwnProperty.call(gcoord, source)) {
      const source = source;
      let target = Array.prototype.splice.call(arguments, 2, 1);
      target = target[0] && Object.hasOwnProperty.call(gcoord, target[0]) ? target[0] : _TARGET;
      transformSourceAndTo = [source, target];
    } else {
      !source && transformSourceAndTo.reverse();
    }
    return gcoord.transform(lnglat, ...transformSourceAndTo.map(key => gcoord[key]));
  };

  AMapU.prototype.setCenter = function(lnglat, zoom = this.map.getZoom()) {
    this.map.setZoomAndCenter(zoom, lnglat);
  };

  AMapU.prototype.setLocation = function(
    [longitude, latitude],
    {
      toCenter = true,
      markerOptions
    } = {}
  ) {
    this.clearLocation();

    this.localtionMarker = new AMap.Marker({
      position: new AMap.LngLat(longitude, latitude),
      ...markerOptions
    });
    this.localtionMarker.setMap(this.map);
    if (toCenter) {
      this.setCenter([longitude, latitude]);
    }
  };

  AMapU.prototype.clearLocation = function() {
    this.localtionMarker && this.localtionMarker.setMap(null);
    this.localtionMarker = null;
  };
}

export default initTools;
