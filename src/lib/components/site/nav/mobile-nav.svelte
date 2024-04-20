<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/';
	import { Menu } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { navConfig } from '$lib/config/nav';
	import { siteConfig } from '$lib/config/site';
	import { Icons } from '../icons';
	import MobileLink from './mobile-link.svelte';

	let open = false;
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="ghost"
			class="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
		>
			<Menu class="h-5 w-5" />
			<span class="sr-only">Toggle Menu</span>
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="right" class="pr-0">
		<MobileLink href="/" class="flex items-center" bind:open>
			<span class="sr-only">Logo icon (return home)</span>
			<img src={Icons.logoIcon} class="mr-2 h-4 w-4" alt="icon of hellob.art" />
			<span class="font-mono font-bold tracking-tighter">{siteConfig.name}</span>
		</MobileLink>
		<div class="my-4 h-[calc(100vh-8rem)] overflow-auto pl-1 pt-10">
			<div class="flex flex-col space-y-3">
				{#each navConfig.mainNav as navItem, index (navItem + index.toString())}
					{#if navItem.href}
						<MobileLink href={navItem.href} bind:open class="pt-2 text-5xl font-bold">
							{navItem.title}
						</MobileLink>
					{/if}
				{/each}
			</div>
			<div class="flex flex-col space-y-2">
				{#each navConfig.sidebarNav as navItem, index (index)}
					<div class="flex flex-col space-y-3 pt-6">
						<h4 class="font-medium">{navItem.title}</h4>
						{#if navItem?.items?.length}
							{#each navItem.items as item}
								{#if !item.disabled && item.href}
									<MobileLink href={item.href} bind:open class="text-muted-foreground">
										{item.title}
										{#if item.label}
											<span
												class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000]"
											>
												{item.label}
											</span>
										{/if}
									</MobileLink>
								{/if}
							{/each}
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</Sheet.Content>
</Sheet.Root>
