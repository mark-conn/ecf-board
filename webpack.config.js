module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: './src/js/app-bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query:
        {
        presets:['react', "es2015"]
        }
      }
    ]
  },
  devtool: 'sourcemap'
}