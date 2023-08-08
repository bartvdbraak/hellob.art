<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import { Theatre } from '@threlte/theatre';
</script>

<svelte:head>
	<title>hellob.art &mdash; theatre</title>
</svelte:head>

<main class="container h-screen w-full">
	<Canvas>
		<Theatre>
			<Scene />
		</Theatre>
	</Canvas>
</main>
