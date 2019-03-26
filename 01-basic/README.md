# webpack
## concepts(webpack概念)
#### 1.入口（Entry）
入口起点(entry point): 默认 ./src/index.js,手动配置
```js
//webpack.config.js
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```
#### 输出(output)
 默认值是 ./dist/main.js，其他生成文件默认放置在 ./dist 文件夹中。手动配置
```js
//webpack.config.js
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```

#### loader
webpack 只能理解 JavaScript 和 JSON 文件。loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效 模块，以供应用程序使用，以及被添加到依赖图中。

在 webpack 的配置中 loader 有两个属性：
   1. test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
   2. use 属性，表示进行转换时，应该使用哪个 loader。

```js
//webpack.config.js
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
```

#### 插件(plugin)
loader 用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。

#### 模式(mode)
`mode: development|production(默认)|none`
```js
module.exports = {
  mode: 'production'
};
```

## configuration(配置)
### loader配置
#### PostCSS-loader

#### ESLint
ESLint 是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码

1. `yarn add eslint -D`
2. `eslint --init` 初始化配置文件
3. `eslint ./src/index.js` 检查单个文件的执行命令

#### cross-env
在实际项目中我们需要区别生产/开发等多种情况的环境，相应的对各种环境区分其构建配置也是必要的。使用cross-env模块，在执行打包命令时区分不同环境


 

