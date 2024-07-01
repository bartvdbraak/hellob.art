<script lang="ts">
	import { onMount, type ComponentType } from 'svelte';
	import { Button } from '../ui/button';
	import type { Icon } from 'lucide-svelte';

	export let images: { src: string; alt: string; style?: string; icon: ComponentType<Icon> }[] = [];

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
		<img
			src={img.src}
			alt={img.alt}
			class="absolute inset-0 h-full w-full rounded-xl object-cover opacity-0 transition-opacity duration-1000 ease-out {img.style} {index ===
				i && 'opacity-100'}"
		/>
	{/each}
	<div class="absolute bottom-[2.5%] left-[50%] grid translate-x-[-50%] grid-flow-col gap-2">
		{#each images as img, i}
			<Button
				variant="outline"
				class={index === i ? '' : 'opacity-60'}
				size="icon"
				aria-label={`Toggle image ${i + 1}`}
				on:click={() => handleMarkerClick(i)}
			>
				<svelte:component
					this={img.icon}
					{...$$props}
					class="transition-fill ease-outmuted h-4 w-4"
				/>
			</Button>
		{/each}
	</div>
</div>
