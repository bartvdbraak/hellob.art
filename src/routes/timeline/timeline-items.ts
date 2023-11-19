export interface TimelineItem {
	title: string;
	link?: string;
	image?: string;
	description: string;
	date: string;
}

const timelineItems: TimelineItem[] = [
	{
		title: 'The Linux Foundation',
		description: 'Certified Kubernetes Administrator',
		date: '2022'
	},
	{
		title: 'Microsoft Certified',
		description: 'Administrator Associate (AZ-104)',
		date: '2021'
	},
	{
		title: 'Triple',
		description: 'DevOps Engineer',
		date: '2021'
	},
	{
		title: 'Urban Deal',
		description: 'Full Stack Developer',
		date: '2019'
	},
	{
		title: 'Diastase Netwerk',
		description: 'Volunteer Web Administrator',
		date: '2019'
	},
	{
		title: 'Vrije Universiteit Amsterdam',
		description: 'Master Information Sciences',
		date: '2018'
	},
	{
		title: 'Vrije Universiteit Amsterdam',
		description: 'Bachelor Information Sciences',
		date: '2014'
	},
	{
		title: 'Kinderboerderij Bijlmerweide',
		description: 'Volunteer Web Administrator',
		date: '2016'
	},
	{
		title: 'Zaanlands Lyceum',
		description: 'Pre-university education (VWO)',
		date: '2008'
	}
];

export default timelineItems;
