"use strict";
/**
 * Created by user on 2020/5/1.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCloudflareCFDNKey = void 0;
function getCloudflareCFDNKey(body) {
    var _a;
    const kRe = /\bk\s*=\s*'(cf-[\w-]+)'\s*;/g;
    return (_a = kRe.exec(String(body))) === null || _a === void 0 ? void 0 : _a[1];
}
exports.getCloudflareCFDNKey = getCloudflareCFDNKey;
exports.default = getCloudflareCFDNKey;
//# sourceMappingURL=cf_dn.js.map