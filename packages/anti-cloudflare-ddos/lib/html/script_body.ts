/**
 * Created by user on 2020/5/2.
 */

export const reScriptBody = /setTimeout\(\s*function\s*\(\)\{\s*(var\s+(?:[a-z]\s*,\s*)(?:[a-z]\s*,\s*)+(?:[a-z]\s*,\s*).+?\r?\n[\s\S]+?a\.value\s*=.+?)\r?\n[\s\S]+?\},\s*(\d{4,5})\);\s*(?:\/\*eoc\*\/)?/;

export function getCloudflareScriptBody(body: string | Buffer): string
{
	body = String(body);
	return reScriptBody.exec(body)[1]
}

export default getCloudflareScriptBody
