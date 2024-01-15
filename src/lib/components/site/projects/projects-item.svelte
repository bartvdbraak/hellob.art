<script lang="ts">
	import { Circle } from 'radix-icons-svelte';
	import { Scale } from 'lucide-svelte';
	import * as Card from '$lib/components/ui/card';
	import type { Project } from '$lib/content/projects';
	import * as Avatar from '$lib/components/ui/avatar';

	export let projectsItem: Project;
	let { avatarImg, title, description, languages, license, year } = projectsItem;
</script>

<Card.Root class="hover:bg-muted/50">
	<Card.Header class="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
		<div class="space-y-1">
			<Card.Title tag="h2">{title}</Card.Title>
			<Card.Description>
				{description}
			</Card.Description>
		</div>
		<div class="justify-self-end">
			<Avatar.Root>
				<Avatar.Image src={avatarImg} alt={title} />
				<Avatar.Fallback>NA</Avatar.Fallback>
			</Avatar.Root>
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
			<div>
				Started in
				{year}
			</div>
		</div>
	</Card.Content>
</Card.Root>
