const path = require("path")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
    entry: {
        "app": "./entry.js"
    },
    output: {
        filename: "entry.build.js",
        path: path.resolve(__dirname, "dist" ), 
        chunkFilename: "[name].build.js",
        publicPath: "/",
    }, 
    optimization: {
        splitChunks: {
            name: "async"
        }
    },
    stats: {
        hash: false,
        version: false,
        timings: false,
        children: false,
        errors: true,
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [ 
            {
                test: /\.js$/, 
                include: [
                    path.resolve(__dirname, "node_modules/@huth")
                ],
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            babelrc: true,
                            plugins: [ ]
                        }
                    }
                ]
            },
             
        ]
    },
    resolve: {
        symlinks: false,
        modules: [
            path.resolve("./"),
            path.resolve("./node_modules")
        ]
    }
}

