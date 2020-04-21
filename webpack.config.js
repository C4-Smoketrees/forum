const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

console.log(process.env.NODE_ENV === 'production')
const templatePath = process.env.NODE_ENV === 'production' ? path.join('src', 'views', 'pages', 'templateP.ejs') : path.join('src', 'views', 'pages', 'template.ejs')

const config = [{
  entry: {
    createBlog: [path.resolve('src', 'components', 'entrypoints', 'create-blog.jsx')],
    createThread: [path.resolve('src', 'components', 'entrypoints', 'create-thread.jsx')],
    index: [path.resolve('src', 'components', 'entrypoints', 'index.jsx')],
    indexForum: [path.resolve('src', 'components', 'entrypoints', 'index-forum.jsx')],
    login: [path.resolve('src', 'components', 'entrypoints', 'login.jsx')],
    signUp: [path.resolve('src', 'components', 'entrypoints', 'sign-up.jsx')],
    userProfile: [path.resolve('src', 'components', 'entrypoints', 'user-profile.jsx')],
    searchPage: [path.resolve('src', 'components', 'entrypoints', 'search-page.jsx')]

  },

  output: {
    path: path.resolve(__dirname, 'src', 'static', 'public', 'js'),
    filename: '[chunkhash].js',
    publicPath: '/js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        exclude: [/node_modules/, /public/]
      }, {
        test: /\.ejs$/,
        loader: 'raw-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm', '.mjs', '*']
  },

  optimization: {
    splitChunks: {
      automaticNameDelimiter: '.',
      cacheGroups: {
        react: {
          chunks: 'initial'
        }
      }
    }
  },

  plugins: [
    new CleanWebpackPlugin(),
    // create blog
    new HtmlWebpackPlugin({
      chunks: ['createBlog'],
      filename: '../../views/pages/create-blog.ejs',
      template: templatePath
    }),
    new HtmlWebpackPlugin({
      chunks: ['createThread'],
      filename: '../../views/pages/create-thread.ejs',
      template: templatePath
    }),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      filename: '../../views/pages/index.ejs',
      template: templatePath
    }),
    new HtmlWebpackPlugin({
      chunks: ['indexForum'],
      filename: '../../views/pages/index-forum.ejs',
      template: templatePath
    }),
    new HtmlWebpackPlugin({
      chunks: ['login'],
      filename: '../../views/pages/login.ejs',
      template: templatePath
    }),
    new HtmlWebpackPlugin({
      chunks: ['signUP'],
      filename: '../../views/pages/signup.ejs',
      template: templatePath
    }),
    new HtmlWebpackPlugin({
      chunks: ['userProfile'],
      filename: '../../views/pages/user-profile.ejs',
      template: templatePath
    }),
    new HtmlWebpackPlugin({
      chunks: ['indexBlog'],
      filename: '../../views/pages/indexBlog.ejs',
      template: templatePath
    }),
    new HtmlWebpackPlugin({
      chunks: ['searchPage'],
      filename: '../../views/pages/searchPage.ejs',
      template: templatePath
    })
  ]
}]

module.exports = config
