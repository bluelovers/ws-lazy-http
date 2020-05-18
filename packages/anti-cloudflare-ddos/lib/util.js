"use strict";
/**
 * Created by user on 2020/5/2.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitSync = void 0;
function waitSync(ms) {
    let curr = new Date().getTime();
    ms = curr + (ms || 100);
    while (curr < ms) {
        curr = new Date().getTime();
    }
}
exports.waitSync = waitSync;
//# sourceMappingURL=util.js.map