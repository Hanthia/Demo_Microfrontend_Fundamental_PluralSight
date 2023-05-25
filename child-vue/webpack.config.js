const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader");
const FederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Method": "GET, PUT, POST,DELETE PATCH",
            "Access-Control-Allow-Headers" :  "X-requested-With, content-type"
        }
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        'presets': ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: './public/index.html'
        }),
         new VueLoaderPlugin.VueLoaderPlugin(),
         new FederationPlugin({
            name: 'childVue',
            filename: 'remoteEntry.js',
            exposes:{
                './vueApp': './src/bootstrap'
            } 
         })
    ]
}