<script lang="ts">
	import { T, useFrame } from '@threlte/core';
	import { Float } from '@threlte/extras';
	import Kubernetes from './models/Kubernetes.svelte';

	import { interactivity } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import GithubFluid from './models/GithubFluid.svelte';
	import Warp from './models/Warp.svelte';
	import TerraformFlat from './models/TerraformFlat.svelte';

	interactivity();

	const githubScale = spring(1);
	let githubRotation = 0;
	useFrame((state, delta) => {
		githubRotation += 0.5 * delta;
	});

	const kubernetesScale = spring(1);
	let kubernetesRotation = 30;
	useFrame((state, delta) => {
		kubernetesRotation += 0.3 * delta;
	});

	const warpScale = spring(1);
	let warpRotation = 10;
	useFrame((state, delta) => {
		warpRotation += 0.2 * delta;
	});

	const terraformScale = spring(1);
	let terraformRotation = 90;
	useFrame((state, delta) => {
		terraformRotation += 0.6 * delta;
	});
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 5, 8]}
	on:create={({ ref }) => {
		ref.lookAt(0, 1, 0);
	}}
/>
<T.DirectionalLight intensity={0.5} position.x={2} position.y={3} />
<T.AmbientLight intensity={0.9} />
<Float floatIntensity={2} floatingRange={[0, 1]}>
	<Kubernetes
		rotation.y={kubernetesRotation}
		position.y={-4}
		position.z={-2}
		position.x={-4}
		scale={$kubernetesScale}
		on:pointerenter={() => kubernetesScale.set(1.3)}
		on:pointerleave={() => kubernetesScale.set(1)}
	/>
</Float>

<Float floatIntensity={2} floatingRange={[0, 0.5]}>
	<GithubFluid
		rotation.y={githubRotation}
		position.y={0}
		position.z={-4}
		position.x={3}
		scale={$githubScale}
		on:pointerenter={() => githubScale.set(1.3)}
		on:pointerleave={() => githubScale.set(1)}
	/>
</Float>

<Float floatIntensity={2} floatingRange={[0.2, 0.3]}>
	<Warp
		rotation.y={warpRotation}
		position.y={0}
		position.z={2}
		position.x={-8}
		scale={$warpScale}
		on:pointerenter={() => warpScale.set(1.3)}
		on:pointerleave={() => warpScale.set(1)}
	/>
</Float>

<Float floatIntensity={2} floatingRange={[0.2, 0.3]}>
	<TerraformFlat
		rotation.y={terraformRotation}
		position.y={-2}
		position.z={-4}
		position.x={-6}
		scale={$terraformScale}
		on:pointerenter={() => terraformScale.set(1.3)}
		on:pointerleave={() => terraformScale.set(1)}
	/>
</Float>

<!-- <T.AxesHelper></T.AxesHelper>
<T.GridHelper></T.GridHelper> -->
