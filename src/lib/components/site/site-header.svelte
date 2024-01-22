<script lang="ts">
	import * as PageHeader from './page-header';
	export let title: string, subTitle: string;
</script>

<PageHeader.Root class="pb-8">
	<PageHeader.Heading>{title}</PageHeader.Heading>
	<PageHeader.Description>
		{subTitle}
	</PageHeader.Description>
	<slot />
</PageHeader.Root>
