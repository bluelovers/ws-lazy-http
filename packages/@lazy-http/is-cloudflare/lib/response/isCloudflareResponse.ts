import isCloudflareHeaders from '../headers/isCloudflareHeaders';
import { load } from "cheerio";
import { IResponse } from '../types';

export function isCloudflareResponse(response: IResponse)
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
