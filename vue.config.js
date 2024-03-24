/**
 * All configuration item explanations can be find in https://cli.vuejs.org/config/
 */
const AutoImport = require('unplugin-auto-import/webpack') // Auto import APIs on-demand for Vite, Webpack, Rspack, Rollup and esbuild. With TypeScript support. Powered by unplugin.
const Components = require('unplugin-vue-components/webpack') // On-demand components auto importing for Vue.
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const Icons = require('unplugin-icons/webpack')
const IconsResolver = require('unplugin-icons/resolver')
const path = require('path');

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  pluginOptions: {
   // 'style-resources-loader': {
     //   preProcessor: 'less',
    //    patterns: [path.resolve(__dirname, 'src/global.less')]
   // }
  },
  devServer: {
    port: 9527,
    open: true,
    proxy: {
      "/api": {
        target: '/',
        changeOrigin: true,
        // ws: false,
        pathRewrite: {
          "^/api": "/",
        }
      }
    }
  },

  configureWebpack: {
    plugins: [
      AutoImport({
        imports: [
          'vue',
          'vue-router'
        ],
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: 'Icon'
          })
        ]
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            enabledCollections: ['ep'],
          })
        ]
      }),
      Icons({
        autoInstall: true,
      })
    ]
  },

  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
  }
}

