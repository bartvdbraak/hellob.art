<script lang="ts">
	import { page } from '$app/stores';
	import type { Route } from '$lib/routes';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();

	$: classesActive = (href: string) =>
		href === $page.url.pathname ? '!bg-secondary-500 text-indigo-100' : '';

	export let routes: Route[];
</script>

<nav class="list-nav">
	<ul>
		{#each routes as route}
			<li class="mb-2">
				<a
					class={classesActive(route.url)}
					href={route.url}
					on:click={() => {
						drawerStore.close();
					}}
				>
					<span class="badge bg-secondary-500"
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
							class="lucide lucide-chevron-righ text-white"><path d="m9 18 6-6-6-6" /></svg
						></span
					>
					<span class="flex-auto">{route.label}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
