
module.exports = {
  devServer : {
    proxy : {
       '/api' : {
         target: 'https://localhost:4040/api',
         changeOrigin: true
      }
    }
  }
};
