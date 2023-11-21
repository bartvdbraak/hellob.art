import linuxFoundationLogo from '$lib/assets/timeline/linuxfoundation.svg';
import microsoftLogo from '$lib/assets/timeline/microsoft.svg';
import tripleLogo from '$lib/assets/timeline/triple.svg';
import urbanDealLogo from '$lib/assets/timeline/urbandeal.svg';
import diastaseLogo from '$lib/assets/timeline/diastase.svg';
import vuLogo from '$lib/assets/timeline/vu.svg';
import bijlmerweideLogo from '$lib/assets/timeline/bijlmerweide.svg';

export interface TimelineItem {
	title: string;
	logo?: string;
	link?: string;
	image?: string;
	description: string;
	date: string;
}

const timelineItems: TimelineItem[] = [
	{
		title: 'The Linux Foundation',
		logo: linuxFoundationLogo,
		description: 'Certified Kubernetes Administrator',
		date: '2022'
	},
	{
		title: 'Microsoft Certified',
		logo: microsoftLogo,
		description: 'Administrator Associate (AZ-104)',
		date: '2021'
	},
	{
		title: 'Triple',
		logo: tripleLogo,
		description: 'DevOps Engineer',
		date: '2021'
	},
	{
		title: 'Urban Deal',
		logo: urbanDealLogo,
		description: 'Full Stack Developer',
		date: '2019'
	},
	{
		title: 'Diastase Netwerk',
		logo: diastaseLogo,
		description: 'Volunteer Web Administrator',
		date: '2019'
	},
	{
		title: 'Vrije Universiteit Amsterdam',
		logo: vuLogo,
		description: 'Master Information Sciences',
		date: '2018'
	},
	{
		title: 'Kinderboerderij Bijlmerweide',
		logo: bijlmerweideLogo,
		description: 'Volunteer Web Administrator',
		date: '2016'
	},
	{
		title: 'Vrije Universiteit Amsterdam',
		logo: vuLogo,
		description: 'Bachelor Information Sciences',
		date: '2014'
	}
];

export default timelineItems;
