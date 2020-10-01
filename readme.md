#### 开发

克隆仓库后，执行命令，创建软连接

```sh
git clone git@github.com:amap-upper/amap-upper.git
cd amap-upper
npm i
```

修改`package.json`中`main`为`./src/index.js`

运行
```sh
npm link
```

在测试项目中
```sh
cd test-project
npm link amap-upper
```


#### usage
main.js
```javascript
import amapUpper from 'amap-upper'

amapUpper.load({
  key: 'e449*************8be8', // 申请好的Web端开发者Key，首次调用 load 时必填
  ..options  
}).initMap(options, mapC => {})

amapUpper.initMap(...)
amapUpper.initMap(...)
amapUpper.initMap(...)
```


#### build
```sh
npm run rollup
```