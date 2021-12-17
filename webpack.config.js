const path = require('path')
module.exports = {
    mode : 'development',
   entry: './client/index.js', // Our frontend will be inside the src folder
   output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'build.js' // The final file will be created in dist/build.js
   },
 
 
   devServer : {
    contentBase: path.join(__dirname,'public'),
    compress: true,
    port:8083
   }
}
