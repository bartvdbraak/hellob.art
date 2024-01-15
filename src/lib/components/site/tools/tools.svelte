<script lang="ts">
	import * as Tools from './';
	import tools from '$lib/content/tools';
</script>

<div class="columns-1 gap-4 md:columns-2 lg:columns-3">
	{#each tools as tool}
		<a href={tool.url} target="_blank">
			<Tools.Item toolItem={tool} />
		</a>
	{/each}
</div>
