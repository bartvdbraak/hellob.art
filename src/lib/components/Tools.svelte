<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import * as THREE from 'three';

	let camera: THREE.PerspectiveCamera,
		scene: THREE.Scene,
		renderer: THREE.WebGLRenderer,
		cube: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>;

  const renderContainerId = 'render';

	const toolsData = [
		{ name: 'Git', info: 'Short note about Git and its usage.' },
		{ name: 'DBeaver', info: 'Short note about DBeaver and its usage.' },
		{ name: 'Notion', info: 'Short note about Notion and its usage.' },
		{ name: 'Insomnia', info: 'Short note about Insomnia and its usage.' },
		{ name: 'Cyberduck', info: 'Short note about Cyberduck and its usage.' },
		{ name: 'Mullvad VPN', info: 'Short note about Mullvad VPN and its usage.' },
		{ name: 'Maccy', info: 'Short note about Maccy and its usage.' }
	];

	onMount(() => {
		init();
		addTools();
		animate();
	});

	const init = () => {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

		renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		const renderContainer = document.getElementById(renderContainerId);
		if (renderContainer) {
			renderContainer.appendChild(renderer.domElement);
		}

		camera.position.z = 5;
	};

	const addTool = (name: string, x: number, y: number, z: number) => {
		const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });
		cube = new THREE.Mesh(geometry, material);
		cube.position.set(x, y, z);
		scene.add(cube);

		cube.userData.name = name;
		cube.userData.info = toolsData.find((tool) => tool.name === name)?.info || '';

		cube.addEventListener('click', () => {
			alert(`${cube.userData.name}: ${cube.userData.info}`);
		});
	};

	const addTools = () => {
		addTool('Git', -2, 0, 0);
		addTool('DBeaver', 0, 0, 0);
		addTool('Notion', 2, 0, 0);
		addTool('Insomnia', -2, 2, 0);
		addTool('Cyberduck', 0, 2, 0);
		addTool('Mullvad VPN', 2, 2, 0);
		addTool('Maccy', 0, 4, 0);
	};

	const render = () => {
		renderer.clear();
		renderer.render(scene, camera);
	};

	const isMeshType = (object?: THREE.Object3D): object is THREE.Mesh => {
		return object?.type === 'Mesh';
	};

	const animate = () => {
		if (!browser) {
			return;
		}

		requestAnimationFrame(animate);

		scene.traverse((object: THREE.Object3D) => {
			if (isMeshType(object) && object.isMesh) {
				object.rotation.x += 0.005;
				object.rotation.y += 0.005;
			}
		});

		render();
	};
</script>

<section id="render" />
