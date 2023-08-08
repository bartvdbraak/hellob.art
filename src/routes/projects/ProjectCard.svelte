<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	import type { Project } from './projects-cards';

	export let headerImage: Project['headerImage'];
	export let headerSubTitle: Project['headerSubTitle'];
	export let title: Project['title'];
	export let description: Project['description'];
	export let logo: Project['logo'];
	export let contributors: Project['contributors'];
	export let date: Project['date'];
</script>

<div class="card bg-initial card-hover overflow-hidden">
	<header>
		<img
			src={headerImage}
			class="bg-black/50 w-full aspect-[21/9] object-cover object-top"
			alt="Post"
		/>
	</header>
	<div class="p-4 space-y-4">
		<header class="h6">{headerSubTitle}</header>
		<span class="h3" data-toc-ignore>{title}</span>
		<article>
			<p>
				{description}
			</p>
		</article>
	</div>
	<hr class="opacity-50" />
	<footer class="p-4 flex justify-start items-center space-x-4">
		<Avatar src={logo} width="w-8" />
		<div class="flex-auto flex justify-between items-center">
			{#each contributors as contributor}
				<Avatar src={contributor.imageSrc} width="w-8" />
			{/each}
			<small>{new Date(date).toLocaleDateString()}</small>
		</div>
	</footer>
</div>
