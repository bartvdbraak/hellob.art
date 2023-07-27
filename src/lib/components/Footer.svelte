<script>
	import GitHub from './icons/GitHub.svelte';
	import Svelte from './icons/Svelte.svelte';
	import Vercel from './icons/Vercel.svelte';
</script>

<footer class="text-right px-4 py-2">
	<p>
		<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">
			Made with <Svelte />
		</a>
		|
		<a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
			Hosted on <Vercel />
		</a>
		|
		<a href="https://github.com/bartvdbraak/hellob.art" target="_blank" rel="noopener noreferrer">
			Source code at <GitHub />
		</a>
	</p>
	<p>
		Licensed under GPLv3 &mdash; &copy; {new Date().getFullYear()} hellob.art &mdash; Bart van der Braak
	</p>
</footer>

<style>
	:global(.inline-svg) {
		display: inline;
	}
</style>
