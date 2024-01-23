<script lang="ts">
	import { Circle } from 'radix-icons-svelte';
	import { Calendar, Scale } from 'lucide-svelte';
	import * as Card from '$lib/components/ui/card';
	import type { Project } from '$lib/content/projects';

	export let projectsItem: Project;
	let { logo, title, description, languages, license, year } = projectsItem;
</script>

<Card.Root class="mb-6 inline-block hover:bg-muted/50">
	<Card.Header class="grid grid-cols-[1fr_72px] items-start gap-4 space-y-0">
		<div class="space-y-1">
			<Card.Title tag="h2" class="mb-2">{title}</Card.Title>
			<Card.Description>
				{description}
			</Card.Description>
		</div>
		<div class="justify-self-end">
			<enhanced:img src={logo} class="rounded-sm" alt={`${title} logo`} />
		</div>
	</Card.Header>
	<Card.Content>
		<div class="flex space-x-4 text-sm text-muted-foreground">
			{#each languages as language}
				<div class="flex items-center">
					<Circle class="mr-1 h-3 w-3 {language.color}" />
					{language.name}
				</div>
			{/each}
			<div class="flex items-center">
				<Scale class="mr-1 h-3 w-3" />
				{license}
			</div>
			<div class="flex items-center">
				<Calendar class="mr-1 h-3 w-3" />
				{year}
			</div>
		</div>
	</Card.Content>
</Card.Root>
