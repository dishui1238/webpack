module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'eslint-config-airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    settings: {
        'import/resolver': {
            'babel-module': {
                extensions: ['.js', '.jsx'],
            },
        },
    },
    rules: {
        'react/jsx-filename-extension': [
            1, {
                extensions: ['.js', '.jsx'],
            },
        ],
        indent: [
            0,
            4,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        quotes: [
            'error',
            'single',
        ],
        semi: [
            'error',
            'always',
        ],
    },
};
