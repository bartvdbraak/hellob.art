<!-- src/routes/tools/+page.svelte -->
<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { T } from '@threlte/core';
	import { ContactShadows, Float, Grid, OrbitControls } from '@threlte/extras';
	import Github from './Github.svelte';
	import TerraformFlat from './TerraformFlat.svelte';
	import Kubernetes from './Kubernetes.svelte';
</script>

<svelte:head>
	<title>hellob.art &mdash; tools</title>
</svelte:head>

<main class="container mx-auto px-4 py-8 text-left">
	<h2 class="text-3xl font-bold mb-8">Tools</h2>

	<Canvas>
		<T.PerspectiveCamera makeDefault position={[-10, 10, 30]} fov={15}>
			<OrbitControls
				autoRotate
				enableZoom={false}
				enableDamping
				autoRotateSpeed={0.2}
				target.y={3}
			/>
		</T.PerspectiveCamera>

		<T.DirectionalLight intensity={0.5} position.x={5} position.y={10} />
		<T.AmbientLight intensity={0.2} />

		<Grid
			position.y={-0.001}
			cellColor="#ffffff"
			sectionColor="#ffffff"
			sectionThickness={0}
			fadeDistance={40}
			cellSize={2}
		/>

		<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />

		<Float floatIntensity={1} floatingRange={[0, 1]}>
			<Github position.y={0.4} position.z={-0.75} scale={50} />
		</Float>

		<Float floatIntensity={1} floatingRange={[0, 1]}>
			<TerraformFlat position.y={0.4} position.z={-4} scale={10} />
		</Float>

		<Float floatIntensity={1} floatingRange={[0, 1]}>
			<Kubernetes position.y={0.4} position.z={-2} position.x={-3} scale={100} />
		</Float>
	</Canvas>
</main>
