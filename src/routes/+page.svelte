<script lang="ts">
	import { page } from '$app/stores';
	import { Icons, ImageFadeCarousel, SiteHeader } from '$lib/components/site';
	import { buttonVariants } from '$lib/components/ui/button';
	import { siteConfig } from '$lib/config/site';
	import { cn } from '$lib/utils';

	import catImg from '$lib/assets/root-cat.jpg';
	import meImg from '$lib/assets/root-me.jpg';
	import { Cat, PersonStanding } from 'lucide-svelte';

	const images = [
		{
			src: meImg,
			alt: 'Portrait of Bart van der Braak',
			style: 'object-[50%_10%]',
			icon: PersonStanding
		},
		{
			src: catImg,
			alt: 'Noire yawning cat and a bottle of whiskey with glass',
			style: '',
			icon: Cat
		}
	];

	$: title = $page.data.title;
	$: subTitle = $page.data.subTitle;
</script>

<SiteHeader {title} {subTitle}>
	<p class="text-center text-sm text-green-700 dark:text-green-400">
		Inspired by others, I share my open-source derived work with the community.
	</p>
	<div class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
		<a href="/projects" class={cn(buttonVariants())}> My Projects </a>
		<a
			target="_blank"
			rel="noreferrer"
			href={siteConfig.links.gitHubProfile}
			class={cn(buttonVariants({ variant: 'outline' }))}
		>
			<Icons.gitHub class="mr-2 h-4 w-4" />
			GitHub
		</a>
	</div>
</SiteHeader>
<section class="flex">
	<div class="border-grey/15 relative border-t pb-16 pt-10 dark:border-white/20">
		<div
			class="pointer-events-none absolute left-[00%] top-0 h-40 w-[100%] select-none overflow-hidden"
		>
			<div
				class="absolute left-0 top-40 h-96 w-full -translate-y-full [background-image:radial-gradient(closest-side,rgba(123,175,224,0.12)_0%,transparent_100%)]"
			></div>
		</div>
		<sup class="mb-1 text-base text-blue-400 empty:hidden">Introduction</sup>
		<h2 class="text-5xl font-bold">
			Building confidence and containers<span class="text-blue-400">.</span>
		</h2>
		<div class="text-md mt-12 flex flex-col gap-8 md:flex-row">
			<div class="flex-1 empty:hidden">
				<p>
					I'm a DevOps and Platform Engineering enthusiast from Zaandam, The Netherlands. I studied
					data science and machine learning at the Vrije Universiteit, where I adopted skills in
					Python, JavaScript, and Linux.
				</p>
				<p class="mt-2">
					In my free time, I enjoy working on personal projects or playing games with friends.
					Beyond the screens, you can find me vibing to vinyl, watching movies, attending concerts
					and festivals, and sharing laughs with my oversized cat and amazing girlfriend. I also
					enjoy a good whiskey and am always up for a chat or ready to help.
				</p>
				<p class="mt-2">
					At <a
						target="_blank"
						rel="noreferrer"
						class="font-medium underline underline-offset-4"
						href="https://www.wearetriple.com">Triple</a
					>, I provided cloud services for clients like HEINEKEN, BAM, and citizenM, using Akamai,
					Azure, and Azure DevOps to create and maintain robust, scalable cloud infrastructures.
				</p>
				<p class="mt-2">
					Currently, I work at <a
						target="_blank"
						rel="noreferrer"
						class="font-medium underline underline-offset-4"
						href="https://www.blender.org">Blender</a
					>, creating free and open-source 3D software. I streamline the build, test, and release
					processes for Blender and related services, aiming to improve both the user and developer
					experience.
				</p>
			</div>

			<div class="flex-1">
				<ImageFadeCarousel {images} />
			</div>
		</div>
	</div>
</section>
