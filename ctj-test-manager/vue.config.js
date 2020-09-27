const webpack = require("webpack")

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': 'src/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    },
    plugins: [
      // 配置 jQuery 插件的参数
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  },

    // // options...
    // devServer: {
    //   proxy: 'http://127.0.0.1:5000/',

  // }
}
