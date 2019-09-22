//baseline for webpack config
module.exports = {
    entry: "app.js",
    output: "build/app.bundle.js",
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