<script lang="ts">
	import { page } from '$app/stores';
	$: classesActive = (href: string) => (href === $page.url.pathname ? '!bg-primary-500' : '');

	export let routes: { url: string; label: string }[];
</script>

<nav class="list-nav m-5">
	<ul>
		{#each routes as route}
			<li>
				<a class="{classesActive(route.url)}" href={route.url}>{route.label}</a>
			</li>
		{/each}
	</ul>
</nav>
