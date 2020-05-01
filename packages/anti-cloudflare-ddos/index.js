"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCloudflareRayID = exports.getCloudflareAnswer = exports.getCloudflareTimeout = void 0;
const timeout_1 = require("./lib/html/timeout");
Object.defineProperty(exports, "getCloudflareTimeout", { enumerable: true, get: function () { return timeout_1.getCloudflareTimeout; } });
const answer_1 = require("./lib/html/answer");
Object.defineProperty(exports, "getCloudflareAnswer", { enumerable: true, get: function () { return answer_1.getCloudflareAnswer; } });
const ray_id_1 = require("./lib/html/ray_id");
Object.defineProperty(exports, "getCloudflareRayID", { enumerable: true, get: function () { return ray_id_1.getCloudflareRayID; } });
exports.default = {
    getCloudflareTimeout: timeout_1.getCloudflareTimeout,
    getCloudflareAnswer: answer_1.getCloudflareAnswer,
    getCloudflareRayID: ray_id_1.getCloudflareRayID,
};
//# sourceMappingURL=index.js.map