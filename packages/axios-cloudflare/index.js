"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosCloudflare = void 0;
const isCloudflareResponse_1 = __importDefault(require("@lazy-http/is-cloudflare/lib/response/isCloudflareResponse"));
const interceptCloudflare_1 = __importDefault(require("./lib/interceptCloudflare"));
const cloudflareRequestInterceptor_1 = __importDefault(require("./lib/cloudflareRequestInterceptor"));
function axiosCloudflare(axios) {
    function cloudflareResponseInterceptor(response) {
        if (isCloudflareResponse_1.default(response)) {
            return interceptCloudflare_1.default(response, axios);
        }
        return response;
    }
    function cloudflareResponseErrorInterceptor(error) {
        if (isCloudflareResponse_1.default(error.response)) {
            return interceptCloudflare_1.default(error.response, axios);
        }
        return Promise.reject(error);
    }
    axios.interceptors.request.use(cloudflareRequestInterceptor_1.default);
    axios.interceptors.response.use(cloudflareResponseInterceptor, cloudflareResponseErrorInterceptor);
    return axios;
}
exports.axiosCloudflare = axiosCloudflare;
exports.default = axiosCloudflare;
//# sourceMappingURL=index.js.map