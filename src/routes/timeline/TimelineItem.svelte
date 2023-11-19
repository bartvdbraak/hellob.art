<script lang="ts">
	import type { TimelineItem } from './timeline-items';

	export let title: TimelineItem['title'];
	export let description: TimelineItem['description'];
	export let date: TimelineItem['date'];
</script>

<div
	class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
>
	<!-- Icon -->
	<div
		class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
	>
		<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
			<path
				fill-rule="nonzero"
				d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
			/>
		</svg>
	</div>

	<div
		class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] border border-white/10 bg-white/5 p-4 shadow-xl duration-200 hover:bg-white/10 hover:shadow-2xl rounded"
	>
		<div class="flex items-center justify-between space-x-2 mb-1">
			<div class="font-bold">{title}</div>
			<time class="font-caveat font-medium text-">{date}</time>
		</div>
		<div class="text-slate-500">
			{description}
		</div>
	</div>
</div>
