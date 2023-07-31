<script lang="ts">
	import { calculateAge } from '$lib/calculate-age';
	import picture from '$lib/assets/bartvdbraak_profile_noire.jpg';
</script>

<svelte:head>
	<title>hellob.art &mdash; home</title>
	<meta name="description" content="Meet Bart, a passionate DevOps engineer from Zaandam, Netherlands. With expertise in Azure, Kubernetes, and automation, he loves solving challenges through code. Discover his journey, interests in cats and whiskey, and how to connect with him for exciting collaborations.">
</svelte:head>

<main class="container mx-auto px-4 py-8 text-left">
	<h2 class="text-3xl font-bold mb-4">About Me</h2>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
		<div class="md:col-span-2">
			<p class="text-lg leading-relaxed mb-8">
				Welcome to my homepage! I'm a passionate DevOps engineer based in Zaandam, Netherlands. At {calculateAge(
					'1994-10-18'
				)}
				years old, I've already gathered a wealth of experience and expertise in the world of technology.
				From programming in Python, Javascript, and Bash to utilizing cutting-edge technologies like
				Terraform, Bicep, and Kubernetes, I've honed my skills to drive efficient and innovative solutions.
				My journey in the tech industry began during my Information Sciences studies, where I fell in
				love with data-driven projects and statistical learning. This passion led me to explore languages
				like Python and LaTeX, enabling me to bring ideas to life through powerful data management and
				visualization.
			</p>

			<h2 class="text-3xl font-bold mb-4">Empowering the Cloud with Azure</h2>

			<p class="text-lg leading-relaxed mb-8">
				My career took off when I joined Triple as a DevOps Engineer. At Triple, I've embraced the
				world of Azure and Azure DevOps, mastering the intricacies of cloud architecture and
				deployment. Holding certifications like AZ-104 and CKA has further solidified my expertise,
				empowering me to build and manage robust, scalable, and secure cloud environments. My
				proficiency in containerization and Kubernetes has allowed me to take application
				development to new heights, ensuring seamless and efficient deployment at scale.
			</p>
		</div>
		<div class="md:col-span-1 flex justify-end">
			<img src={picture} alt="Bart van der Braak with a noire effect" class="max-w-1/3 mb-4 object-cover" />
		</div>
	</div>
	
	<h2 class="text-3xl font-bold mb-4">Solving Problems with Code and Automation</h2>

	<p class="text-lg leading-relaxed mb-8">
		As a DevOps engineer, I thrive on solving complex challenges with the power of code and
		automation. My passion for streamlining workflows led me to create internal tooling using
		APIs, boosting productivity for myself and my colleagues. Outside of work, I enjoy taking on
		side projects that push my boundaries, expanding my skill set, and exploring new
		technologies. I strongly believe that innovation and continuous learning are key drivers of
		success in the ever-evolving tech landscape.
	</p>
	
	<h2 class="text-3xl font-bold mb-4">Cat Lover and Whiskey Enthusiast</h2>

	<p class="text-lg leading-relaxed mb-8">
		When I'm not busy crafting technological solutions, you'll often find me indulging in two of my
		favorite passions: cats and whiskey. There's something special about the companionship of cats,
		and their playful antics never fail to bring joy to my day. As for whiskey, I appreciate the
		intricate flavors and the artistry behind its production. I find both interests to be a
		delightful way to unwind and recharge my creative energies.
	</p>

	<h2 class="text-3xl font-bold mb-4">Let's Connect</h2>

	<p class="text-lg leading-relaxed">
		I'm always eager to collaborate on exciting projects and explore new opportunities. Whether it's
		discussing data-driven ideas, cloud architecture, or just sharing cute cat pictures, I'd love to
		connect with like-minded individuals. Feel free to reach out to me through the provided contact
		information. Let's work together to create something extraordinary!
	</p>
</main>
