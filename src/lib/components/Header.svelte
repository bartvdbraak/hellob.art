<script lang="ts">
	import { AppBar, LightSwitch, ProgressBar, drawerStore } from '@skeletonlabs/skeleton';
	import GitHub from './icons/GitHub.svelte';
	import Hamburger from './icons/Hamburger.svelte';
	import LinkedIn from './icons/LinkedIn.svelte';

	export let progress: number;

	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<button
			aria-label="Toggle navigation menu"
			class="md:hidden btn btn-sm mr-4"
			on:click={drawerOpen}
		>
			<span>
				<Hamburger />
			</span>
		</button>
		<img width="32" height="24" src="./icon.svg" alt="Logo" srcset="" class="" />
		<h1 class="h6">
			<span
				class="bg-gradient-to-br logo-text-gradient bg-clip-text text-transparent box-decoration-clone font-mono font-bold tracking-tighter pl-3"
				>hellob.art</span
			>
		</h1>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<a
			href="https://linkedin.com/in/bartvdbraak"
			target="_blank"
			rel="noopener noreferrer"
			class="btn-icon btn-icon-sm hover:variant-soft-primary"
			><LinkedIn /><span class="sr-only">LinkedIn Profile of Bart van der Braak</span></a
		>
		<a
			href="https://github.com/bartvdbraak"
			target="_blank"
			rel="noopener noreferrer"
			class="btn-icon btn-icon-sm hover:variant-soft-primary"
			><GitHub /><span class="sr-only">GitHub Profile of Bart van der Braak</span></a
		>
		<LightSwitch />
	</svelte:fragment>
</AppBar>

<span id="progress-bar-label" class="sr-only">Loading Progress</span>
<ProgressBar
	label="Progress Bar"
	labelledby="progress-bar-label"
	value={progress}
	max={100}
	rounded=""
/>
