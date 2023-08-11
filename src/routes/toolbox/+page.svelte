<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import ToolCard from './ToolCard.svelte';
	import tools from './tools-cards';
</script>

<svelte:head>
	<title>hellob.art &mdash; toolbox</title>
	<meta
		name="description"
		content="Explore essential DevOps tools like Kubernetes, Terraform, Warp, and version control platforms such as GitHub."
	/>
</svelte:head>

<div class="py-6 sm:py-8 lg:py-12 md:mt-8 mx-auto max-w-screen-xl px-4 md:px-8">
	<h2 class="text-3xl font-bold mb-8">Toolbox</h2>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-3 pb-2">
		<div class="md:col-span-2">
			<p class="text-lg leading-relaxed mb-8">
				Welcome to the Toolbox, a comprehensive collection of the tools, applications, and software
				that fuel my daily work as a Developer and DevOps Engineer. From code creation to continuous
				integration, these are the technologies that enable me to build, test, and deploy with
				efficiency and precision. Explore the list below to understand my tech stack and maybe even
				discover something new for your own toolkit!
			</p>
		</div>
		<div class="md:col-span-1 flex justify-end">
			<div class="sm:h-60 w-full">
				<Canvas>
					<Scene />
				</Canvas>
			</div>
		</div>
	</div>

	<div class="columns-1 md:columns-2 lg:columns-3 gap-6 w-full mb-12">
		{#each tools as tool}
			<ToolCard
				name={tool.name}
				title={tool.title}
				description={tool.description}
				logo={tool.logo}
				toolUrl={tool.toolUrl}
			/>
		{/each}
	</div>
</div>
