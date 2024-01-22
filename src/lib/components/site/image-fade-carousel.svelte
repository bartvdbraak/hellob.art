<script lang="ts">
	import { onMount } from 'svelte';

	export let images: { src: string; alt: string; style?: string }[] = [];

	let index = 0;
	/* global NodeJS */
	let interval: string | number | NodeJS.Timeout | undefined;

	const start = () => (interval = setInterval(() => (index = (index + 1) % images.length), 8000));
	const stop = () => clearInterval(interval);

	onMount(() => {
		start();
		return () => stop();
	});

	function handleMarkerClick(i: number) {
		stop();
		index = i;
	}
</script>

<div class="relative h-[500px]">
	{#each images as img, i}
		<enhanced:img
			src={img.src}
			alt={img.alt}
			class:current-img={index === i}
			class="absolute inset-0 h-full w-full rounded-xl object-cover opacity-0 transition-opacity duration-1000 ease-out {img.style}"
		/>
	{/each}
	<div class="absolute bottom-[5%] left-[50%] grid translate-x-[-50%] grid-flow-col gap-2">
		{#each images as _, i (_.src)}
			<button on:click={() => handleMarkerClick(i)} aria-label="select image">
				<svg height="20" width="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<circle
						cx="8"
						cy="8"
						r="8"
						class:current-marker={index === i}
						class="transition-fill fill-gray-500 duration-500 ease-out"
					/>
				</svg>
			</button>
		{/each}
	</div>
</div>

<style>
	.current-img {
		opacity: 1;
	}
	.current-marker {
		fill: white;
	}
</style>
