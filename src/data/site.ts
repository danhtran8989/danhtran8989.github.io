import {
	siteConfig,
	projectsConfig,
	blogConfig,
	certificatesConfig,
} from './config';

export const site = siteConfig as {
	name: string;
	domain: string;
	email: string;
	nav: { label: string; href: string }[];
	socials: { label: string; href: string; text?: string }[];
	footer: {
		eyebrow: string;
		note: string;
		linksLabel: string;
		contactLabel: string;
	};
};

export const projectLabels = projectsConfig.labels as {
	scope: string;
	stack: string;
};

export const projects = projectsConfig.projects as {
	eyebrow: string;
	mark: string;
	status: string;
	title: string;
	description: string;
	meta: string;
	href: string;
}[];

export const certificates = certificatesConfig.certificates as {
	index: string;
	type: string;
	title: string;
	issuer: string;
	description: string;
}[];

export const blogPosts = (blogConfig.posts as BlogPost[]).map((post) => ({
	...post,
	content: post.content as PostBlock[],
}));

export type PostBlock =
	| { type: 'p'; text: string }
	| { type: 'h2'; text: string }
	| { type: 'blockquote'; text: string }
	| { type: 'ul'; items: string[] };

export interface BlogPost {
	slug: string;
	category: string;
	title: string;
	read: string;
	date: string;
	excerpt: string;
	content: PostBlock[];
}
