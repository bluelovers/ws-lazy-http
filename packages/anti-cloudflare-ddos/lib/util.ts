/**
 * Created by user on 2020/5/2.
 */

export function waitSync(ms: string | number)
{
	let curr = new Date().getTime();

	ms = curr + ((ms as number | 0) || 100);

	while (curr < ms)
	{
		curr = new Date().getTime();
	}
}
