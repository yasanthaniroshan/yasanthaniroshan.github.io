/**
 * Publications shown on /publications.
 * To add a publication: paste a new object into the array below (newest first).
 * The author name matching AUTHOR_SELF is rendered in bold.
 */

export const AUTHOR_SELF = 'H. K. Y. Niroshana';

export interface Publication {
	title: string;
	authors: string[];
	venue: string;
	year: number;
	doi?: string;
	link?: string;
	bibtex?: string;
}

export const publications: Publication[] = [
	{
		title:
			'Peak detection of PPG signals using fixed-point digital filters implemented in VHDL',
		authors: ['H. K. Y. Niroshana', 'W. M. Wimalasiri', 'C. Hettiarachchi'],
		venue: 'ERU Symposium, University of Moratuwa',
		year: 2025,
		doi: '10.31705/ERU.2025.38',
		link: 'https://dl.lib.uom.lk/items/73c999d1-3082-4812-94ae-30e70bf6d68a',
		bibtex: `@inproceedings{niroshana2025ppg,
  title     = {Peak detection of {PPG} signals using fixed-point digital filters implemented in {VHDL}},
  author    = {Niroshana, H. K. Y. and Wimalasiri, W. M. and Hettiarachchi, C.},
  booktitle = {Proceedings of the Engineering Research Unit (ERU) Conference},
  year      = {2025},
  publisher = {Engineering Research Unit, University of Moratuwa},
  doi       = {10.31705/ERU.2025.38},
  url       = {https://dl.lib.uom.lk/items/73c999d1-3082-4812-94ae-30e70bf6d68a}
}`,
	},
];
