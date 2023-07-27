<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import Footer from '../lib/components/Footer.svelte';
	import Navigation from '../lib/components/Navigation.svelte';
	import Header from '$lib/components/Header.svelte';

	export let routes = [
		{ url: '/', label: 'Home' },
		{ url: '/projects', label: 'Projects' },
		{ url: '/tools', label: 'Tools' },
		{ url: '/blog', label: 'Blog' }
	];
</script>

<Drawer>
	<Navigation {routes} />
</Drawer>

<AppShell slotSidebarLeft="w-0 md:w-52">
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation {routes} />
	</svelte:fragment>
	<!-- Router Slot -->
	<div class="container p-10 mx-auto">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
