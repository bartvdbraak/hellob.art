<script lang="ts">
	import type { PageData } from './$types';
	import { PostsList } from "sveltekit-notion-blog";
	export let data: PageData;
</script>

<svelte:head>
	<title>hellob.art &mdash; blog</title>
</svelte:head>

<main class="container mx-auto px-4 py-8 text-left">
	<h2 class="text-3xl font-bold mb-8">Blog posts</h2>
	<div class="max-w-4xl m-auto">
		<PostsList {data} />
	</div>
</main>
