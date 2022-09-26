const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    open: true,
    port: 8081,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products', // products@ ... from container folder
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/index'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ]
}
