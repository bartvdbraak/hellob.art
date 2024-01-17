<script lang="ts">
	import { Icons } from '$lib/components/site';

	export let title: string = 'I made this for you';
	export let subTitle: string =
		'Featuring current work and studies in a SvelteKit-based portfolio.';
</script>

<div class="flex h-full w-full items-center justify-center bg-black">
	<div class="flex w-full flex-col justify-between p-8 px-4 py-12 md:flex-row md:items-center">
		<h2 class="flex flex-col text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
			<span class="text-6xl text-white">{title}</span>
			<span class="text-3xl text-gray-600">{subTitle}</span>
		</h2>
		<div class="mt-8 flex md:mt-0">
			<Icons.logo></Icons.logo>
		</div>
	</div>
</div>
