const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: {
    app: ['./src/js/app.js',],
    },

    output: {
        path: `${__dirname}/build/public/`,
        filename: '[name].js',
        publicPath: 'public/'
    },

    plugins: [
        new MiniCssExtractPlugin(),
    ],

    mode: 'development',

    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Exports external CSS file
              MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader'
            ],
          },

         // {
          //  test: /swiper-bundle\.js$/,
         //   loader: 'babel-loader',
        //  }
      ],
    },

   // optimization: {
   //   minimizer: [
   // new CssMinimizerPlugin(),
   //   ],
   // },

    devtool: 'source-map',
};