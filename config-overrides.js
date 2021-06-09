const { removeModuleScopePlugin, override, babelInclude, addWebpackAlias, addBundleVisualizer } = require("customize-cra");

const path = require("path");

module.exports = {
  webpack(config, env) {
    const isDev = env === 'development';

    const webpackConfig = override(
      removeModuleScopePlugin(),
      babelInclude([
        path.resolve("src"),
        path.resolve("uppeople_f/src")
      ]),
      addWebpackAlias({
        '@upp/chrome': path.resolve(__dirname, 'src'),
        '@upp/crm': path.resolve(__dirname, 'uppeople_f/src'),
      }),
    )(config, env);

    if (isDev) {
      return webpackConfig;
    }

    return {
      ...webpackConfig,
      output: {
        ...webpackConfig.output,
        filename: 'static/js/[name].js',
      },
      optimization: {
        ...webpackConfig.optimization,
        runtimeChunk: false,
        splitChunks: undefined,
      },
    };
  },
}