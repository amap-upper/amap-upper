#### 开发

克隆仓库后，执行命令，创建软连接
```sh
git clone git@github.com:amap-upper/amap-upper.git
cd amap-upper
npm i
npm link
```

在测试项目中
```sh
cd test-project
npm link amap-upper
```

main.js
```javascript
import amapUpper from 'amap-upper'

amapUpper.load({
  key: 'e449*************8be8', // 申请好的Web端开发者Key，首次调用 load 时必填
  ..options  
})
```