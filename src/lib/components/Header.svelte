<script lang="ts">
	import { AppBar, LightSwitch, ProgressBar, drawerStore } from '@skeletonlabs/skeleton';
	import GitHub from './icons/GitHub.svelte';
	import Hamburger from './icons/Hamburger.svelte';
	import LinkedIn from './icons/LinkedIn.svelte';
	import routes from '$lib/routes';
	import { page } from '$app/stores';
	$: classesActive = (href: string) => (href === $page.url.pathname ? 'underline' : '');
	export let progress: number;

	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<AppBar background="">
	<svelte:fragment slot="lead">
		<a href="/" class="md:ml-4 ml-1">
			<img width="212" height="32" src="./logo@3x.png" alt="hellob.art logo" />
		</a>
	</svelte:fragment>

	<nav class="hidden md:block">
		<ul class="flex">
			{#each routes as route}
				<li class="mx-2">
					<a
						class={`${classesActive(
							route.url
						)} decoration-indigo-500 hover:underline hover:decoration-indigo-300`}
						href={route.url}
					>
						<span class="flex-auto">{route.label}</span>
					</a>
				</li>{/each}
		</ul>
	</nav>

	<svelte:fragment slot="trail">
		<a
			href="https://linkedin.com/in/bartvdbraak"
			target="_blank"
			rel="external"
			class="btn-icon btn-icon-sm hover:variant-soft-primary"
		>
			<LinkedIn />
			<span class="sr-only">LinkedIn Profile of Bart van der Braak</span>
		</a>
		<a
			href="https://github.com/bartvdbraak"
			target="_blank"
			rel="external"
			class="btn-icon btn-icon-sm hover:variant-soft-primary"
		>
			<GitHub />
			<span class="sr-only">GitHub Profile of Bart van der Braak</span>
		</a>
		<LightSwitch bgLight="bg-white" fillLight="fill-white" width="w-8" height="h-4" />
		<button
			aria-label="Toggle navigation menu"
			class="btn-icon btn-icon-sm hover:variant-soft-primary md:hidden"
			on:click={drawerOpen}
		>
			<Hamburger />
		</button>
	</svelte:fragment>
</AppBar>

<span id="progress-bar-label" class="sr-only">Loading Progress</span>
<ProgressBar
	label="Progress Bar"
	labelledby="progress-bar-label"
	height="h-0.5"
	value={progress}
	max={100}
	rounded=""
	meter="bg-indigo-500"
/>
