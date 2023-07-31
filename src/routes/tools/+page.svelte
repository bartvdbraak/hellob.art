<!-- src/routes/tools/+page.svelte -->
<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { T } from '@threlte/core';
	import { ContactShadows, Float, Grid, OrbitControls } from '@threlte/extras';
	import Github from './models/Github.svelte';
	import TerraformFlat from './models/TerraformFlat.svelte';
	import Kubernetes from './models/Kubernetes.svelte';
	import Warp from './models/Warp.svelte';
</script>

<svelte:head>
	<title>hellob.art &mdash; tools</title>
	<meta name="description" content="Explore essential DevOps tools like Kubernetes, Terraform, Warp, and version control platforms GitHub, Azure DevOps, and GitLab.">
</svelte:head>

<main class="container mx-auto px-4 py-8 text-left">
	<h2 class="text-3xl font-bold mb-8">Tools</h2>

	<h2 class="text-2xl font-bold mb-8">Kubernetes</h2>

	<p class="text-lg leading-relaxed mb-8">
		Kubernetes is an indispensable part of my daily routine, providing powerful container
		orchestration capabilities for seamless application deployment and scaling. I enhance my
		Kubernetes workflows with essential tools like k9s for cluster interactions, ArgoCD for
		GitOps-based continuous delivery, Kustomize for configuration customization, and AKS (Azure
		Kubernetes Service) for managed solutions. This combination streamlines my tasks and ensures
		efficient, reliable application management.
	</p>

	<h2 class="text-2xl font-bold mb-8">Terraform</h2>

	<p class="text-lg leading-relaxed mb-8">
		Terraform plays a central role in my DevOps toolkit, empowering me to manage and provision
		infrastructure efficiently as code. It saves valuable time and effort while maintaining
		consistency across deployments, preventing configuration drift in dynamic cloud environments.
		The reproductibility that Terraform offers is a game-changer, enabling easy and reliable
		environment recreation for testing and development. Seamless integration with Azure DevOps
		allows for streamlined CI/CD pipelines, instilling confidence in continuously delivering
		infrastructure changes. Embracing Terraform has simplified my daily tasks and enhanced the
		overall robustness and stability of our cloud infrastructure.
	</p>

	<div class="max-h-80">
		<Canvas>
			<T.PerspectiveCamera makeDefault position={[-10, 15, 20]} fov={10}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					enableDamping
					autoRotateSpeed={0.2}
					target.y={3}
				/>
			</T.PerspectiveCamera>

			<T.DirectionalLight intensity={0.5} position.x={5} position.y={3} />
			<T.AmbientLight intensity={0.2} />

			<!-- <Grid
			position.y={-0.001}
			cellColor="#ffffff"
			sectionColor="#ffffff"
			sectionThickness={0}
			fadeDistance={40}
			cellSize={2}
		/> -->

			<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />

			<Float floatIntensity={1} floatingRange={[0, 1]}>
				<Github position.y={0} position.z={-0.75} scale={50} />
			</Float>

			<Float floatIntensity={1} floatingRange={[0, 1]}>
				<TerraformFlat position.y={0} position.z={-8} position.x={-5} scale={10} />
			</Float>

			<Float floatIntensity={1} floatingRange={[0, 1]}>
				<Kubernetes position.y={0} position.z={-2} position.x={-5} scale={100} />
			</Float>

			<Float floatIntensity={1} floatingRange={[0, 1]}>
				<Warp position.y={0} position.z={-1} position.x={6} scale={8} />
			</Float>
		</Canvas>
	</div>

	<h2 class="text-2xl font-bold mb-8">Warp</h2>

	<p class="text-lg leading-relaxed mb-8">
		Warp, the high-performance terminal built in Rust, is an essential tool I rely on daily for
		development and operations. Its full-text editor for commands, visual grouping of outputs into
		blocks, and enhanced shortcuts have significantly boosted my productivity and made CLI
		interactions more intuitive. With its impressive speed, multiplatform support, and seamless
		integration into existing shells, Warp excels in handling complex tasks, making it indispensable
		for efficient and responsive terminal operations.
	</p>

	<h2 class="text-2xl font-bold mb-8">GitHub, Azure DevOps and Gitlab</h2>

	<p class="text-lg leading-relaxed mb-8">
		In my daily work, essential platforms like GitHub, Azure DevOps, and GitLab play a crucial role.
		For public and personal projects, GitHub provides robust version control and collaboration
		tools. Azure DevOps, on the other hand, is my preferred choice for private and corporate
		projects, thanks to seamless integration with Azure services and powerful CI/CD capabilities,
		optimizing application development and deployment. Additionally, I leverage GitLab for specific
		projects, benefiting from its strong version control features and CI/CD pipelines. Together,
		these platforms empower efficient collaboration, project management, and development processes,
		catering to a wide range of contexts.
	</p>
</main>
