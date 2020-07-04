const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'ol-helpers.js',
        libraryTarget: 'umd',
        globalObject: 'this',
        library: 'olHelpers'
    },
    externals: {
        'ol': /^(ol|\$)$/i
    },
    optimization: {
        runtimeChunk: true
    },
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /(node_modules|bower_components)/,
            use: 'babel-loader'
        }]
    }
};



module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        config.plugins = [
            new BundleAnalyzerPlugin()
        ]
    }

    /* if (argv.mode === 'production') {
 
    } */

    return config;
};