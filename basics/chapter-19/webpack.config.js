const path = require('path');

module.exports = 
{
    entry: './src/index.js',
    output: 
    {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
    devServer:
    {
        static: path.resolve(__dirname, "dist"),
        devMiddleware:
        {
            publicPath: "/assets/",
        },
    },
};