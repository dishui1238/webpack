module.exports = {
    presets: [
      [
        '@babel/preset-react',
        {
          development: true, // process.env.BABEL_ENV === "development",
        },
      ],
    ],
    plugins: ['@babel/plugin-syntax-dynamic-import'],
  };
