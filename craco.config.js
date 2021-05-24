const {aliasDangerous, configPaths, CracoAliasPlugin} = require('react-app-rewire-alias/lib/aliasDangerous')

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {aliasDangerous: configPaths('./tsconfig.paths.json')}
    }
  ],
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
      );

      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
      return {
        ...webpackConfig,
        entry: {
          main: [env === 'development' &&
            require.resolve('react-dev-utils/webpackHotDevClient'), paths.appIndexJs].filter(Boolean),
          content: './src/chrome/content.ts',
        },
        output: {
          ...webpackConfig.output,
          filename: 'static/js/[name].js',
        },
        optimization: {
          ...webpackConfig.optimization,
          runtimeChunk: false,
        },
        module: {
          loaders: [
            {
              test: /\.jsx?$/,
              loader: 'babel',
              exclude: /node_modules/,
              query: {
                cacheDirectory: true,
                presets: ['react', 'es2015']
              }
            }
          ]
        }
      }
    },
  }
}