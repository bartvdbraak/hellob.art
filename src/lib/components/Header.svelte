<script>
	import { AppBar } from "@skeletonlabs/skeleton";
	import GitHub from "./icons/GitHub.svelte";
</script>

<AppBar>
  <svelte:fragment slot="lead">
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
  </svelte:fragment>
</AppBar>