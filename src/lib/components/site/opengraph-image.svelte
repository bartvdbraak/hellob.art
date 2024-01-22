<script lang="ts">
	import { Icons } from '.';

	export let title: string = 'I made this for you';
	export let subTitle: string =
		'Featuring current work and studies in a SvelteKit-based portfolio.';
	export let imageData: string = '';
</script>

<div class="flex h-full w-full items-center justify-center bg-black px-24">
	<div class="flex flex-row items-center rounded-lg shadow-md">
		<div class="flex w-7/12 flex-col">
			<Icons.logo />
			<h2 class="mb-0 text-6xl font-bold leading-tight tracking-tighter text-white">{title}</h2>
			<p class="mt-0 text-3xl font-thin text-gray-400">
				{subTitle}
			</p>
		</div>
		<div class="mb--50 mt-0 flex w-5/12">
			<img class="rounded-xl" src={`data:image/jpeg;base64,${imageData}`} width={400} alt="" />
		</div>
	</div>
</div>

<style>
	h2 {
		font-family: 'Geist Bold', 'Geist Sans';
	}
	p {
		font-family: 'Geist Regular', 'Geist Sans';
	}
</style>
