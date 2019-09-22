//baseline for webpack config
var path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "app.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "app.bundle.js"

    },
    module : {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    }
};