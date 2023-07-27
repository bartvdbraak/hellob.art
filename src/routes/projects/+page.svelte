<script>
	import videowallImage from '$lib/assets/videowall-irl.jpeg';
	import tripleLogo from '$lib/assets/triple-logo.png';
	import zaantjeImage from '$lib/assets/zaantje-3d.png';
	import zaantjeLogo from '$lib/assets/zaantje-logo.png';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	let projects = [
		{
			id: 1,
			link: '#',
			headerImage: videowallImage,
			headerSubTitle: 'Internal Project',
			title: 'Videowall',
			description: `An internal application to control an impressive 6x5 monitor setup with a user-friendly
										frontend built on Next.js and a powerful backend developed in Golang.`,
			logo: tripleLogo,
			contributors: [],
			date: '2021'
		},
		{
			id: 2,
			link: 'https://zaantje.com',
			headerImage: zaantjeImage,
			headerSubTitle: 'Personal Project',
			title: 'Zaantje',
			description: `A SPA crafted with Nuxt.js and Vue.js, backed by Sanity CMS, taking you 
										on a virtual tour of Zaandam, showcasing locations of famous music videos.`,
			logo: zaantjeLogo,
			contributors: [],
			date: '2020'
		}
	];
</script>

<main class="container mx-auto px-4 py-8 text-left">
	<h2 class="text-3xl font-bold mb-8">My Projects</h2>
	<div class="w-full text-token grid grid-cols-1 md:grid-cols-2 gap-4">
		{#each projects as project}
			<ProjectCard
				link={project.link}
				headerImage={project.headerImage}
				headerSubTitle={project.headerSubTitle}
				title={project.title}
				description={project.description}
				logo={project.logo}
				contributors={project.contributors}
				date={project.date}
			/>
		{/each}
	</div>
</main>
