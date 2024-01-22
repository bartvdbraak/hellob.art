<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import johnTravoltaGif from '$lib/assets/john-travolta.gif';
	import { page } from '$app/stores';
	import { SiteHeader } from '$lib/components/site';
</script>

<SiteHeader
	title={`${$page.error?.message}`}
	subTitle={`This page is currently unavailable. Please try again later.`}
>
	<p class="text-sm text-orange-700 dark:text-orange-400">
		You can try going back to the home page.
	</p>
	<div class="flex w-full items-center justify-center space-x-4 py-4">
		<a href="/" class={cn(buttonVariants())}> Return Home </a>
	</div>
</SiteHeader>

<section class="flex">
	<img src={johnTravoltaGif} alt="John travolta unable to find your page" class="mx-auto w-1/2" />
</section>
