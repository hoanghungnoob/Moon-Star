const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'src'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      'data': path.resolve(__dirname, 'database/'),
    },
  },
  externals: {
    // only define the dependencies you are NOT using as externals!
    canvg: "canvg",
    html2canvas: "html2canvas",
    dompurify: "dompurify"
  }
};