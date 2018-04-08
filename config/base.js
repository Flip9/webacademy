const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const baseConf = (_path) => {
    // NEW pages should be added here i.g. if you need to create
    // contacts page you need add folder to src,
    // and add path and name to entry array
    const VENDORS_NAME = 'vendors';
    const entry = {
        index: ['babel-polyfill', './src/index/index.js'],
        'task-1': ['babel-polyfill', './src/task-1/task-1.js'],
        'task-2': ['babel-polyfill', './src/task-2/task-2.js'],
        'task-3': ['babel-polyfill', './src/task-3/task-3.js'],
        'task-4': ['babel-polyfill', './src/task-4/task-4.js'],
        'task-5': ['babel-polyfill', './src/task-5/task-5.js'],
        'task-6': ['babel-polyfill', './src/task-6/task-6.js'],
        'task-7': ['babel-polyfill', './src/task-7/task-7.js'],
        'task-8': ['babel-polyfill', './src/task-8/task-8.js'],
        'task-9': ['babel-polyfill', './src/task-9/task-9.js'],
        'task-10': ['babel-polyfill', './src/task-10/task-10.js'],
        'task-11': ['babel-polyfill', './src/task-11/task-11.js'],
        'task-12': ['babel-polyfill', './src/task-12/task-12.js'],
        'task-13': ['babel-polyfill', './src/task-13/task-13.js'],
        'task-14': ['babel-polyfill', './src/task-14/task-14.js'],
        'task-15': ['babel-polyfill', './src/task-15/task-15.js']
    };

    const plugins = Object.keys(entry).reduce((acc, name) => {
        acc.push(new HtmlWebpackPlugin({
            chunksSortMode: 'manual',
            title: `${name}`,
            template: `./src/${name}/${name}.html`,
            chunks: [VENDORS_NAME, name],
            filename: `./${name}.html`,
        }));
        acc.push(new ExtractTextPlugin({
            filename: `styles/[name].css`,
            allChunks: false
        }));

        return acc;
    }, []);

    plugins.concat([
        new webpack.optimize.CommonsChunkPlugin({
            name: VENDORS_NAME,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            'typeof window': JSON.stringify('object')
        })
    ]);

    entry.vendors = `./src/common/scripts/${VENDORS_NAME}.js`;

    return {
        entry,
        output: {
            filename: 'js/[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader'
                        }
                    ]
                },
                {
                    test: /\.js/,
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['env']
                            }
                        }
                    ]
                },
                {
                    test: /\.scss/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'autoprefixer-loader?browsers=last 5 version', 'sass-loader']
                    })
                },
                {

                    /**
                     * ASSET LOADER
                     * Reference: https://github.com/webpack/file-loader
                     * Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
                     * Rename the file using the asset hash
                     * Pass along the updated reference to your code
                     * You can add here any file extension you want to get copied to your output
                     */
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    loader: 'file-loader?publicPath=../&name=assets/images/[name].[ext]'
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    loader: 'file-loader?publicPath=../&name=assets/fonts/[name].[ext]'
                }
            ]
        },
        plugins
    };
};

module.exports = baseConf;