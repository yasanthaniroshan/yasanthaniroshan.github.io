/**
 * Publications shown on /publications.
 * To add a publication: paste a new object into the array below (newest first).
 * Any author whose name contains AUTHOR_MATCH is rendered in bold.
 */

export const AUTHOR_MATCH = 'Niroshan';

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
			'Patient-Aware Contrastive Learning Preserves Per-Patient Structure in RR-Interval Representations',
		authors: ['Yasantha Niroshana', 'Weijith Wimalasiri', 'Chathuranga Hettiarachchi'],
		venue: 'GlobalSouthML Workshop, International Conference on Machine Learning (ICML)',
		year: 2026,
		link: 'https://arxiv.org/abs/2606.23570',
		bibtex: `@inproceedings{niroshana2026patientaware,
  title     = {Patient-Aware Contrastive Learning Preserves Per-Patient Structure in RR-Interval Representations},
  author    = {Niroshana, Yasantha and Wimalasiri, Weijith and Hettiarachchi, Chathuranga},
  booktitle = {GlobalSouthML Workshop, International Conference on Machine Learning (ICML)},
  year      = {2026},
  note      = {arXiv:2606.23570}
}`,
	},
	{
		title: 'Bee Acoustic Dataset with Environmental Parameters',
		authors: ['Y. Niroshana', 'S. Sooriyaarachchi', 'I. Gunarathne'],
		venue: 'Zenodo (dataset)',
		year: 2026,
		doi: '10.5281/zenodo.19739013',
		link: 'https://doi.org/10.5281/zenodo.19739013',
		bibtex: `@misc{niroshana2026_bee_dataset,
  author    = {Y. Niroshana and S. Sooriyaarachchi and I. Gunarathne},
  title     = {Bee Acoustic Dataset with Environmental Parameters},
  year      = {2026},
  publisher = {Zenodo},
  doi       = {10.5281/zenodo.19739013},
  url       = {https://doi.org/10.5281/zenodo.19739013}
}`,
	},
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
	{
		title: 'A smart mask for wireless, real-time monitoring of CO₂ and humidity',
		authors: ['R. R. Kodisinghe', 'H. K. Y. Niroshan', 'W. M. Wimalasiri'],
		venue: 'ERU Symposium, University of Moratuwa',
		year: 2025,
		doi: '10.31705/ERU.2025.6',
		link: 'https://dl.lib.uom.lk/items/6d7048aa-743f-470d-b7a8-65941aa91edb',
		bibtex: `@inproceedings{kodisinghe2025smartmask,
  title     = {A smart mask for wireless, real-time monitoring of {CO2} and humidity},
  author    = {Kodisinghe, R. R. and Niroshan, H. K. Y. and Wimalasiri, W. M.},
  booktitle = {Proceedings of the Engineering Research Unit (ERU) Conference},
  year      = {2025},
  publisher = {Engineering Research Unit, University of Moratuwa},
  doi       = {10.31705/ERU.2025.6},
  url       = {https://dl.lib.uom.lk/items/6d7048aa-743f-470d-b7a8-65941aa91edb}
}`,
	},
];
