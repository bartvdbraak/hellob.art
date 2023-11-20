<script lang="ts">
	import { page } from '$app/stores';
	import type { Route } from '$lib/routes';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();

	$: classesActive = (href: string) => (href === $page.url.pathname ? '!text-primary-700' : '');

	export let routes: Route[];
</script>

<nav class="list-nav">
	<div class="flex justify-end pb-2">
		<button
			class="button"
			on:click={() => {
				drawerStore.close();
			}}>✕</button
		>
	</div>
	<ul>
		{#each routes as route}
			<li class="mb-2 flex justify-end">
				<a
					href={route.url}
					on:click={() => {
						drawerStore.close();
					}}
				>
					<span class="badge"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-chevron-right text-white"><path d="m9 18 6-6-6-6" /></svg
						></span
					>
					<span class="flex-auto {classesActive(route.url)} text-white">{route.label}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
