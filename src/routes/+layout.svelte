<script lang="ts">
	import { dev } from '$app/environment';
	import { Metadata, SiteFooter, SiteHeader, TailwindIndicator } from '$lib/components/site';
	import '../styles/globals.css';
	import { ModeWatcher } from 'mode-watcher';
	import { fly } from 'svelte/transition';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	inject({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();

	export let data;
</script>

<ModeWatcher />

<Metadata />

<div class="relative flex min-h-screen flex-col" id="page">
	<SiteHeader />
	<main class="mb-4 flex-1">
		{#key data.url}
			<div in:fly={{ x: -200, duration: 200, delay: 200 }} out:fly={{ x: 200, duration: 200 }}>
				<slot />
			</div>
		{/key}
	</main>
	<SiteFooter />
	{#if dev}
		<TailwindIndicator />
	{/if}
</div>
