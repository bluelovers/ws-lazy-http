import { readFileSync } from "fs";
import { join, basename, parse } from 'path';
import { getCloudflareTimeout } from '../lib/html/timeout';
import getCloudflareAnswer from '../lib/html/answer';
import FastGlob from '@bluelovers/fast-glob/bluebird';
import getCloudflareRayID from '../lib/html/ray_id';

const __res = join(__dirname, 'res');

const htmlList = FastGlob.sync<string>([
		'*/*.html',
	], {
		cwd: __res,
	})
	.map(filename =>
	{

		let fp = parse(filename);

		return {
			name: filename,
			domain: fp.base.match(/^\d+_(.+)$/)[1],
			body: readFileSync(join(__res, filename)),
		}
	})
;

describe(`htmlList`, () =>
{
	htmlList
		.forEach((entry) =>
		{

			describe(entry.name, () =>
			{

				it(`getCloudflareTimeout`, () =>
				{

					let actual = getCloudflareTimeout(entry.body, 6000);

					expect(actual).toStrictEqual(4000);
					expect(actual).toMatchSnapshot();

				});

				it(`getCloudflareRayID`, () =>
				{

					let actual = getCloudflareRayID(entry.body);
					expect(actual).toMatchSnapshot();

				});

				it(`getCloudflareAnswer`, () =>
				{

					let actual = getCloudflareAnswer(entry.body, entry.domain);
					expect(actual).toBeDefined();

				});

			});

		})
	;
});

