<script lang="ts">
	import { Tools } from '$lib/components/site/tools';
	import { page } from '$app/stores';
	import { SiteHeader } from '$lib/components/site';

	$: title = $page.data.title;
	$: subTitle = $page.data.subTitle;
</script>

<SiteHeader {title} {subTitle} />

<section class="flex justify-center">
	<Tools />
</section>
