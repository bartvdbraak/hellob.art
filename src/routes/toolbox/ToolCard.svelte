<script lang="ts">
	export let name: string;
	export let title: string;
	export let description: string;
	export let logo: string;
	export let toolUrl: string;
</script>

<a
	href={toolUrl}
	target="_blank"
	rel="external"
	class="mb-6 inline-block h-full w-full rounded-md border border-white/10 bg-white/5 p-4 shadow-xl duration-200 hover:bg-white/10 hover:shadow-2xl"
>
	<div class="flex flex-col gap-6">
		<div class="flex gap-6">
			<img src={logo} alt={name + ' logo'} class="h-12 w-12 rounded-sm object-contain" />
			<div class="grow">
				<h4 class="mb-0">{name}</h4>
				<p class="text-faded text-sm font-normal">{title}</p>
			</div>
		</div>
		<p class="text-faded mt-0 text-base font-normal">{description}</p>
	</div>
</a>
