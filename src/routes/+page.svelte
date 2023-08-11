<script lang="ts">
	import { calculateAge } from '$lib/calculate-age';
	import bartvdbraakImage from '$lib/assets/bartvdbraak.jpg';
	import catWhiskeyImage from '$lib/assets/cat-whiskey.jpg';
</script>

<svelte:head>
	<title>hellob.art &mdash; home</title>
	<meta
		name="description"
		content="Meet Bart, a passionate DevOps engineer from Zaandam, Netherlands. With expertise in Azure, Kubernetes, and automation, he loves solving challenges through code. Discover his journey, interests in cats and whiskey, and how to connect with him for exciting collaborations."
	/>
</svelte:head>

<div class="py-6 sm:py-8 lg:py-12 md:mt-8 mx-auto max-w-screen-xl px-4 md:px-8">
	<h2 class="text-3xl font-bold mb-12 z-10">Bart van der Braak</h2>

	<div class="grid gap-8 md:grid-cols-2 lg:gap-12">
		<div class="relative">
			<div class="absolute inset-0 bg-gradient-to-tr from-blue-500 to-transparent bg-repeat"></div>
			<div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto sticky top-10">
				<img
					src={bartvdbraakImage}
					loading="lazy"
					alt="Bart van der Braak with a noire effect"
					class="h-full w-full object-cover profile-fit"
				/>
			</div>
		</div>

		<div>
			<p class="text-center font-bold text-indigo-500 md:text-left">Who I am</p>

			<h1
				class="mb-4 text-center text-2xl font-bold light:text-gray-800 sm:text-3xl md:mb-6 md:text-left"
			>
				A tech journey
			</h1>

			<p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
				My journey in the tech industry began during my Information Sciences studies, where I fell
				in love with data-driven projects and statistical learning. This passion led me to explore
				languages like Python and LaTeX, enabling me to bring ideas to life through powerful data
				management and visualization.
			</p>

			<h2
				class="mb-2 text-center text-xl font-semibold light:text-gray-800 sm:text-2xl md:mb-4 md:text-left"
			>
				Present day
			</h2>

			<p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
				I'm a passionate DevOps engineer based in Zaandam, Netherlands. At {calculateAge(
					'1994-10-18'
				)}
				years old, I've already gathered a wealth of experience and expertise in the world of technology.
				From programming in Python, Javascript, and Bash to utilizing cutting-edge technologies provisioned
				using Terraform, Bicep, and Kubernetes, I've honed my skills to drive efficient and innovative
				solutions.
			</p>
			<p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
				At <a class="anchor" href="https://www.wearetriple.com/" target="_blank" rel="external"
					>Triple</a
				>, I've embraced the world of Azure and Azure DevOps, mastering the intricacies of cloud
				architecture and deployment. Attaining certifications like AZ-104 and CKA has further
				solidified my expertise, empowering me to build and manage robust, scalable, and secure
				cloud environments. My proficiency in containerization and Kubernetes has allowed me to take
				application development to new heights, ensuring seamless and efficient deployment at scale.
			</p>
		</div>
	</div>
	<hr class="my-20 border-t border-gray-300" />

	<div class="grid gap-8 md:grid-cols-2 lg:gap-12">
		<div>
			<p class="text-center font-bold text-indigo-500 md:text-left">What I am about</p>

			<h1
				class="mb-4 text-center text-2xl font-bold light:text-gray-800 sm:text-3xl md:mb-6 md:text-left"
			>
				Cats, code and automation
			</h1>

			<p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
				As a DevOps engineer, I thrive on solving complex challenges with the power of code and
				automation. My passion for streamlining workflows led me to create internal tooling using
				APIs, boosting productivity for myself and my colleagues. Outside of work, I enjoy taking on
				side projects that push my boundaries, expanding my skill set, and exploring new
				technologies. I strongly believe that innovation and continuous learning are key drivers of
				success in the ever-evolving tech landscape.
			</p>

			<h2
				class="mb-2 text-center text-xl font-semibold light:text-gray-800 sm:text-2xl md:mb-4 md:text-left"
			>
				Friendly whiskers and collaboration
			</h2>

			<p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
				When I'm not wrapped up in cooking up techie stuff, you might catch me just hanging out with
				two things I absolutely love: cats and whiskey. There's just something about chilling with
				cats, their funny antics always put a smile on my face. And as for whiskey, I'm all about
				those fancy flavors and the whole art of making it. Both of these things? They're my way of
				kicking back, recharging, and letting my creative juices flow.
			</p>
			<p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
				But hey, that's not all there is to me! I'm all about going on crazy adventures with my
				tight-knit crew of pals, and my amazing girlfriend who's known me since I was a little tike.
			</p>
			<p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
				I'm always eager to collaborate on exciting projects and explore new opportunities. Whether
				it's discussing data-driven ideas, cloud architecture, or just sharing cute cat pictures,
				I'd love to connect with like-minded individuals. Feel free to reach out to me through the
				provided contact information. Let's work together to create something extraordinary!
			</p>
		</div>

		<div class="relative">
			<div class="absolute inset-0 bg-gradient-to-tr from-blue-500 to-transparent bg-repeat"></div>
			<div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto sticky top-10">
				<img
					src={catWhiskeyImage}
					loading="lazy"
					alt="Poes (my cat) and a bottle of Lagavulin 8 (whiskey) with a noire effect"
					class="h-full w-full object-cover cat-fit"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	.profile-fit {
		object-position: 50% 10%;
	}
	.cat-fit {
		object-position: 50% 50%;
	}
	.bg-repeat {
		background-image: radial-gradient(#4e46e589 1px, transparent 0);
		background-size: 20px 20px;
		background-position: -6px -6px;
		transform: translate(-2.5%, -2.5%);
	}
</style>
