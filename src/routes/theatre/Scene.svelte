<script>
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import { SheetObject } from '@threlte/theatre';
	import Kubernetes from '../toolbox/models/Kubernetes.svelte';
</script>

<T.PerspectiveCamera position={[0, 5, 10]} makeDefault>
	<OrbitControls target.y={1.5} />
</T.PerspectiveCamera>

<T.AxesHelper></T.AxesHelper>

<SheetObject key="Kubernetes" let:Transform>
	<Transform>
		<Kubernetes scale={1}></Kubernetes>
	</Transform>
</SheetObject>
