<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@1.0.0-next.13 ./src/lib/assets/vectors/github.glb --transform
-->

<script>
	import { Group } from 'three';
	import { T, forwardEventHandlers } from '@threlte/core';
	import { useGltf } from '@threlte/extras';

	export const ref = new Group();

	const gltf = useGltf('/models/github-transformed.glb', { useDraco: true });

	const component = forwardEventHandlers();
</script>

<T is={ref} dispose={false} {...$$restProps} bind:this={$component}>
	{#await gltf}
		<slot name="fallback" />
	{:then gltf}
		<T.Mesh geometry={gltf.nodes.Github_Mesh.geometry} material={gltf.materials['SVGMat.001']} />
	{:catch error}
		<slot name="error" {error} />
	{/await}

	<slot {ref} />
</T>
