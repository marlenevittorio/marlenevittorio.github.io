/*globals require, module, __dirname */
const path = require('path');
const _root = path.resolve(__dirname, '../..');

function root(args) {
    'use strict';

    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}

module.exports = root;