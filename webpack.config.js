var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src');
var APP_DIR = path.resolve(__dirname, 'src');

const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, 
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        // template: './src/index.html'
        title: 'Controlar Finanças WPA',
        template: path.resolve('./src/index.html')
    }), 
    new WorkboxPlugin.GenerateSW({
        // these options encourage the ServiceWorkers to get in there fast
        // and not allow any straggling "old" SWs to hang around
        clientsClaim: true,
        skipWaiting: true
    }),
    new CopyWebpackPlugin({
        patterns: [
        { from: 'src/manifest/images', to: 'images' },
        { from: 'src/manifest', to: 'manifest' }
      ],}),
    new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            // apiUrl: 'http://192.168.99.33:8001'
            apiUrl: 'http://trab-final-pos-backend.herokuapp.com'
        })
    },
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    }
}