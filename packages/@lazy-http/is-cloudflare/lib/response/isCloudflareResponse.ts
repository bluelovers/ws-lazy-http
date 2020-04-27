import isCloudflareHeaders from '../headers/isCloudflareHeaders';
import cheerio, { load } from "cheerio";

export function isCloudflareResponse(response: Record<any, any>)
{
	if (isCloudflareHeaders(response.headers))
	{
		const $ = load(response.data);

		if ($('#challenge-form input[name=jschl_vc]').length > 0)
		{
			return true;
		}
	}

	return false;
}

export default isCloudflareResponse
