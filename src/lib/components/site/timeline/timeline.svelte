<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Timeline from './';
	import timeline from '$lib/content/timeline';
</script>

<Card.Root>
	<Card.Header class="pb-3">
		<Card.Title tag="h2">Timeline</Card.Title>
		<Card.Description>
			A time-based overview showcasing when I embarked on projects, jobs, certifications, and
			various events.
		</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-1">
		{#each [...new Set(timeline.map((item) => item.startYear))].sort((a, b) => b - a) as year}
			<Timeline.Break date={`${year}`} />
			{#each timeline as item}
				{#if item.startYear === year}
					<Timeline.Item timelineItem={item} />
				{/if}
			{/each}
		{/each}
	</Card.Content>
</Card.Root>
