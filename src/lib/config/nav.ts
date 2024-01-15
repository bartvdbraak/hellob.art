import type { NavItem, SidebarNavItem } from '$lib/types/nav';

interface NavConfig {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
}

export const navConfig: NavConfig = {
	mainNav: [
		{
			title: 'Home',
			href: '/'
		},
		{
			title: 'Projects',
			href: '/projects'
		},
		{
			title: 'Tools',
			href: '/tools'
		},
		{
			title: 'Timeline',
			href: '/timeline'
		}
	],
	sidebarNav: []
};
