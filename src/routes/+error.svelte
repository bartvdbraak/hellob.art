<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>hellob.art &mdash; {$page.error?.message.toLowerCase() || 'error'}</title>
</svelte:head>

<div class="h-screen flex justify-center items-center">
	<h2 class="text-3xl font-bold mb-8">{$page.error?.message || 'An unknown error occurred.'}</h2>
</div>
