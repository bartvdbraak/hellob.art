<script lang="ts">
	import { Timeline } from '$lib/components/site/timeline';
	import { page } from '$app/stores';
	import { SiteHeader } from '$lib/components/site';

	$: title = $page.data.title;
	$: subTitle = $page.data.subTitle;
</script>

<SiteHeader {title} {subTitle} />

<section>
	<Timeline />
</section>
