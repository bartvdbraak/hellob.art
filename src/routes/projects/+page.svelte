<script>
	import videowallImage from '$lib/assets/videowall.jpeg';
	import videowallLogo from '$lib/assets/videowall-logo.png';
	import ticketDashboardImage from '$lib/assets/ticketdashboard.png';
	import ticketDashboardLogo from '$lib/assets/triple-logo.png';
	import zaantjeImage from '$lib/assets/zaantje.png';
	import zaantjeLogo from '$lib/assets/zaantje-logo.png';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	let projects = [
		{
			id: 1,
			link: '#',
			headerImage: videowallImage,
			headerSubTitle: 'Private Project',
			title: 'Videowall',
			description: `An internal application to control an impressive 6x5 monitor setup with a user-friendly
										frontend built with React and Next.js utilizing a powerful backend developed in Golang.`,
			logo: videowallLogo,
			contributors: [],
			date: '2021'
		},
		{
			id: 2,
			link: '#',
			headerImage: ticketDashboardImage,
			headerSubTitle: 'Private Project',
			title: 'Ticket Dashboard',
			description: `Web app that consolidates tickets from various sources into one view for easy navigation, filters, and search for efficient 
			ticket management. Developed with Next.js for frontend and Golang for backend.`,
			logo: ticketDashboardLogo,
			contributors: [],
			date: '2020'
		},
		{
			id: 3,
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

<svelte:head>
	<title>hellob.art &mdash; projects</title>
	<meta name="description" content="Explore a diverse collection of web applications and virtual tours in the portfolio of a passionate DevOps engineer. Discover innovative projects in React, Golang, Next.js, and more.">
</svelte:head>

<main class="container mx-auto px-4 py-8 text-left">
	<h2 class="text-3xl font-bold mb-8">My Projects</h2>

	<p class="text-lg leading-relaxed mb-8">
		Here, you'll find a curated collection of projects that I've either created or contributed to as
		a passionate DevOps engineer and developer. This portfolio encompasses a diverse range of
		endeavors, including both public and private projects. With a mix of open-source contributions
		and private collaborations from my corporate endeavors, this showcase represents my dedication
		to pushing the boundaries of innovation in various domains.
	</p>

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
