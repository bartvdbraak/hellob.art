<script lang="ts">
	import * as PageHeader from '$lib/components/site/page-header';
	import { Projects } from '$lib/components/site/projects';
</script>

<div class="container relative max-w-[980px]">
	<PageHeader.Root class="pb-8">
		<PageHeader.Heading>Projects I've realized</PageHeader.Heading>
		<PageHeader.Description>
			Explore some of the projects I worked on in the past.
		</PageHeader.Description>
	</PageHeader.Root>

	<section class="flex justify-center">
		<Projects />
	</section>
</div>
