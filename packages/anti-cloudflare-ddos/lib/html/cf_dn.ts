/**
 * Created by user on 2020/5/1.
 */

export function getCloudflareCFDNKey(body: string | Buffer)
{
	const kRe = /\bk\s*=\s*'(cf-[\w-]+)'\s*;/g;
	return kRe.exec(String(body))?.[1];
}

export default getCloudflareCFDNKey
