"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudflareRequestInterceptor = void 0;
const url_1 = require("url");
const clearenceCookies_1 = __importDefault(require("./clearenceCookies"));
function cloudflareRequestInterceptor(config) {
    const urlObj = url_1.parse(config.url);
    if (typeof clearenceCookies_1.default[urlObj.hostname] !== 'undefined') {
        if (typeof config.headers['cookie'] === 'undefined') {
            config.headers['cookie'] = '';
        }
        else {
            config.headers['cookie'] += ';';
        }
        config.headers['cookie'] += 'cf_clearance=' + clearenceCookies_1.default[urlObj.hostname];
    }
    return config;
}
exports.cloudflareRequestInterceptor = cloudflareRequestInterceptor;
exports.default = cloudflareRequestInterceptor;
//# sourceMappingURL=cloudflareRequestInterceptor.js.map