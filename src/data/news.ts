/**
 * Short homepage "News" list, most recent first.
 * To add an item: paste a new object into the array below.
 */

export interface NewsItem {
	date: string;
	text: string;
}

export const news: NewsItem[] = [
	{
		date: '2026',
		text: 'Started as a Research Assistant at the University of Moratuwa, working on predictive maintenance.',
	},
	{
		date: '2026',
		text: 'New workshop paper, "Patient-Aware Contrastive Learning...", accepted at the ICML GlobalSouthML Workshop.',
	},
	{
		date: '2026',
		text: 'Released the Bee Acoustic Dataset with Environmental Parameters on Zenodo.',
	},
];
