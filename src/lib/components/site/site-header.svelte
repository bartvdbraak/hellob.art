<script lang="ts">
	import { Icons, ModeToggle, MainNav, MobileNav } from '$lib/components/site';
	import { siteConfig } from '$lib/config/site';
	import { cn } from '$lib/utils';
	import { buttonVariants } from '../ui/button';
</script>

<header
	class="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 items-center">
		<a href="/" class="mr-6 flex items-center space-x-2">
			<span class="sr-only">Logo (return home)</span>
			<Icons.logo />
		</a>
		<MainNav />
		<div class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
			<nav class="flex">
				<a href={siteConfig.links.gitHubProfile} target="_blank" rel="noopener noreferrer">
					<div
						class={cn(
							buttonVariants({
								size: 'sm',
								variant: 'ghost'
							}),
							'h-9 w-9 px-0'
						)}
					>
						<Icons.gitHub class="h-4 w-4" />
						<span class="sr-only">GitHub</span>
					</div>
				</a>
				<a href={siteConfig.links.linkedIn} target="_blank" rel="noreferrer">
					<div
						class={cn(
							buttonVariants({
								size: 'sm',
								variant: 'ghost'
							}),
							'h-9 w-9 px-0'
						)}
					>
						<Icons.linkedIn class="h-4 w-4" />
						<span class="sr-only">LinkedIn</span>
					</div>
				</a>
				<ModeToggle />
			</nav>
		</div>
		<MobileNav />
	</div>
</header>
