import { IHeaders } from '../types';

export function isCloudflareHeaders(headers: IHeaders)
{
	return typeof headers['cf-ray'] !== 'undefined'
		//&& headers['server']?.indexOf('cloudflare') !== -1
		&& /^(cloudflare|sucuri)/i.test(headers['server'] ?? '')
	;
}

export default isCloudflareHeaders
