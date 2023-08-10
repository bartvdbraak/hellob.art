<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from '../toolbox/Scene.svelte';
	import { Theatre } from '@threlte/theatre';
	import { T } from '@threlte/core';
</script>

<svelte:head>
	<title>hellob.art &mdash; theatre</title>
</svelte:head>

<main class="container h-screen w-full">
	<Canvas>
		<Theatre>
			<Scene />
			<T.AxesHelper />
			<T.GridHelper />
		</Theatre>
	</Canvas>
</main>
