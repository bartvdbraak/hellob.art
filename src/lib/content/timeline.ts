import {
	Badge,
	Briefcase,
	GraduationCap,
	FolderLock,
	AppWindow,
	FolderGit2,
	HeartHandshake,
	BookOpen,
	type Icon
} from 'lucide-svelte';
import type { ComponentType } from 'svelte';

export type TimelineItem = {
	title: string;
	subTitle: string;
	icon: ComponentType<Icon>;
	startYear: number;
	endYear?: number;
};

const timeline: TimelineItem[] = [
	{
		title: 'Azure Network Engineer Associate (AZ-700)',
		subTitle: 'Microsoft',
		icon: Badge,
		startYear: 2024
	},
	{
		title: 'Azure Administrator Associate (AZ-104)',
		subTitle: 'Microsoft',
		icon: Badge,
		startYear: 2021
	},
	{
		title: 'Certified Kubernetes Administrator (CKA)',
		subTitle: 'The Linux Foundation',
		icon: Badge,
		startYear: 2022
	},
	{
		title: 'Videowall',
		subTitle: 'In-House Project (Triple)',
		icon: FolderLock,
		startYear: 2022,
		endYear: 2022
	},
	{
		title: 'Ticket Dashboard',
		subTitle: 'In-House Project (Triple)',
		icon: FolderLock,
		startYear: 2021
	},
	{
		title: 'Keyweave',
		subTitle: 'Open-Source Project',
		icon: FolderGit2,
		startYear: 2023
	},
	{
		title: 'Omnidash',
		subTitle: 'Open-Source Project',
		icon: FolderGit2,
		startYear: 2023
	},
	{
		title: 'Azure Audit Workbooks',
		subTitle: 'Open-Source Project',
		icon: FolderGit2,
		startYear: 2022,
		endYear: 2023
	},
	{
		title: 'Azure Geocode Mapping',
		subTitle: 'Open-Source Project',
		icon: FolderGit2,
		startYear: 2023,
		endYear: 2023
	},
	{
		title: 'SlayerWeightCalculator',
		subTitle: 'Open-Source Project',
		icon: FolderGit2,
		startYear: 2019,
		endYear: 2019
	},
	{
		title: 'TrackCycle for Shopify',
		subTitle: 'Open-Source Project',
		icon: FolderGit2,
		startYear: 2020,
		endYear: 2020
	},
	{
		title: 'DevOps Engineer',
		subTitle: 'Triple',
		icon: Briefcase,
		startYear: 2021
	},
	{
		title: 'Full Stack Developer',
		subTitle: 'Urban Deal',
		icon: Briefcase,
		startYear: 2019,
		endYear: 2020
	},
	{
		title: 'hellob.art',
		subTitle: 'Personal Portfolio',
		icon: AppWindow,
		startYear: 2020
	},
	{
		title: 'Zaantje',
		subTitle: 'Personal Portfolio',
		icon: AppWindow,
		startYear: 2020,
		endYear: 2020
	},
	{
		title: 'Designing and Implementing Microsoft Azure Networking Solutions (AZ-700)',
		subTitle: 'Global Knowledge Netherlands',
		icon: BookOpen,
		startYear: 2023,
		endYear: 2023
	},
	{
		title: 'Certified Kubernetes Administrator (CKA)',
		subTitle: 'Global Knowledge Netherlands',
		icon: BookOpen,
		startYear: 2022,
		endYear: 2022
	},
	{
		title: 'Master Information Sciences',
		subTitle: 'Vrije Universiteit Amsterdam',
		icon: GraduationCap,
		startYear: 2018,
		endYear: 2021
	},
	{
		title: 'Bachelor Information Sciences',
		subTitle: 'Vrije Universiteit Amsterdam',
		icon: GraduationCap,
		startYear: 2014,
		endYear: 2018
	},
	{
		title: 'Pre-university education (VWO)',
		subTitle: 'Zaanlands Lyceum',
		icon: GraduationCap,
		startYear: 2008,
		endYear: 2013
	},
	{
		title: 'Website Consultant for Nonprofit',
		subTitle: 'Diastase Netwerk',
		icon: HeartHandshake,
		startYear: 2019,
		endYear: 2020
	},
	{
		title: 'Website Consultant for Nonprofit',
		subTitle: 'Kinderboerderij Bijlmerweide',
		icon: HeartHandshake,
		startYear: 2016
	}
];

export default timeline;
