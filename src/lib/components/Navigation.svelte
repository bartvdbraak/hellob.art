<script lang="ts">
	import { page } from '$app/stores';
	import { drawerStore } from '@skeletonlabs/skeleton';
	$: classesActive = (href: string) => (href === $page.url.pathname ? '!bg-primary-500' : '');

	export let routes: { url: string; label: string }[];

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-3">
	<ul>
		{#each routes as route}
			<li class="pb-2">
				<a class={classesActive(route.url)} href={route.url} on:click={drawerClose}>{route.label}</a
				>
			</li>
		{/each}
	</ul>
</nav>
