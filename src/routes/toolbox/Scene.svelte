<script lang="ts">
	import { T, useFrame } from '@threlte/core';
	import { Float } from '@threlte/extras';
	import Kubernetes from './models/Kubernetes.svelte';

	import { interactivity } from '@threlte/extras';
	import { spring } from 'svelte/motion';

	interactivity();
	const scale = spring(1);

	let rotation = 0;
	useFrame((state, delta) => {
		rotation += delta;
	});
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 10, 10]}
	on:create={({ ref }) => {
		ref.lookAt(0, 1, 0);
	}}
/>
<T.DirectionalLight intensity={0.5} position.x={2} position.y={3} />
<T.AmbientLight intensity={0.9} />
<Float floatIntensity={2} floatingRange={[0, 1]}>
	<Kubernetes
		rotation.y={rotation}
		position.y={-1}
		position.z={-2}
		position.x={-1}
		scale={$scale}
		on:pointerenter={() => scale.set(1.5)}
		on:pointerleave={() => scale.set(1)}
	/>
</Float>
