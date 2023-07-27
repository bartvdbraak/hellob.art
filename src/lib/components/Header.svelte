<script lang="ts">
	import { AppBar, LightSwitch, drawerStore } from '@skeletonlabs/skeleton';
	import GitHub from './icons/GitHub.svelte';
	import Hamburger from './icons/Hamburger.svelte';

	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
			<span>
				<Hamburger />
			</span>
		</button>
		<img src="./icon.svg" alt="Logo" srcset="" class="pr-2" />
		<code class="code">hellob.art</code>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<a
			href="https://github.com/bartvdbraak/hellob.art"
			target="_blank"
			rel="noopener noreferrer"
			class="btn-icon variant-primary"><GitHub /></a
		>
		<LightSwitch />
	</svelte:fragment>
</AppBar>
