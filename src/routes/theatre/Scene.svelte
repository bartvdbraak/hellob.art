<script>
	import { T, useFrame } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import Warp from '../toolbox/models/Warp.svelte';

	let githubRotation = 0;
	useFrame((state, delta) => {
		githubRotation += 0.1 * delta;
	});
</script>

<T.PerspectiveCamera position={[0, 5, 10]} makeDefault>
	<OrbitControls target.y={1.5} />
</T.PerspectiveCamera>
<T.DirectionalLight intensity={0.5} position.x={2} position.y={3} />
<T.AmbientLight intensity={0.9} />

<Warp rotation.y={githubRotation} />

<T.AxesHelper></T.AxesHelper>
<T.GridHelper></T.GridHelper>
