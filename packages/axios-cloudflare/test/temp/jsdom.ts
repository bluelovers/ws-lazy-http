/**
 * Created by user on 2020/4/27.
 */

import { JSDOM, packJSDOM, createJSDOM, IJSDOM, fromURL } from 'jsdom-extra';
import { isCloudflareHeaders } from '@lazy-http/is-cloudflare';
//import 'zombie/lib/dom';
import Bluebird from 'bluebird';
import request from 'request-promise';
import LazyURLSearchParams from 'http-form-urlencoded';

let jar;

fromURL('https://masiro.moe/', {
		runScripts: 'dangerously',
	resources: 'usable',
	})
	.catch(e =>
	{

		if (isCloudflareHeaders(e?.response?.headers))
		{
			//console.dir(e.response)
			//console.dir(e.options)

			jar = e.options.jar;

			return createJSDOM(e.response.body, {
				url: e.options.uri,
				runScripts: 'dangerously',
				cookieJar: jar._jar,
				resources: 'usable',
			})
		}

		return Promise.reject(e)
	})
	.then(async (jsdom) =>
	{
		const { $ } = jsdom as IJSDOM;


		console.dir(jar, {
			depth: null,
		})
		console.dir(jsdom.cookieJar, {
			depth: null,
		})

		//console.dir(jsdom.window['jschl-answer'].value)
		console.log(`action old`, jsdom.window['challenge-form'].action)

		await Bluebird.delay(4000);
		let i = 0;

		while (jsdom.window['jschl-answer'].value === '')
		{
			await Bluebird.delay(100);

			if (i > 5)
			{
				if (jsdom.window['jschl-answer'].value === '')
				{
					return Promise.reject(`can't find answer`)
				}

				break;
			}

			i++
		}

		const action = $('#challenge-form').prop('action');

		console.log(`action new`, action)

		let data = {
			jschl_vc: $('#jschl-vc').val(),
			pass: $(':input[name="pass"]').val(),
			jschl_answer: $('#jschl-answer').val(),
			r: $(':input[name="r"]').val(),
		};

		let sp = new LazyURLSearchParams()
		sp.extend(data)

		let body = sp.toString();

		console.dir(data)

		console.dir(jar._jar.serializeSync())

		return request.post({
				uri: jsdom.window['challenge-form'].action,
				//body: sp.toString(),
				form: data,
				jar,
				headers: {
					'Content-Length': body.length,
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				method: 'POST',
			})
			.then(r =>
			{
				console.dir(r)
			})
			.catch(r =>
			{
				console.dir(jar._jar.serializeSync())
			})
		;
	})
	.then(async (jsdom) =>
	{
		// @ts-ignore
		console.dir(jsdom?.serialize?.())
	})
;

