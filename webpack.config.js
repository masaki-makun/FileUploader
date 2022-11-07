const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode= process.env.NODE_ENV !== 'production';
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    assetModuleFilename: 'images/[name][ext][query]',
    clean: true,
  },
  devServer: {
    static: './',
    open: true,
    host: "localhost",
    devMiddleware: {
      writeToDisk: true,
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {},
                  ],
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  devtool: devMode ? 'source-map': 'eval',
  watchOptions: {
    ignored: /node_modules/
  },
};


