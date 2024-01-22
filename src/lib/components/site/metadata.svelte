<script lang="ts">
	import { page } from '$app/stores';
	import { siteConfig } from '$lib/config/site';

	export let title: string = siteConfig.name;

	$: title = $page.data?.name ? `${$page.data.name} — ${siteConfig.name}` : siteConfig.name;
	$: description = $page.data?.subTitle ?? siteConfig.description;
	$: ogImage = encodeURI(
		`${siteConfig.ogImage}?title=${$page.data.title}&subTitle=${$page.data.subTitle}`
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={siteConfig.keywords} />
	<meta name="author" content="Bart van der Braak" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={siteConfig.url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content={siteConfig.name} />
	<meta name="twitter:creator" content="Bart van der Braak" />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={siteConfig.url + $page.url.pathname} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content={siteConfig.name} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={siteConfig.name} />
	<meta property="og:locale" content="EN_US" />
</svelte:head>
