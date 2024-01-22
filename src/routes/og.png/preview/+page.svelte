<script>
	import { OgImage } from '$lib/components/site';
	import meInline from '$lib/assets/og/me-inline.jpg';
	import fs from 'fs';
	import path from 'path';
	const imageData = fs.readFileSync(path.join(process.cwd(), meInline), 'base64');
</script>

<section class="h-[630px] w-[1200px]">
	<OgImage {imageData} />
</section>
