<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { Tool } from '$lib/content/tools';

	export let toolItem: Tool;
	let { description, enhanced, logo, name, tagLine } = toolItem;
</script>

<Card.Root class="mb-4 inline-block hover:bg-muted/50">
	<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-1">
		<div>
			<Card.Title tag="h2" class="text-2xl font-bold">
				{name}
			</Card.Title>
			<span class="text-sm font-medium">{tagLine}</span>
		</div>
		{#if enhanced}
			<enhanced:img
				src={logo}
				alt="logo of {name}"
				class="h-10 w-10 object-contain"
				loading="lazy"
			/>
		{:else}
			<img src={logo} alt="logo of {name}" class="h-10 w-10 object-contain" loading="lazy" />
		{/if}
	</Card.Header>
	<Card.Content class="text-sm text-muted-foreground">
		{description}
	</Card.Content>
</Card.Root>
