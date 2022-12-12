const path = require("path");

module.exports = {
    entry: "./src/index.js",
    devtool: "inline-source-map",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woof|woof2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
};
