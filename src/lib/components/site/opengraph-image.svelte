<script lang="ts">
	import fs from 'fs';
	import { Icons } from '.';

	export let title: string = 'I made this for you';
	export let subTitle: string =
		'Featuring current work and studies in a SvelteKit-based portfolio.';

	const buffer = fs.readFileSync('src/lib/assets/og/me.jpg');
	const imageData = buffer.toString('base64');
</script>

<div class="flex h-full w-full items-center justify-center bg-black">
	<div class="flex flex-row items-center rounded-lg p-4 shadow-md">
		<div class="ml-10 flex w-7/12 flex-col">
			<Icons.logo />
			<h2 class="leading-tighter mb-0 text-6xl font-bold tracking-tighter text-white">{title}</h2>
			<p class="mt-0 text-3xl font-thin text-gray-400">
				{subTitle}
			</p>
		</div>
		<div class="mt-0 flex w-5/12">
			<img class="rounded-xl" src={`data:image/jpeg;base64,${imageData}`} width={400} alt="" />
		</div>
	</div>
</div>

<style>
	h2 {
		font-family: 'Geist Bold', 'Geist Sans';
	}
</style>
