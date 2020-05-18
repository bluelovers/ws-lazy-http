"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCloudflareAnswer = void 0;
const cf_dn_1 = require("./cf_dn");
function getCloudflareAnswer(body, domain) {
    // @ts-ignore
    var s, t, o, p, b, r, e, a, k, i, n, g, f, hrewiEc = { "p": +((!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![] + !![] + []) + (!+[] + !![] + !![] + !![]) + (+!![]) + (+[]) + (!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![]) + (!+[] + !![] + !![]) + (!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![] + !![]) + (!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![]) + (+!![])) / +((!+[] + !![] + !![] + !![] + !![] + !![] + []) + (!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![]) + (!+[] + !![] + !![] + !![] + !![] + !![]) + (+!![]) + (!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![] + !![]) + (!+[] + !![] + !![] + !![]) + (!+[] + !![]) + (!+[] + !![]) + (!+[] + !![] + !![] + !![] + !![] + !![])) };
    g = String.fromCharCode;
    o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    e = function (s) {
        s += "==".slice(2 - (s.length & 3));
        var bm, r = "", r1, r2, i = 0, r3 = '<span class="cf-error-code">1020</span>';
        for (; i < s.length;) {
            bm = o.indexOf(s.charAt(i++)) << 18 | o.indexOf(s.charAt(i++)) << 12
                | (r1 = o.indexOf(s.charAt(i++))) << 6 | (r2 = o.indexOf(s.charAt(i++)));
            r += r1 === 64 ? g(bm >> 16 & 255)
                : r2 === 64 ? g(bm >> 16 & 255, bm >> 8 & 255)
                    : g(bm >> 16 & 255, bm >> 8 & 255, bm & 255);
        }
        return r;
    };
    t = domain;
    k = cf_dn_1.getCloudflareCFDNKey(body);
    // @ts-ignore
    ;
    hrewiEc.p *= +((!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![] + !![] + []) + (!+[] + !![] + !![] + !![]) + (+!![]) + (+[]) + (!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![]) + (!+[] + !![] + !![]) + (!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![] + !![]) + (!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![]) + (+!![])) / +((!+[] + !![] + !![] + !![] + []) + (!+[] + !![] + !![]) + (!+[] + !![] + !![]) + (+[]) + (!+[] + !![] + !![] + !![] + !![]) + (!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![]) + (!+[] + !![] + !![]) + (!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![]) + (+[]));
    hrewiEc.p *= +((!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![] + []) + (+!![]) + (!+[] + !![] + !![] + !![] + !![] + !![] + !![]) + (!+[] + !![] + !![] + !![] + !![]) + (+[]) + (!+[] + !![] + !![] + !![]) + (!+[] + !![]) + (!+[] + !![] + !![] + !![] + !![]) + (!+[] + !![] + !![])) / (+(+((!+[] + !![] + !![] + []) + (!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![] + !![]) + (!+[] + !![]) + (!+[] + !![] + !![] + !![] + !![] + !![]) + (!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![] + !![]) + (+[]) + (!+[] + !![] + !![] + !![] + !![] + !![]) + (+!![]) + (!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![]))) + (function (p) { return eval((true + "")[0] + ".ch" + (false + "")[1] + (true + "")[1] + Function("return escape")()(("")["italics"]())[2] + "o" + (undefined + "")[2] + (true + "")[3] + "A" + (true + "")[0] + "(" + p + ")"); }(+((!+[] + !![] + !![] + !![] + !![] + !![] + [])))));
    hrewiEc.p -= +((!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![] + []) + (+!![]) + (!+[] + !![] + !![] + !![] + !![] + !![] + !![]) + (!+[] + !![] + !![] + !![] + !![]) + (+[]) + (!+[] + !![] + !![] + !![]) + (!+[] + !![]) + (!+[] + !![] + !![] + !![] + !![]) + (!+[] + !![] + !![])) / +((!+[] + !![] + !![] + !![] + []) + (!+[] + !![] + !![]) + (!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![] + !![]) + (!+[] + !![]) + (!+[] + !![] + !![] + !![] + !![]) + (!+[] + !![]) + (!+[] + !![] + !![] + !![] + !![] + !![]) + (!+[] + !![] + !![] + !![] + !![] + !![]) + (!+[] + !![] + !![] + !![] + !![] + !![] + !![]));
    let value = (+hrewiEc.p).toFixed(10);
    return value;
}
exports.getCloudflareAnswer = getCloudflareAnswer;
exports.default = getCloudflareAnswer;
//# sourceMappingURL=answer.js.map