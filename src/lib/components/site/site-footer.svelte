<script lang="ts">
	import { Blocks, Cloud } from 'lucide-svelte';
	import { siteConfig } from '$lib/config/site';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Code } from 'radix-icons-svelte';
</script>

<footer class="container py-6">
	<div class="space-y-1">
		<p class="text-center text-sm text-muted-foreground">
			&copy; {new Date().getFullYear()} &mdash; {siteConfig.author}. Licensed under GPL-3.0.
		</p>
	</div>
	<Separator class="my-2" />
	<div class="flex justify-center">
		<div class="flex h-5 items-center space-x-4 text-xs">
			<div>
				<span class="hidden sm:inline">Built using</span>
				<Blocks class="inline h-[1rem] w-[1rem] sm:hidden" />
				<a
					href={siteConfig.links.shadcnSvelte}
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4">shadcn-svelte</a
				>
			</div>
			<Separator orientation="vertical" />
			<div>
				<span class="hidden sm:inline">Hosted on</span>
				<Cloud class="inline h-[1rem] w-[1rem] sm:hidden" />
				<a
					href={siteConfig.links.vercel}
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4">Vercel</a
				>
			</div>
			<Separator orientation="vertical" />
			<div>
				<span class="hidden sm:inline">Source code at</span>
				<Code class="inline h-[1rem] w-[1rem] sm:hidden" />
				<a
					href={siteConfig.links.gitHubProject}
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4">GitHub</a
				>
			</div>
		</div>
	</div>
</footer>
