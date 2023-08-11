<script>
	import GitHub from './icons/GitHub.svelte';
	import Svelte from './icons/Svelte.svelte';
	import Vercel from './icons/Vercel.svelte';
</script>

<footer class="text-center px-4 py-4 dark:text-indigo-300 text-indigo-900">
	<a href="https://svelte.dev/" target="_blank" rel="external">
		Made with <Svelte />
	</a>
	<span class="divider-vertical mx-2" />
	<a href="https://vercel.com/" target="_blank" rel="external">
		Hosted on <Vercel />
	</a>
	<span class="divider-vertical mx-2" />
	<a href="https://github.com/bartvdbraak/hellob.art" target="_blank" rel="external">
		Source code at <GitHub />
	</a>
	<br class="my-1" />
	<span> Licensed under GPLv3 </span>
	<span class="divider-vertical mx-2" />
	<span>
		&copy {new Date().getFullYear()} hellob.art
	</span>
	<span class="divider-vertical mx-2" />
	<span> Bart van der Braak </span>
</footer>

<style>
	:global(.inline-svg) {
		display: inline;
	}
</style>
