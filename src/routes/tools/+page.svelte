<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import Github3d from '$lib/components/gltf/Github3d.svelte';
</script>

<svelte:head>
	<title>hellob.art &mdash; tools</title>
</svelte:head>

<main class="container mx-auto px-4 py-8 text-left">
	<h2 class="text-3xl font-bold mb-8">Tools</h2>

	<Canvas>
		<Scene />
		<Github3d />
	</Canvas>
</main>
