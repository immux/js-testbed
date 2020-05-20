const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.join(__dirname, "WebRoot.tsx"),

    output: {
        path: path.resolve(__dirname, "..", "..", "..", "built", "web"),
        publicPath: "/",
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css"],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    configFile: path.resolve(__dirname, "..", "..", "..", "tsconfig.json"),
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
        ]
    },

    devServer: {
        contentBase: path.resolve("..", __dirname),
        historyApiFallback: true,
        watchContentBase: true,
        port: 3001,
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "index.html"),
            filename: "index.html",
            inject: "body"
        }),
    ],
};
