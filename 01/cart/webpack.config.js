const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    open: true,
    port: 8082,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartShow': './src/index'
      },
      shared: ['faker'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ]
}
