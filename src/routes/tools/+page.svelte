<script lang="ts">
	import { browser } from '$app/environment';
	import * as THREE from 'three';

	if (browser) {
		let camera: THREE.PerspectiveCamera;
		let scene: THREE.Scene;
		let renderer: THREE.WebGLRenderer;
		let cube: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>;

		const renderContainerId = 'renderOne';

		const init = () => {
			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

			renderer = new THREE.WebGLRenderer();
			renderer.setSize(window.innerWidth, window.innerHeight);
			const renderContainer = document.getElementById(renderContainerId);
			if (renderContainer) {
				renderContainer.appendChild(renderer.domElement);
				console.log('success')
			}

			const geometry = new THREE.BoxGeometry(1, 1, 1);
			const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
			cube = new THREE.Mesh(geometry, material);
			scene.add(cube);

			camera.position.z = 5;
		};

		const render = () => {
			renderer.clear();
			renderer.render(scene, camera);
		};

		const animate = () => {
			requestAnimationFrame(animate);

			cube.rotation.x += 0.005;
			cube.rotation.y += 0.005;

			render();
		};

		init();
		animate();
	}
</script>

<svelte:head>
	<title>hellob.art &mdash; tools</title>
</svelte:head>

<main class="container mx-auto px-4 py-8 text-left">
	<h2 class="text-3xl font-bold mb-8">DevOps</h2>
	<section id="renderOne"> </section>
	<h2 class="text-3xl font-bold mb-8">MacOS</h2>
	<h2 class="text-3xl font-bold mb-8">Other</h2>
</main>
