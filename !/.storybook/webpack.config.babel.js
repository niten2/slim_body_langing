import webpack from 'webpack'
import path from 'path'

export default (storybookBaseConfig, configType) => {

  // storybookBaseConfig.plugins.push (
    // new webpack.DefinePlugin ({
    //   'process.env.client_id': JSON.stringify (process.env.client_id),
    // })
  // )

  storybookBaseConfig.module = {

    // context: path.resolve("..", __dirname, "src"),
    // color: true,
    entry: [
      // must be first entry to properly set public path
      '../src/webpack-public-path',
      'webpack-hot-middleware/client?reload=true',
      // Defining path seems necessary for this to work consistently on Windows machines.
      path.resolve(__dirname, 'src/index.js')
    ],

    output: {
      // Note: Physical files are only output by the production build task `npm run build`.
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },

    // resolve: {
    //   // root: [
    //     // path.resolve(__dirname, "src"),
    //     // path.resolve(__dirname, 'node_modules'),
    //     // path.resolve(__dirname, 'node_modules', "react-bootstrap", "dist"),
    //     // path.resolve(__dirname, 'src/_vendor'),
    //     // path.resolve(__dirname, 'src', "assets"),
    //     // path.resolve(__dirname, 'src', "lib"),
    //     // path.resolve(__dirname, 'src', "models"),
    //     // path.resolve(__dirname, 'src', "stores"),
    //     // path.resolve(__dirname, 'src', "views"),
    //     // path.resolve(__dirname, 'src', "views", "shared"),
    //     // path.resolve(__dirname, 'static', "images"),
    //     // path.resolve(__dirname, "stylesheets"),
    //   ],
    //   modulesDirectories: [
    //     'node_modules',
    //     // 'node_modules/blueimp-file-upload/js/vendor',
    //   ],
    //   extensions: [
    //     '',
    //     ".html",
    //     '.js', '.jsx', ".json",
    //     ".css", ".sass", ".scss",
    //     ".jpeg", ".png", ".gif", ".jpg",
    //   ]
    // },


    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: `babel-loader`,
        exclude: /(node_modules)/,
        // query: {
        //   presets: [
        //     'react',
        //     'es2015',
        //     'stage-0'
        //   ],
        //   babelrc: false
        // }
      },
      {
        loader: 'url-loader?limit=10000',
        test: /\.(gif|jpg|png|svg)$/,
        include: path.resolve (__dirname, '../')
      }, {
        loader: 'url-loader?limit=1',
        test: /favicon\.ico$/,
        include: path.resolve (__dirname, '../')
      }, {
        loader: 'url-loader?limit=100000',
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        include: path.resolve (__dirname, '../')
      },
      {
        loader: 'style-loader!css-loader',
        test: /\.css$/,
        include: path.resolve (__dirname, '../'),
        exclude: path.resolve (__dirname, '../node_modules')
      },
      {
        loader: 'style-loader!css-loader!sass-loader',
        test: /\.scss$/,
        include: path.resolve (__dirname, '../'),
        exclude: path.resolve (__dirname, '../node_modules')
      },
    ],

    sassLoader: {
      includePaths: path.resolve (__dirname, '../src/browser')
    },

  }

  return storybookBaseConfig
}
