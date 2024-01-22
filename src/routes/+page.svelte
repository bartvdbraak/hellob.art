<script lang="ts">
	import { page } from '$app/stores';
	import { Icons, ImageFadeCarousel, SiteHeader } from '$lib/components/site';
	import { buttonVariants } from '$lib/components/ui/button';
	import { siteConfig } from '$lib/config/site';
	import { cn } from '$lib/utils';

	import catImg from '$lib/assets/root-cat.jpg?enhanced';
	import meImg from '$lib/assets/root-me.jpg?enhanced';

	const images = [
		{ src: meImg, alt: 'Portrait of Bart van der Braak', style: 'object-[50%_10%]' },
		{ src: catImg, alt: 'Noire yawning cat and a bottle of whiskey with glass', style: '' }
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
					I'm a DevOps and Platform Engineering enthusiast from Zaandam, The Netherlands. Started my
					journey in Information Sciences at the Vrije Universiteit Amsterdam, quickly learning and
					adopting Python, Javascript and Linux. These days, I'm also working alot with Terraform,
					Bicep, and Kubernetes, creating cloud infra solutions that are sustainable.
				</p>
				<p class="mt-2">
					Over at <a
						target="_blank"
						rel="noreferrer"
						class="font-medium underline underline-offset-4"
						href="https://www.wearetriple.com">Triple</a
					>, my role involves providing services to clients including HEINEKEN, BAM, and citizenM. I
					utilize tools like Akamai, Azure, Azure DevOps and SendGrid to create and maintain robust,
					scalable cloud infrastructures. For operational purposes, I employ technologies like
					SaltStack, PRTG, and LogicMonitor.
				</p>
				<p class="mt-2">
					I love to work on personal projects or playing games with friends. Beyond the screens, you
					can catch me vibing to vinyl, watching movies, hitting concerts and festivals.
				</p>
				<p class="mt-2">
					When the dust settles, my life is all about sharing laughs with my oversized cat and with
					my amazing girlfriend. I also enjoy a good whiskey, and I'm always up for a chat or down
					to help.
				</p>
			</div>

			<div class="flex-1">
				<ImageFadeCarousel {images} />
			</div>
		</div>
	</div>
</section>
