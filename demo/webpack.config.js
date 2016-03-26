var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, "demo.js"),
        vendors: [
            "md-messagebox"
        ]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    module: {
        loaders: [
        { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css") },
        { test: /\.json$/, loader: "json" }
        ]
    },
    plugins: [
        new CleanPlugin([path.resolve(__dirname, "build")]),

        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendors", "manifest"]
        }),

        new HtmlWebpackPlugin(),
        new ExtractTextPlugin("[name].css")
    ],
    devtool: 'source-map'
};
