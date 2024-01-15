<script lang="ts">
	import * as PageHeader from '$lib/components/site/page-header';
	import { Tools } from '$lib/components/site/tools';
</script>

<div class="container relative max-w-[980px]">
	<PageHeader.Root class="pb-8">
		<PageHeader.Heading>Inside my toolbox</PageHeader.Heading>
		<PageHeader.Description>
			Tools, applications, and software that fuels my development and operations work.
		</PageHeader.Description>
	</PageHeader.Root>

	<section class="flex justify-center">
		<Tools />
	</section>
</div>
