/**
 * Created by user on 2020/4/27.
 */
import { isCloudflareHeaders } from './lib/headers/isCloudflareHeaders';
import { isCloudflareResponse } from './lib/response/isCloudflareResponse';
import { isCloudflareCaptchaResponse } from './lib/response/isCloudflareCaptchaResponse';
export { isCloudflareHeaders };
export { isCloudflareResponse };
export { isCloudflareCaptchaResponse };
declare const _default: {
    isCloudflareHeaders: typeof isCloudflareHeaders;
    isCloudflareResponse: typeof isCloudflareResponse;
    isCloudflareCaptchaResponse: typeof isCloudflareCaptchaResponse;
};
export default _default;
