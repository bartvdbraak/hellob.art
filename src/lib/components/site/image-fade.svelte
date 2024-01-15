<script>
	import { onMount } from 'svelte';
	import catImg from '$lib/assets/root-cat.jpg?enhanced';
	import meImg from '$lib/assets/root-me.jpg?enhanced';

	const images = [
		{ src: meImg, alt: 'Portrait of Bart van der Braak', style: 'object-[50%_10%]' },
		{ src: catImg, alt: 'Noire yawning cat and a bottle of whiskey with glass', style: '' }
	];

	let currentIndex = 0;
	let currentImage = images[currentIndex];

	onMount(() => {
		const interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % images.length;
			currentImage = images[currentIndex];
		}, 15000);

		return () => clearInterval(interval);
	});
</script>

<div class="relative h-full min-h-96 w-full md:min-h-44">
	{#each images as image}
		<enhanced:img
			src={image.src}
			alt={image.alt}
			class="absolute left-0 top-0 h-full w-full rounded-xl object-cover transition-opacity duration-1000 {image.style}"
			style:opacity={image === currentImage ? 1 : 0}
		/>
	{/each}
</div>
