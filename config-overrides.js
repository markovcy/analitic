const {removeModuleScopePlugin, override, babelInclude, addWebpackAlias} = require("customize-cra");
const path = require("path");

module.exports = {
  webpack: override(
    removeModuleScopePlugin(),
    babelInclude([
      path.resolve("src"),
      path.resolve("uppeople_f/src")
    ]),
    addWebpackAlias({
      'uppeople': path.resolve(__dirname, 'uppeople_f/src'),
    }),
  ),
}