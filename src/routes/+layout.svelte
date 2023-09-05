<script lang="ts">
	import { Drawer, AppShell, initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();
	import '../app.postcss';
	import Footer from '../lib/components/Footer.svelte';
	import Navigation from '../lib/components/Navigation.svelte';
	import Header from '$lib/components/Header.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	import { webVitals } from '$lib/vitals';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import routes from '$lib/routes';

	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

	$: if (browser && analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId,
			debug: false
		});
	}

	let progress = 0;

	function handleScroll(event: Event) {
		const { scrollTop, scrollHeight, clientHeight } = event.currentTarget as HTMLElement;
		progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
	}
</script>

<Drawer width="w-[280px] md:w-[200px]" position="right" bgDrawer="bg-black/30 backdrop-blur">
	<div class="p-5 w-full mx-auto">
		<h2 class="text-3xl font-bold mb-12 z-10 text-center">Pages</h2>
		<Navigation {routes} />
	</div>
</Drawer>

<AppShell on:scroll={handleScroll}>
	<svelte:fragment slot="header">
		<Header {progress} />
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
