"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.contentDisposition = exports.decode = exports.encode = void 0;
/**
 * Created by user on 2020/4/28.
 */
var parse_1 = require("./lib/parse");
__createBinding(exports, parse_1, "parse");
function encode(filename) {
    return encodeURIComponent(filename);
}
exports.encode = encode;
function decode(encoded_filename) {
    return decodeURIComponent(encoded_filename);
}
exports.decode = decode;
function contentDisposition(filename) {
    var encoded_filename = encode(filename);
    return "attachment; filename=\"" + encoded_filename + "\"; filename*=UTF-8''" + encoded_filename;
}
exports.contentDisposition = contentDisposition;
exports["default"] = contentDisposition;
