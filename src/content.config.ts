import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Each project is one markdown file in src/content/projects/.
 * The filename (without .md) becomes the URL: /projects/<filename>.
 * Frontmatter is validated against this schema; the markdown body
 * is the project's detail page content.
 */
const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		tech: z.array(z.string()),
		github: z.string().url(),
		category: z.enum(['Research & Embedded', 'Systems & Software']),
		order: z.number().default(99),
		highlight: z.string().optional(),
		video: z.string().url().optional(),
		demo: z.string().url().optional(),
		article: z.string().url().optional(),
	}),
});

export const collections = { projects };
