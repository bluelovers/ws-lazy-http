
export const timeoutReg = /setTimeout\(\s*function\s*\(\){\s*(var\s+(?:[a-z]\s*,\s*)(?:[a-z]\s*,\s*)+(?:[a-z]\s*,\s*).+?\r?\n[\s\S]+?a\.value\s*=.+?)\r?\n[\s\S]+?,\s*(\d{4,5})\);\s*(?:\/\*eoc\*\/)?/;

export function getCloudflareTimeout(body: string | Buffer, defaultTimeout = 5000)
{
	const timeout = timeoutReg.exec(String(body));

	let ms = timeout?.length > 1 ? Number(timeout[2]) : defaultTimeout;

	if (ms <= 0)
	{
		ms = defaultTimeout;
	}

	return ms
}

export default getCloudflareTimeout
