<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import * as THREE from 'three';
	import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';

	const svgGitHub = `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`;
	const loader = new SVGLoader();

	let canvasContainer: HTMLDivElement;
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;

	onMount(() => {
		if (!browser) return; // Ensure it runs only in the browser environment

		initThreeJS();
		animate();
	});

	function initThreeJS() {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(
			75,
			canvasContainer.clientWidth / canvasContainer.clientHeight,
			0.1,
			1000
		);
		camera.position.z = 5;

		renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
		renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
		renderer.setClearColor(0x000000, 0); // Transparent background

		const svgData = loader.parse(svgGitHub);
		const svgGroup = new THREE.Group();
		const material = new THREE.MeshNormalMaterial();

		// Loop through all of the parsed paths
		svgData.paths.forEach((path, i) => {
			const shapes = path.toShapes(true);

			// Each path has array of shapes
			shapes.forEach((shape, j) => {
				// Finally we can take each shape and extrude it
				const geometry = new THREE.ExtrudeGeometry(shape, {
					depth: 20,
					bevelEnabled: false
				});

				// Create a mesh and add it to the group
				const mesh = new THREE.Mesh(geometry, material);

				svgGroup.add(mesh);
			});
		});

		// Add our group to the scene (you'll need to create a scene)
		scene.add(svgGroup);

		canvasContainer.appendChild(renderer.domElement);

		// Handle window resizing
		window.addEventListener('resize', onWindowResize);
	}

	function onWindowResize() {
		if (!camera || !renderer) return;

		camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
	}

	function animate() {
		if (!browser) return; // Ensure it runs only in the browser environment

		requestAnimationFrame(animate);
		// Add animations or changes to the scene here if needed
		if (scene && camera && renderer) {
			renderer.render(scene, camera);
		}
	}

	// Cleanup function
	function cleanup() {
		if (!browser) return; // Ensure it runs only in the browser environment

		window.removeEventListener('resize', onWindowResize);
		renderer?.dispose();
	}

	// Cleanup when the component is destroyed
	onDestroy(cleanup);
</script>

<svelte:head>
	<title>hellob.art &mdash; tools</title>
</svelte:head>

<main class="container mx-auto px-4 py-8 text-left">
	<h2 class="text-3xl font-bold mb-8">Tools</h2>
</main>

<div bind:this={canvasContainer} class="canvas-container" />

<style>
	.canvas-container {
		width: 100%;
		height: 100%;
	}
</style>
