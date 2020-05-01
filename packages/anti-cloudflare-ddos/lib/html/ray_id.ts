
export function getCloudflareRayID(body: string | Buffer): string
{
	return String(body).match(/class="ray_id".*?\>.*?\<code\>(\w+)\<\/code\>/)?.[1]
}

export  default getCloudflareRayID
