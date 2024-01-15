<script lang="ts">
	import * as PageHeader from '$lib/components/site/page-header';
	import { Timeline } from '$lib/components/site/timeline';
</script>

<div class="container relative max-w-[980px]">
	<PageHeader.Root class="pb-8">
		<PageHeader.Heading>Experiences through time</PageHeader.Heading>
		<PageHeader.Description>
			Achievements in my education, career and personal life.
		</PageHeader.Description>
	</PageHeader.Root>

	<section>
		<Timeline />
	</section>
</div>
