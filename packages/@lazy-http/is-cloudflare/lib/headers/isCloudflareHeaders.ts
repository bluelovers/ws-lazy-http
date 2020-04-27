/**
 * Created by user on 2020/4/27.
 */

export function isCloudflareHeaders(headers: Record<any, any>)
{
	return typeof headers['cf-ray'] !== 'undefined'
		//&& headers['server']?.indexOf('cloudflare') !== -1
		&& /^(cloudflare|sucuri)/i.test(headers['server'] ?? '')
	;
}

export default isCloudflareHeaders
