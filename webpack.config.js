/* @flow */
/* eslint import/no-nodejs-modules: off */

import type { WebpackConfig } from 'grumbler-scripts/config/types';
import { getWebpackConfig } from 'grumbler-scripts/config/webpack.config';

let FILE_NAME = 'cross-domain-utils';
let MODULE_NAME = 'crossDomainUtils';

export let WEBPACK_CONFIG : WebpackConfig = getWebpackConfig({
    filename:   `${ FILE_NAME }.js`,
    modulename: MODULE_NAME,
    minify:     false,
    vars:       {
        __MIN__:  false,
        __TEST__: false
    }
});

export let WEBPACK_CONFIG_MIN : WebpackConfig = getWebpackConfig({
    filename:   `${ FILE_NAME }.min.js`,
    modulename: MODULE_NAME,
    minify:     true,
    vars:       {
        __MIN__:  true,
        __TEST__: false
    }
});

export let WEBPACK_CONFIG_TEST : WebpackConfig = getWebpackConfig({
    modulename: MODULE_NAME,
    options:    {
        devtool: 'inline-source-map'
    },
    vars: {
        __TEST__: true
    }
});

export default [ WEBPACK_CONFIG, WEBPACK_CONFIG_MIN ];
