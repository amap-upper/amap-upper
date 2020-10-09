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



## 贡献者

这个项目的存在要感谢所有贡献者。

请给我们一个💖星支持我们。 谢谢。

感谢所有支持者！ 🙏

<a href="https://github.com/actualchao" target="_blank"><img style="border-radius: 50%!important;" src="https://avatars3.githubusercontent.com/u/49225266?s=460&u=729889a1ac578df6f14dc5d34edee1dc53dcf656&v=4"></a>

<a href="https://github.com/lmh0506" target="_blank"><img style="border-radius: 50%!important;" src="https://avatars1.githubusercontent.com/u/24320015?s=460&v=4"></a>

## License

`amap-upper` 是根据 [MIT License](./LICENSE) 许可的。