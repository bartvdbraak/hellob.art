import type { PageServerLoad } from './$types';
import { getAllPosts } from "sveltekit-notion-blog";
export const load: PageServerLoad = () => getAllPosts();