const { 
  override,
  babelInclude,
  addWebpackAlias,
  addWebpackPlugin,
  adjustStyleLoaders,
  removeModuleScopePlugin,
} = require('customize-cra');

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  webpack(config, env) {
    const isDev = env === 'development';

    const webpackConfig = override(
      removeModuleScopePlugin(),
      babelInclude([
        path.resolve('src'),
        path.resolve('uppeople_f/src')
      ]),
      addWebpackAlias({
        '@upp/chrome': path.resolve(__dirname, 'src'),
        '@upp/crm': path.resolve(__dirname, 'uppeople_f/src'),
      }),
      adjustStyleLoaders(({ use }) => {
        use[0] = {
          loader: 'style-loader',
          options: {
            injectType: 'singletonStyleTag',
            insert: (element) => {
              const viewport = document.body;
              let root = viewport.querySelector('#root');
            
              console.log('root:', root);
            
              if (!root) {
                root = document.createElement('div');
                root.id = process.env.REACT_APP_ID;
                root.attachShadow({ mode: 'open' });
            
                viewport.appendChild(root);
              }
            
              root.shadowRoot.appendChild(element);
            },
          },
        };
      }),
    )(config, env);

    if (isDev) {
      return webpackConfig;
    }

    webpackConfig.plugins = webpackConfig.plugins.filter(p => !(p instanceof MiniCssExtractPlugin));
    return {
      ...webpackConfig,
      output: {
        ...webpackConfig.output,
        filename: 'static/js/[name].js',
        chunkFilename: 'static/js/[name].chunk.js',
      },
      optimization: {
        runtimeChunk: false,
        splitChunks: { cacheGroups: { default: false } },
      },
    };
  },
}