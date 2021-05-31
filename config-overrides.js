const { removeModuleScopePlugin, override, babelInclude, addWebpackAlias, addBundleVisualizer } = require("customize-cra");

const path = require("path");

module.exports = {
  webpack(config, env, ...args) {
    const webpackConfig = override(
      removeModuleScopePlugin(),
      babelInclude([
        path.resolve("src"),
        path.resolve("uppeople_f/src")
      ]),
      addWebpackAlias({
        'uppeople': path.resolve(__dirname, 'uppeople_f/src'),
      }),
    )(config, env);

    const appIndexJs = webpackConfig.entry;

    return {
      ...webpackConfig,
      entry: {
        index: appIndexJs,
        main: [env === 'development' &&
          require.resolve('react-dev-utils/webpackHotDevClient'), appIndexJs].filter(Boolean),
        content: './src/chrome/content.ts',
        background: './src/chrome/background.ts',
        popup: './src/chrome/popup.ts',
      },
      output: {
        ...webpackConfig.output,
        filename: 'static/js/[name].js',
      },
      optimization: {
        ...webpackConfig.optimization,
        runtimeChunk: false,
      },
    };
  },
}