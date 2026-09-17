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
        date: 'Sep 2026',
        text: 'I served as reviewer for the GlobalSouthAI workshop at NURIPs.',
    },
    {
        date: 'Sep 2026',
        text: 'Our final year project "Predicting Atrial Fibrillation at Edge" has been selected for the Final Round of the SLAAI Best AI Undergraduate Project Award 2026.',
    },
	    {
		date: 'Aug 2026',
		text: 'Paper "Patient Aware Contrastive Learning for Paroxysmal Atrial Fibrillation Detection Using RR Intervals" nominated for Best Paper at MERCon (IEEE).',
	},
	{
		date: 'Aug 2026',
		text: 'Taking a career break from my role as Lead Software Engineer at RoboticGen to focus on building my research career.',
	},
	{
		date: 'Jul 2026',
		text: 'Started as a Graduate Research Assistant at the University of Moratuwa, working on predictive maintenance.',
	},
	{
		date: 'Jul 2026',
		text: 'Served as a reviewer for the GlobalSouthAI Workshop at IJCAI 2026.',
	},
	{
		date: 'May 2026',
		text: 'New workshop paper, "Patient-Aware Contrastive Learning...", accepted at the ICML GlobalSouthML Workshop.',
	},
	{
		date: 'Apr 2026',
		text: 'Released the Bee Acoustic Dataset with Environmental Parameters on Zenodo.',
	},
];
