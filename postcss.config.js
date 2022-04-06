const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');

module.exports = {
  plugins: [
    postcssJitProps({
      files: [
        // this next line is throwing an error:
        // Internal server error: Package subpath './open-props.min.css' is not defined by "exports" in /Users/abw/js/vite-open-props/node_modules/open-props/package.json
        require('open-props/open-props.min.css'),
      ]
    }),
  ]
}