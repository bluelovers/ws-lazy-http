import { IResponse } from '../types';
import isCloudflareHeaders from '../headers/isCloudflareHeaders';
import hasCloudflareCaptcha from './body/hasCloudflareCaptcha';

export function isCloudflareCaptchaResponse(response: IResponse)
{
	if (isCloudflareHeaders(response.headers))
	{
		return hasCloudflareCaptcha(response.data)
	}

	return false;
}

export default isCloudflareCaptchaResponse
