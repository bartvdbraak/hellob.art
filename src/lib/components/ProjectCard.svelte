<script>
	import { Avatar } from '@skeletonlabs/skeleton';

	export let link = '';
	export let headerImage = '';
	export let headerSubTitle = '';
	export let title = '';
	export let description = '';
	export let logo = '';
	/**
	 * @type {any[]}
	 */
	export let contributors = [];
	export let date = '';
</script>

<a class="card bg-initial card-hover overflow-hidden" href={link}>
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
</a>
