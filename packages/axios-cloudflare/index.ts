import cheerio from 'cheerio';
import delay from 'delay';
import url from 'url';
import tough from 'tough-cookie';
import isCloudflareResponse from '@lazy-http/is-cloudflare/lib/response/isCloudflareResponse';
import interceptCloudflare from './lib/interceptCloudflare';
import { AxiosResponse, AxiosError, AxiosRequestConfig, AxiosInstance } from 'axios';
import cloudflareRequestInterceptor from './lib/cloudflareRequestInterceptor';

export function axiosCloudflare<A extends AxiosInstance = AxiosInstance>(axios: A)
{
	function cloudflareResponseInterceptor(response: AxiosResponse)
	{
		if (isCloudflareResponse(response))
		{
			return interceptCloudflare(response, axios);
		}

		return response;
	}

	function cloudflareResponseErrorInterceptor(error: AxiosError)
	{
		if (isCloudflareResponse(error.response))
		{
			return interceptCloudflare(error.response, axios);
		}

		return Promise.reject(error);
	}

	axios.interceptors.request.use(cloudflareRequestInterceptor);
	axios.interceptors.response.use(cloudflareResponseInterceptor, cloudflareResponseErrorInterceptor);

	return axios
}

export default axiosCloudflare;
