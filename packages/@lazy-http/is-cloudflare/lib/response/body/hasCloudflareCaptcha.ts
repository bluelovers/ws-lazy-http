/**
 * @see https://github.com/TypeCtrl/cloudflare/blob/d7e68afe88fa4b80ad7315179223e42fd3f5416c/src/index.ts#L24
 */
export function hasCloudflareCaptcha(body: string | Buffer)
{
	body = String(body);

	if (body.includes('why_captcha') || /cdn-cgi\/l\/chk_captcha/i.test(body))
	{
		return true;
	}

	return false;
}

export default hasCloudflareCaptcha
