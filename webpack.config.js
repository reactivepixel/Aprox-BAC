var webpack = require('webpack'); // Requiring the webpack lib

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // Setting the URL for the hot reload
    'webpack/hot/only-dev-server', // Reload only the dev server
    './src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel' // Include the react-hot loader
    }, {
      test: /\.css$/,
      loader: 'style!css'
    },{
      test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'
    }, {
      test: /\.(jpg|gif)$/, loader: "url-loader?limit=100000"
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true // Activate hot loading
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // Wire in the hot loading plugin
  ]
};
