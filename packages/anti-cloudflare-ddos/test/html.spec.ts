import { readFileSync } from "fs";
import { join } from 'path';
import { getCloudflareTimeout } from '../lib/html/timeout';

describe(`html test`, () =>
{
	const html20200430 = readFileSync(join(__dirname, 'res', '20200430.html'));

	test(`getCloudflareTimeout`, () =>
	{

		let actual = getCloudflareTimeout(html20200430, 6000);
		let expected = 4000;

		expect(actual).toStrictEqual(expected);

		expect(getCloudflareTimeout(html20200430, 6000)).toStrictEqual(expected);
		expect(getCloudflareTimeout(html20200430, 6000)).toStrictEqual(expected);

		//expect(actual).toBeInstanceOf(Date);
		expect(actual).toMatchSnapshot();

	});

})
