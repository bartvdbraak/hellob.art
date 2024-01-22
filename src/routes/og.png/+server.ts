import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { html } from 'satori-html';
import { OgImage } from '$lib/components/site';
import GeistRegular from '$lib/assets/og/Geist-Regular.woff';
import GeistBold from '$lib/assets/og/Geist-Bold.woff';
import imageData from '$lib/assets/og/me-inline.jpg?base64';

const height = 630;
const width = 1200;

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {
	const title = url.searchParams.get('title') ?? undefined;
	const subTitle = url.searchParams.get('subTitle') ?? undefined;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const result = (OgImage as any).render({ title, subTitle, imageData });
	const element = html(`${result.html}<style>${result.css.code}</style>`);

	const svg = await satori(element, {
		fonts: [
			{
				name: 'Geist Regular',
				data: Buffer.from(GeistRegular),
				weight: 100
			},
			{
				name: 'Geist Bold',
				data: Buffer.from(GeistBold),
				weight: 700
			}
		],
		height,
		width
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width
		}
	});

	const image = resvg.render();

	return new Response(image.asPng(), {
		headers: {
			'content-type': 'image/png',
			'cache-control': 'public, max-age=86400, immutable'
		}
	});
};
