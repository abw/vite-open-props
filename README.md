# Test Project Using Vite and Open Props

This is a test project using [Vite](https://vitejs.dev/) (with
the `react-ts` variant), with [Open Props](https://open-props.style/).
It uses [PostCSS](https://postcss.org/) and [PostCSS JIT Props](https://github.com/GoogleChromeLabs/postcss-jit-props) to remove unused CSS variables.

## Running the Project

    $ npm install
    $ npm run dev

## The Problem

The [postcss.config.js](postcss.config.js) file contained this code, copied from
the "Props from CSS" example on the Open Props web site.

    const postcssJitProps = require('postcss-jit-props');
    const OpenProps = require('open-props');

    module.exports = {
      plugins: [
        postcssJitProps({
          files: [
            require('open-props/open-props.min.css'),
          ]
        }),
      ]
    }

Alas, an error was being thrown:

    [plugin:vite:css] Package subpath './open-props.min.css' is not defined by "exports" in ...<PATH_TO_THIS_PROJECT>.../node_modules/open-props/package.json

Commenting out the `require('open-props/open-props.min.css')` line supresses the error, but also prevents PostCSS JIT Props from working.

## The Solution

I changed the [postcss.config.js](postcss.config.js) to use the "Props as Javascript" example from
the Open Props web site.

    const postcssJitProps = require('postcss-jit-props');
    const OpenProps = require('open-props');

    module.exports = {
      plugins: [
        postcssJitProps(OpenProps)
      ]
    }

After that everything worked just fine.