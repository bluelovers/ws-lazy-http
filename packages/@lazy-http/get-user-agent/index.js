"use strict";
exports.__esModule = true;
exports.getUserAgent = exports.getUserAgentFromHeaders = exports.getUserAgentFromWindow = void 0;
var value_from_record_1 = require("value-from-record");
var get_window_1 = require("../get-window");
function getUserAgentFromWindow(win) {
    var _a;
    return (_a = win === null || win === void 0 ? void 0 : win.navigator) === null || _a === void 0 ? void 0 : _a.userAgent;
}
exports.getUserAgentFromWindow = getUserAgentFromWindow;
function getUserAgentFromHeaders(headers) {
    var _a, _b;
    return ((_b = (_a = headers) === null || _a === void 0 ? void 0 : _a.get) === null || _b === void 0 ? void 0 : _b.call(_a, 'user-agent')) || value_from_record_1["default"]('user-agent', headers);
}
exports.getUserAgentFromHeaders = getUserAgentFromHeaders;
function getUserAgent(opts) {
    var _a, _b;
    return (_a = getUserAgentFromHeaders(opts === null || opts === void 0 ? void 0 : opts.headers)) !== null && _a !== void 0 ? _a : getUserAgentFromWindow((_b = opts === null || opts === void 0 ? void 0 : opts.window) !== null && _b !== void 0 ? _b : get_window_1["default"]());
}
exports.getUserAgent = getUserAgent;
exports["default"] = getUserAgent;
