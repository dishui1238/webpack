const path = require('path');
const HtmlWebPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: {
        bundle1: './src/index.js',
        // bundle2: './src/index2.js',
        // bundle3: './src/index3.js',
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].bundle.js',
        path: `${__dirname}/dist`,
    },
    module: {
        rules: [
            // { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // postcss-loader
            { test: /\.css$/, use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.m?jsx?$/, exclude: /(node_modules|bower_components)/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } },
             // eslint
            //  { enforce: 'pre', test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'},
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.tsx?$/, loader: 'ts-loader' },
            // img
            { test: /\.(png|jpg)$/, use: [{ loader: 'url-loader', options: { limit: 8192 } }] },
        ],
    },

    plugins: [
        //  创建一个在内存中生成HTML的插件
        new HtmlWebPlugin({
            template: path.join(__dirname, './src/index.html'), // 指定模板页面
            filename: 'index.html', // 指定生成页面的名称
        }),
        // 压缩编译后代码的体积
        new UglifyJsPlugin(),
    ],

};
