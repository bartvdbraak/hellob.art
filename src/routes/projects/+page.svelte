<script>
	import ProjectCard from './ProjectCard.svelte';
	import projects from './projects-cards';
</script>

<svelte:head>
	<title>hellob.art &mdash; projects</title>
	<meta
		name="description"
		content="Explore a diverse collection of web applications and virtual tours in the portfolio of a passionate DevOps engineer. Discover innovative projects in React, Golang, Next.js, and more."
	/>
</svelte:head>

<div class="py-6 sm:py-8 lg:py-12 md:mt-8 mx-auto max-w-screen-xl px-4 md:px-8">
	<h2 class="text-3xl font-bold mb-8">Projects</h2>

	<p class="text-lg leading-relaxed mb-8">
		Here, you'll find a curated collection of projects that I've either created or contributed to as
		a passionate DevOps engineer and developer. This portfolio encompasses a diverse range of
		endeavors, including both public and private projects. With a mix of open-source contributions
		and private collaborations from my corporate endeavors, this showcase represents my dedication
		to pushing the boundaries of innovation in various domains.
	</p>

	<div class="w-full text-token grid grid-cols-1 md:grid-cols-2 gap-4">
		{#each projects as { link, headerImage, headerSubTitle, title, description, logo, contributors, date }}
			{#if link}
				<a href={link}>
					<ProjectCard
						{headerImage}
						{headerSubTitle}
						{title}
						{description}
						{logo}
						{contributors}
						{date}
					/>
				</a>
			{:else}
				<ProjectCard
					{headerImage}
					{headerSubTitle}
					{title}
					{description}
					{logo}
					{contributors}
					{date}
				/>
			{/if}
		{/each}
	</div>
</div>
