<script lang="ts">
	import { Projects } from '$lib/components/site/projects';
	import { page } from '$app/stores';
	import { SiteHeader } from '$lib/components/site';

	$: title = $page.data.title;
	$: subTitle = $page.data.subTitle;
</script>

<SiteHeader {title} {subTitle} />

<section class="flex justify-center">
	<Projects />
</section>
