const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const files = fs.readdirSync(path.resolve(__dirname, '../example'));

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: 'boundle.js',
    path: path.join(__dirname, '../dist')
  },
  plugins: (() => {
    const res = [];
    files.forEach(file => {
      res.push(new HtmlWebpackPlugin({
        filename: file,
        template: path.join(__dirname, `../example/${file}`)
      }));

    });
    return res;
  })(),
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000,
    proxy: {
      '/*': {
        target: 'http://localhost:9000',
        bypass: function(req, res, proxyOptions) {
          console.dir(req);
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.');
            return `${req.url}.html`;
          }
        }
      }
    }
  }

};
