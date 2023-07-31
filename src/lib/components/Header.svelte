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
		<button aria-label="Toggle navigation menu" class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
			<span>
				<Hamburger />
			</span>
		</button>
		<img src="./icon.svg" alt="Logo" srcset="" class="pr-2" />
		<h2 class="code">hellob.art</h2>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<a
			href="https://linkedin.com/in/bartvdbraak"
			target="_blank"
			rel="noopener noreferrer"
			class="btn-icon btn-icon-sm hover:variant-soft-primary"><LinkedIn /><span class="sr-only">LinkedIn Profile of Bart van der Braak</span></a
		>
		<a
			href="https://github.com/bartvdbraak"
			target="_blank"
			rel="noopener noreferrer"
			class="btn-icon btn-icon-sm hover:variant-soft-primary"><GitHub /><span class="sr-only">GitHub Profile of Bart van der Braak</span></a
		>
		<LightSwitch />
	</svelte:fragment>
</AppBar>

<ProgressBar label="Progress Bar" value={progress} max={100} rounded="" />