## 安装
----------------------

```sh
npm i -S amap-upper
```

## 快速上手

运行
```javascript
import amapUpper from 'amap-upper'

amapUpper.load({
  key: 'e4493da******************e4a98be8', // 申请好的Web端开发者Key，首次调用 load 时必填
  version: '1.4.15', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  plugins: ['AMap.Geocoder', 'AMap.PolyEditor', 'AMap.MarkerClusterer', 'AMap.MouseTool', 'AMap.Autocomplete', 'AMap.PlaceSearch'],
  AMapUI: { // 是否加载 AMapUI，缺省不加载
    version: '1.1', // AMapUI 缺省 1.1
    plugins: [] // 需要加载的 AMapUI ui插件
  }
})

amapUpper.initMap(
{ target: this.$refs.app },
mapU => {
  mapU.markerClusterer(options)
  mapU.massMarks(options)
  mapU.mapMarkers(options)
  ...
})
```

## 地址

- [amap-upper API文档地址](https://amap-upper.github.io/)

- [amap-upper github地址](https://github.com/amap-upper/amap-upper)



