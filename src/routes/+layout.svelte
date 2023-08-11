<script lang="ts">
	// import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, Drawer } from '@skeletonlabs/skeleton';
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

<Drawer width="w-[280px] md:w-[200px]" position="right" bgDrawer="bg-gray-200 dark:bg-gray-800">
	<div class="p-5 w-full mx-auto">
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
