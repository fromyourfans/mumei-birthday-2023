const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

module.exports = {
  outputDir: path.resolve(__dirname, 'docs'),
  lintOnSave: false,
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        CANVAS_RENDERER: JSON.stringify(true),
        WEBGL_RENDERER: JSON.stringify(true),
      }),
    ],
  },
  chainWebpack: (config) => {
    // HTML Title used for OpenGraph linters (social media links)
    config.plugin('html').tap((args) => {
      // eslint-disable-next-line no-param-reassign
      args[0].title = 'Happy Birthday Mumei!';
      // eslint-disable-next-line no-param-reassign
      args[0].meta = {
        description: 'Hoomans celebrate Nanashi Mumei\'s Birthday',
        'og:title': 'Happy Birthday Mumei!',
        'og:type': 'website',
        'og:description': 'Hoomans celebrate Nanashi Mumei\'s Birthday',
        'og:image': 'https://mumei-birthday.fromyour.fans/ogimage.png',
        'twitter:card': 'summary_large_image',
        'twitter:title': 'Happy Birthday Mumei!',
        'twitter:description': 'Hoomans celebrate Nanashi Mumei\'s Birthday',
        'twitter:image': 'https://mumei-birthday.fromyour.fans/ogimage.png',
      };
      return args;
    });
    // Disable hot reload
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        // eslint-disable-next-line no-param-reassign
        options.hotReload = false;
        return options;
      });
    // Disable base64 image url-loader
    config.module
      .rule('images')
      .use('url-loader')
      .tap((options) => {
        // eslint-disable-next-line no-param-reassign
        options.limit = 1;
        return options;
      });
  },
  pwa: {
    name: 'Mumei Birthday',
    themeColor: '#907D6F',
    workboxOptions: {
      skipWaiting: true,
      exclude: [
        'CNAME',
        /(.*).css.map/g,
        /(.*).js.map/g,
      ],
    },
    assetsVersion: '2207250034',
    manifestOptions: {
      name: 'Mumei Birthday',
      short_name: 'Mumei Birthday',
      description: 'Hoomans celebrate Nanashi Mumei\'s Birthday',
      display: 'standalone',
      orientation: 'landscape',
      background_color: '#907D6F',
      start_url: './',
    },
  },
};
