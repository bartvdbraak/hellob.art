<script lang="ts">
	import { page } from '$app/stores';
	import * as PageHeader from '$lib/components/site/page-header';
	import { buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import johnTravoltaGif from '$lib/assets/john-travolta.gif';
</script>

<div class="container relative max-w-[980px] pb-10">
	<PageHeader.Root>
		<PageHeader.Heading>{$page.error?.message}</PageHeader.Heading>
		<PageHeader.Description>This page is not available.</PageHeader.Description>
		<p class="text-sm text-orange-700 dark:text-orange-400">
			You can try going back to the home page.
		</p>
		<div class="flex w-full items-center justify-center space-x-4 py-4">
			<a href="/" class={cn(buttonVariants())}> Return Home </a>
		</div>
	</PageHeader.Root>
	<section class="flex">
		<img src={johnTravoltaGif} alt="John travolta unable to find your page" class="mx-auto w-1/2" />
	</section>
</div>
