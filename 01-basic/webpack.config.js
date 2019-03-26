const path = require('path');
const htmlWebPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "",
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: "babel-loader"
            // },

            // eslint
            // { enforce: "pre",test: /\.js$/,exclude: /node_modules/,loader: "eslint-loader"},

            // { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // postcss-loader
            { test: /\.css$/, use: ['style-loader',{ loader: 'css-loader', options: { importLoaders: 1 } },'postcss-loader']},
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.m?jsx?$/, exclude: /(node_modules|bower_components)/,use: {loader: "babel-loader",options: {presets: ["@babel/preset-env"] }}},
            
            { test: /\.js$/,exclude: /node_modules/,loader: "babel-loader"},
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },

    plugins: [
        //  创建一个在内存中生成HTML的插件
        new htmlWebPlugin({
            template: path.join(__dirname, './src/index.html'), //指定模板页面
            filename: 'index.html' //指定生成页面的名称
        })
    ]

}