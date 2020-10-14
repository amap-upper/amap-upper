const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const files = fs.readdirSync(path.resolve(__dirname, '../example'));
console.log(path.join(__dirname, `../example/${files[0]}`));
console.log(files);

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: 'boundle.js',
    path: path.join(__dirname, '../dist')
  },
  plugins: (()=>{
    const res = [];
    files.forEach(file=>{
      res.push(new HtmlWebpackPlugin({
        filename: file,
        template: path.join(__dirname, `../example/${file}`)
      }));

    });
    console.log(res);
    return res;
  })(),
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000
  }

};
