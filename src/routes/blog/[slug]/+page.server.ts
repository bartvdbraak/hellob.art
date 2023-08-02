import type { ServerLoadEvent } from '@sveltejs/kit';
import { getBlogPageBySlug } from 'sveltekit-notion-blog';

export const load = (event: ServerLoadEvent) => getBlogPageBySlug(event);