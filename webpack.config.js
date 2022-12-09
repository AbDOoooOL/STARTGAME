module.exports = {
    entry: "./app/app.ts",

    // devtool: "inline-source-map",
    // mode: 'development',

    // module: {
    //     loaders: [
    //         {
    //             test: /\.tsx?$/,
    //             exclude: /node_modules/,
    //             loader: "ts-loader"
    //         }
    //     ]
    // },
    // resplve: {
    //     extention: ['.tsx', '.tx', '.js']
    // },
    // output: {
    //     filename: "bundle.js"
    // },
    devServer: {
        inline: false,
        // port: 9000
    }
};