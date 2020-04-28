import contentDisposition from '..';
import { parse } from '..';

describe(`content-disposition`, () =>
{

	test(`contentDisposition`, () =>
	{
		let actual = contentDisposition(`小說名字.epub`);
		let expected = `attachment; filename="%E5%B0%8F%E8%AA%AA%E5%90%8D%E5%AD%97.epub"; filename*=UTF-8''%E5%B0%8F%E8%AA%AA%E5%90%8D%E5%AD%97.epub`;

		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();

	});

	test(`parse`, () =>
	{
		let actual = parse(`attachment; filename="%E5%B0%8F%E8%AA%AA%E5%90%8D%E5%AD%97.epub"; filename*=UTF-8''%E5%B0%8F%E8%AA%AA%E5%90%8D%E5%AD%97.epub`);
		let expected = `小說名字.epub`;

		expect(actual).toHaveProperty('value', expected);
		expect(actual).toMatchSnapshot();

	});

})
