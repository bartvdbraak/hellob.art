<script lang="ts">
	import { BlogPost } from 'sveltekit-notion-blog';
	import type { PageData } from './$types';
	
	export let data: PageData;
</script>

<BlogPost {data} />