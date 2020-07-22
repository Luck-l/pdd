module.exports = {
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       "@":"src",
  //       'assets': '@/assets',
  //       'components': '@/components',
  //       'network': '@/network',
  //       'views': '@/views',
  //     }
  //   }
  // },
  devServer: {
    proxy: {
      '/api': {
        // agent: new ProxyAgent('http://localhost:3000'),
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }

        }
      }
    }


  }

