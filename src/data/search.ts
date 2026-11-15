import { blogPosts, certificates, projects, site } from './site';

export type SearchGroup = 'Pages' | 'Writing' | 'Projects' | 'Credentials' | 'Elsewhere';

export interface SearchItem {
	title: string;
	href: string;
	group: SearchGroup;
	meta: string;
	description?: string;
	keywords?: string[];
	external?: boolean;
}

export const searchGroups: SearchGroup[] = [
	'Pages',
	'Writing',
	'Projects',
	'Credentials',
	'Elsewhere',
];

const pages: SearchItem[] = [
	{
		title: 'About',
		href: '/',
		group: 'Pages',
		meta: 'Page',
		description: 'A bit about me: the person behind the projects and the writing.',
		keywords: [
			'about',
			'home',
			'dan tran',
			'developer',
			'lifelong learner',
			'hello',
			'currently',
			'build thoughtfully',
			'stay curious',
			'share the process',
			'principles',
		],
	},
	{
		title: 'Blog',
		href: '/blog',
		group: 'Pages',
		meta: 'Page',
		description: 'Notes along the way: ideas, experiments, and lessons worth sharing.',
		keywords: [
			'blog',
			'writing',
			'notes',
			'articles',
			'posts',
			'ideas',
			'lessons',
			'journal',
			'featured',
			'latest notes',
			'sample writing',
		],
	},
	{
		title: 'CV',
		href: '/cv',
		group: 'Pages',
		meta: 'Page',
		description: 'Curriculum vitae: education, experience, and achievements.',
		keywords: [
			'cv',
			'curriculum vitae',
			'resume',
			'education',
			'experience',
			'profile',
			'achievements',
			'languages',
			'english',
			'vietnamese',
			'vietnam',
			'contact',
			'download',
			'print',
		],
	},
	{
		title: 'Resume',
		href: '/resume',
		group: 'Pages',
		meta: 'Page',
		description: 'The short version: experience, skills, and selected work.',
		keywords: [
			'resume',
			'short version',
			'overview',
			'experience',
			'skills',
			'education',
			'selected project',
			'personal portfolio',
			'download',
			'print',
			'tools',
			'technologies',
			'developer',
			'lifelong learner',
			'vietnam',
			'contact',
			'email',
		],
	},
	{
		title: 'Projects',
		href: '/projects',
		group: 'Pages',
		meta: 'Page',
		description: "A few things I'm building, exploring, and improving.",
		keywords: [
			'projects',
			'work',
			'portfolio',
			'personal portfolio',
			'learning journal',
			'everyday taskboard',
			'html',
			'css',
			'javascript',
			'markdown',
			'github pages',
			'local storage',
			'repository',
			'current projects',
		],
	},
	{
		title: 'Certificates',
		href: '/certificates',
		group: 'Pages',
		meta: 'Page',
		description: 'Learning, documented: course completions, programs, and milestones.',
		keywords: [
			'certificates',
			'courses',
			'course certificate',
			'specialization',
			'workshop',
			'program completions',
			'learning milestones',
			'training',
		],
	},
	{
		title: 'Certifications',
		href: '/certifications',
		group: 'Pages',
		meta: 'Page',
		description: 'Knowledge, validated: professional credentials earned through examination.',
		keywords: [
			'certifications',
			'certification',
			'credentials',
			'exam',
			'exam-based',
			'examination',
			'assessment',
			'professional credentials',
			'verify credential',
			'issued',
			'valid until',
			'expiry',
			'more than course completion',
		],
	},
];

const posts: SearchItem[] = blogPosts.map((post) => {
	const body = post.content
		.flatMap((block) => (block.type === 'ul' ? block.items : [block.text]))
		.join(' ');

	return {
		title: post.title,
		href: `/blog/${post.slug}`,
		group: 'Writing',
		meta: post.category,
		description: post.excerpt,
		keywords: [post.category, post.date, post.read, body],
	};
});

const projectItems: SearchItem[] = projects.map((project) => ({
	title: project.title,
	href: '/projects',
	group: 'Projects',
	meta: 'Project',
	description: project.description,
	keywords: [project.eyebrow, project.mark, project.status, project.meta],
}));

const credentialItems: SearchItem[] = certificates.map((certificate) => ({
	title: certificate.title,
	href: '/certificates',
	group: 'Credentials',
	meta: certificate.type,
	description: certificate.description,
	keywords: [certificate.issuer, certificate.type, certificate.description],
}));

const elsewhere: SearchItem[] = site.socials.map((social) => ({
	title: social.text ?? social.label,
	href: social.href,
	group: 'Elsewhere',
	meta: social.label,
	description:
		social.label === 'Email'
			? 'Send me a note.'
			: social.label === 'GitHub'
				? 'Code, experiments, and this site.'
				: 'Professional profile and experience.',
	keywords: [social.label, 'contact', 'social', 'link'],
	external: !social.href.startsWith('mailto:'),
}));

export const searchItems: SearchItem[] = [
	...pages,
	...posts,
	...projectItems,
	...credentialItems,
	...elsewhere,
];
