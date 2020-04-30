"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasCloudflareCaptcha = void 0;
/**
 * @see https://github.com/TypeCtrl/cloudflare/blob/d7e68afe88fa4b80ad7315179223e42fd3f5416c/src/index.ts#L24
 */
function hasCloudflareCaptcha(body) {
    body = String(body);
    if (body.includes('why_captcha') || /cdn-cgi\/l\/chk_captcha/i.test(body)) {
        return true;
    }
    return false;
}
exports.hasCloudflareCaptcha = hasCloudflareCaptcha;
exports.default = hasCloudflareCaptcha;
//# sourceMappingURL=hasCloudflareCaptcha.js.map