"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserAgent = exports.getUserAgentFromHeaders = exports.getUserAgentFromWindow = void 0;
const value_from_record_1 = __importDefault(require("value-from-record"));
const get_window_1 = __importDefault(require("../get-window"));
function getUserAgentFromWindow(win) {
    var _a;
    return (_a = win === null || win === void 0 ? void 0 : win.navigator) === null || _a === void 0 ? void 0 : _a.userAgent;
}
exports.getUserAgentFromWindow = getUserAgentFromWindow;
function getUserAgentFromHeaders(headers) {
    var _a, _b;
    return ((_b = (_a = headers) === null || _a === void 0 ? void 0 : _a.get) === null || _b === void 0 ? void 0 : _b.call(_a, 'user-agent')) || value_from_record_1.default('user-agent', headers, {
        allowUndefinedRecord: true,
    });
}
exports.getUserAgentFromHeaders = getUserAgentFromHeaders;
function getUserAgent(opts) {
    var _a, _b;
    return (_a = getUserAgentFromHeaders(opts === null || opts === void 0 ? void 0 : opts.headers)) !== null && _a !== void 0 ? _a : getUserAgentFromWindow((_b = opts === null || opts === void 0 ? void 0 : opts.window) !== null && _b !== void 0 ? _b : get_window_1.default());
}
exports.getUserAgent = getUserAgent;
exports.default = getUserAgent;
//# sourceMappingURL=index.js.map