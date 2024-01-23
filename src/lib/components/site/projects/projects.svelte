<script lang="ts">
	import * as Projects from './';
	import projects from '$lib/content/projects';
</script>

<div class="w-full columns-1 gap-6 md:columns-2">
	{#each projects as project}
		<Projects.Item projectsItem={project} />
	{/each}
</div>
