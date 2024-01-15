<script lang="ts">
	import { type TimelineItem } from '$lib/content/timeline';

	export let timelineItem: TimelineItem;
</script>

<div
	class="-mx-2 grid grid-cols-[20px,2fr] space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground"
>
	<svelte:component this={timelineItem.icon} class="h-full w-full" />
	<div class="space-y-1">
		<p class="text-sm font-medium leading-none">{timelineItem.title}</p>
		<p class="text-sm text-muted-foreground">{timelineItem.subTitle}</p>
	</div>
</div>
