module.exports = {
    module: {
        rules: [
            {
                text: /\.css$/,
                use: ["postcss-loader"],
                type: "css"
            }
        ]
    }
}
