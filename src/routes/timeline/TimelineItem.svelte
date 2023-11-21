<script lang="ts">
	export let title: string;
	export let logo: string;
	export let description: string;
	export let date: string;
</script>

<div
	class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
>
	<div
		class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 gro up-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 overflow-hidden"
	>
		<img src={logo} alt="{title} logo" loading="lazy" />
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
