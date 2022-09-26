const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    open: true,
    port: 8081,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products', // products@ ... from container folder
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/index'
      },
      shared: ['faker'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ]
}
