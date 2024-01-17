import { ImageResponse } from '@ethercorps/sveltekit-og';
import type { RequestHandler } from '@sveltejs/kit';
import { promises as fs } from 'fs';

const fontPath = 'static/fonts/Geist/Geist-Bold.woff';
const template = `
 <div tw="bg-black flex w-full h-full items-center justify-center">
    <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
      <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
        <span tw="text-6xl text-white">I made this for you</span>
        <span tw="text-3xl text-gray-600">Featuring current work and studies in a SvelteKit-based portfolio. </span>
      </h2>
      <div tw="mt-8 flex md:mt-0">
        <svg width="177" height="28" viewBox="0 0 177 28">
          <rect x="0.5" y="0.5" width="116.25" height="27" fill="white" stroke="black" />
          <rect x="117.25" width="59.5" height="28" fill="black" />
          <rect x="117.25" y="1.25" width="58.5" height="25.5" stroke="white" stroke-width="0.5" />
          <path
            d="M6.174 21C6.118 21 6.09 20.965 6.09 20.895L6.111 6.46798C6.111 6.41198 6.146 6.38398 6.216 6.38398H8.547C8.617 6.38398 8.652 6.41198 8.652 6.46798L8.631 12.18H11.781V6.46798C11.781 6.41198 11.809 6.38398 11.865 6.38398H14.196C14.266 6.38398 14.301 6.41198 14.301 6.46798L14.343 20.895C14.343 20.965 14.308 21 14.238 21H11.886C11.816 21 11.781 20.965 11.781 20.895V14.721H8.631V20.895C8.631 20.965 8.603 21 8.547 21H6.174Z"
            fill="black"
          />
          <path
            d="M26.6408 21C26.5848 21 26.5568 20.965 26.5568 20.895L26.5778 6.46798C26.5778 6.41198 26.6058 6.38398 26.6618 6.38398H33.4028C33.4588 6.38398 33.4868 6.41898 33.4868 6.48898V8.84098C33.4868 8.89698 33.4588 8.92498 33.4028 8.92498H29.0978V12.201H33.4028C33.4588 12.201 33.4868 12.229 33.4868 12.285L33.5078 14.658C33.5078 14.714 33.4798 14.742 33.4238 14.742H29.0978V18.417H33.4238C33.4798 18.417 33.5078 18.452 33.5078 18.522V20.916C33.5078 20.972 33.4798 21 33.4238 21H26.6408Z"
            fill="black"
          />
          <path
            d="M45.9592 21C45.9032 21 45.8752 20.965 45.8752 20.895L45.8962 6.48898C45.8962 6.41898 45.9312 6.38398 46.0012 6.38398H48.3322C48.4022 6.38398 48.4372 6.41898 48.4372 6.48898L48.4162 18.417H52.7422C52.8122 18.417 52.8472 18.452 52.8472 18.522V20.895C52.8472 20.965 52.8122 21 52.7422 21H45.9592Z"
            fill="black"
          />
          <path
            d="M64.8058 21C64.7498 21 64.7218 20.965 64.7218 20.895L64.7428 6.48898C64.7428 6.41898 64.7778 6.38398 64.8478 6.38398H67.1788C67.2488 6.38398 67.2838 6.41898 67.2838 6.48898L67.2628 18.417H71.5888C71.6588 18.417 71.6938 18.452 71.6938 18.522V20.895C71.6938 20.965 71.6588 21 71.5888 21H64.8058Z"
            fill="black"
          />
          <path
            d="M87.1664 21.21C86.4104 21.21 85.7174 21.021 85.0874 20.643C84.4714 20.251 83.9744 19.74 83.5964 19.11C83.2184 18.466 83.0294 17.759 83.0294 16.989L83.0504 10.332C83.0504 9.56198 83.2324 8.86198 83.5964 8.23198C83.9744 7.60198 84.4784 7.09798 85.1084 6.71998C85.7384 6.34198 86.4244 6.15298 87.1664 6.15298C87.9224 6.15298 88.6084 6.34198 89.2244 6.71998C89.8404 7.09798 90.3304 7.60198 90.6944 8.23198C91.0724 8.86198 91.2614 9.56198 91.2614 10.332L91.2824 16.989C91.2824 17.759 91.0934 18.466 90.7154 19.11C90.3514 19.74 89.8544 20.251 89.2244 20.643C88.6084 21.021 87.9224 21.21 87.1664 21.21ZM87.1664 18.669C87.5864 18.669 87.9504 18.501 88.2584 18.165C88.5804 17.815 88.7414 17.423 88.7414 16.989L88.7204 10.332C88.7204 9.86998 88.5734 9.47798 88.2794 9.15598C87.9854 8.83398 87.6144 8.67298 87.1664 8.67298C86.7324 8.67298 86.3614 8.83398 86.0534 9.15598C85.7454 9.46398 85.5914 9.85598 85.5914 10.332V16.989C85.5914 17.451 85.7454 17.85 86.0534 18.186C86.3614 18.508 86.7324 18.669 87.1664 18.669Z"
            fill="black"
          />
          <path
            d="M103.463 21C103.407 21 103.379 20.965 103.379 20.895L103.421 6.46798C103.421 6.41198 103.449 6.38398 103.505 6.38398H107.537C108.335 6.38398 109.049 6.57998 109.679 6.97198C110.309 7.34998 110.806 7.85398 111.17 8.48398C111.534 9.11398 111.716 9.79998 111.716 10.542C111.716 11.144 111.576 11.704 111.296 12.222C111.03 12.74 110.708 13.16 110.33 13.482C110.736 13.888 111.051 14.357 111.275 14.889C111.499 15.421 111.611 15.981 111.611 16.569C111.611 17.381 111.415 18.123 111.023 18.795C110.631 19.467 110.099 20.006 109.427 20.412C108.769 20.804 108.034 21 107.222 21H103.463ZM105.941 12.18H107.537C108.027 12.18 108.419 12.012 108.713 11.676C109.021 11.326 109.175 10.948 109.175 10.542C109.175 10.094 109.014 9.70898 108.692 9.38698C108.37 9.05098 107.985 8.88298 107.537 8.88298H105.941V12.18ZM105.92 18.438H107.222C107.726 18.438 108.16 18.256 108.524 17.892C108.888 17.514 109.07 17.073 109.07 16.569C109.07 16.065 108.888 15.631 108.524 15.267C108.16 14.903 107.726 14.721 107.222 14.721H105.941L105.92 18.438Z"
            fill="black"
          />
          <path
            d="M122.626 20.895L125.23 6.46803C125.244 6.41203 125.279 6.38403 125.335 6.38403H128.38C128.436 6.38403 128.471 6.41203 128.485 6.46803L130.984 20.895C130.998 20.965 130.97 21 130.9 21H128.569C128.513 21 128.478 20.965 128.464 20.895L128.233 19.362H125.377L125.146 20.895C125.132 20.965 125.097 21 125.041 21H122.71C122.654 21 122.626 20.965 122.626 20.895ZM125.797 17.115H127.813L126.952 11.214L126.826 10.437L126.742 11.214L125.797 17.115Z"
            fill="white"
          />
          <path
            d="M142.886 21C142.83 21 142.802 20.965 142.802 20.895L142.844 6.46803C142.844 6.41203 142.872 6.38403 142.928 6.38403H147.17C147.926 6.38403 148.619 6.57303 149.249 6.95103C149.893 7.31503 150.404 7.81203 150.782 8.44203C151.16 9.05803 151.349 9.75803 151.349 10.542C151.349 11.06 151.272 11.529 151.118 11.949C150.964 12.355 150.782 12.705 150.572 12.999C150.362 13.279 150.173 13.489 150.005 13.629C150.761 14.469 151.139 15.456 151.139 16.59L151.16 20.895C151.16 20.965 151.125 21 151.055 21H148.682C148.626 21 148.598 20.979 148.598 20.937V16.59C148.598 16.086 148.416 15.652 148.052 15.288C147.702 14.91 147.268 14.721 146.75 14.721H145.364L145.343 20.895C145.343 20.965 145.315 21 145.259 21H142.886ZM145.364 12.201H147.17C147.604 12.201 147.989 12.04 148.325 11.718C148.661 11.396 148.829 11.004 148.829 10.542C148.829 10.094 148.661 9.70903 148.325 9.38703C148.003 9.06503 147.618 8.90403 147.17 8.90403H145.364V12.201Z"
            fill="white"
          />
          <path
            d="M165.123 21C165.067 21 165.039 20.965 165.039 20.895V8.92503H162.309C162.239 8.92503 162.204 8.89003 162.204 8.82003L162.225 6.46803C162.225 6.41203 162.253 6.38403 162.309 6.38403H170.289C170.359 6.38403 170.394 6.41203 170.394 6.46803V8.82003C170.394 8.89003 170.366 8.92503 170.31 8.92503H167.559L167.58 20.895C167.58 20.965 167.552 21 167.496 21H165.123Z"
            fill="white"
          />
          <circle cx="117" cy="21" r="2.25" fill="black" />
          <circle cx="117" cy="21" r="2.25" stroke="black" stroke-width="0.5" />
          <circle cx="117" cy="21" r="2.25" stroke="white" stroke-width="0.5" />
        </svg>
      </div>
    </div>
  </div>
`;

let fontData: Buffer;
try {
	fontData = await fs.readFile(fontPath);
} catch (err) {
	console.error('Error reading the font file:', err);
}

export const GET: RequestHandler = async () => {
	return new ImageResponse(template, {
		height: 630,
		width: 1200,
		fonts: [
			{
				name: 'geist-sans',
				data: fontData,
				weight: 700
			}
		]
	});
};
