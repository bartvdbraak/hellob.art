<script>
	import TimelineItem from './TimelineItem.svelte';
	import timelineItems from './timeline-items';
</script>

<svelte:head>
	<title>hellob.art &mdash; timeline</title>
	<meta name="description" content="Timeline showing " />
</svelte:head>

<div class="py-6 sm:py-8 lg:py-12 md:mt-8 mx-auto max-w-screen-xl px-4 md:px-8">
	<h2 class="text-3xl font-bold mb-8">Timeline</h2>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-3 pb-2">
		<div class="md:col-span-2">
			<p class="text-lg leading-relaxed mb-8">
				A timeline showing a multitude of endeavors in my career, education as well as personal
				milestones.
			</p>
		</div>
	</div>

	<div
		class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
	>
		{#each timelineItems as item}
			<TimelineItem title={item.title} description={item.description} date={item.date} />
		{/each}
	</div>
</div>
