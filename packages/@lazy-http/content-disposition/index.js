"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentDisposition = exports.decode = exports.encode = void 0;
const path_1 = require("path");
/**
 * Created by user on 2020/4/28.
 */
var parse_1 = require("./lib/parse");
Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return parse_1.parse; } });
function encode(filename) {
    return encodeURIComponent(filename);
}
exports.encode = encode;
function decode(encoded_filename) {
    return decodeURIComponent(encoded_filename);
}
exports.decode = decode;
const NON_LATIN1_REGEXP = /[^\x20-\x7e\xa0-\xff]/ug;
function contentDisposition(filename) {
    filename = path_1.basename(filename);
    const encoded_filename = encode(filename);
    if (NON_LATIN1_REGEXP.test(filename)) {
        filename = encoded_filename;
    }
    return `attachment; filename="${filename}"; filename*=UTF-8''${encoded_filename}`;
}
exports.contentDisposition = contentDisposition;
exports.default = contentDisposition;
//# sourceMappingURL=index.js.map