<script lang="ts">
	import { Drawer, AppShell, initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();
	import '../app.postcss';
	import Footer from '../lib/components/Footer.svelte';
	import Navigation from '../lib/components/Navigation.svelte';
	import Header from '$lib/components/Header.svelte';

	import { fade } from 'svelte/transition';

	export let data;

	$: ({ pathname } = data);

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

<Drawer width="w-full" position="top" bgDrawer="bg-black/20 backdrop-blur">
	<div class="p-5 w-full align-center">
		<Navigation {routes} />
	</div>
</Drawer>

<AppShell on:scroll={handleScroll}>
	<svelte:fragment slot="header">
		<Header {progress} />
	</svelte:fragment>

	{#key pathname}
		<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
			<slot />
		</div>
	{/key}

	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
