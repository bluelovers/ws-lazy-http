"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCloudflareRayID = void 0;
function getCloudflareRayID(body) {
    var _a;
    return (_a = String(body).match(/class="ray_id".*?\>.*?\<code\>(\w+)\<\/code\>/)) === null || _a === void 0 ? void 0 : _a[1];
}
exports.getCloudflareRayID = getCloudflareRayID;
exports.default = getCloudflareRayID;
//# sourceMappingURL=ray_id.js.map