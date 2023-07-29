<script lang="ts">
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

	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

	$: if (browser && analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId,
			debug: false
		});
	}

	let routes = [
		{ url: '/', label: 'Home' },
		{ url: '/projects', label: 'Projects' },
		{ url: '/tools', label: 'Tools' },
		{ url: '/blog', label: 'Blog' }
	];

	let progress = 0;

	function handleScroll(event: Event) {
		const { scrollTop, scrollHeight, clientHeight } = event.currentTarget as HTMLElement;
		progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
	}
</script>

<Drawer width="w-[280px] md:w-[480px]">
	<Navigation {routes} />
</Drawer>

<AppShell slotSidebarLeft="w-0 md:w-40" on:scroll={handleScroll}>
	<svelte:fragment slot="header">
		<Header {progress} />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation {routes} />
	</svelte:fragment>
	<!-- Router Slot -->
	<div class="container p-4 mx-auto">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
