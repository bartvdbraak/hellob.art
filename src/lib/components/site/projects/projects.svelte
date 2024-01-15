<script lang="ts">
	import * as Projects from './';
	import projects from '$lib/content/projects';
</script>

<div class="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2">
	{#each projects as project}
		{#if project.url}
			<a href={project.url} target="_blank">
				<Projects.Item projectsItem={project} />
			</a>
		{:else}
			<Projects.Item projectsItem={project} />
		{/if}
	{/each}
</div>
