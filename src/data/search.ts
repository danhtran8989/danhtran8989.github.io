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
		description: 'A doctor turned AI engineer: medicine, machine learning, and Vietnamese data.',
		keywords: [
			'about',
			'home',
			'tran pham cong danh',
			'danh tran',
			'danhtran2mind',
			'ai engineer',
			'medical doctor',
			'md',
			'master of engineering',
			'vietnam',
			'hcmc',
			'healthcare ai',
			'hello',
			'currently',
			'principles',
		],
	},
	{
		title: 'Blog',
		href: '/blog',
		group: 'Pages',
		meta: 'Page',
		description: 'Notes from the build: tutorials on Python, tooling, and machine learning.',
		keywords: [
			'blog',
			'writing',
			'notes',
			'articles',
			'posts',
			'python',
			'tutorial',
			'kaggle',
			'git',
			'streamlit',
			'readme',
			'tooling',
		],
	},
	{
		title: 'CV',
		href: '/cv',
		group: 'Pages',
		meta: 'Page',
		description: 'Curriculum vitae: education, experience, skills, and selected projects.',
		keywords: [
			'cv',
			'curriculum vitae',
			'education',
			'experience',
			'profile',
			'skills',
			'achievements',
			'languages',
			'english',
			'vietnamese',
			'vietnam',
			'contact',
			'download',
			'print',
			'osas',
			'karuna',
			'dental clinic',
			'hcmut',
			'university of health sciences',
		],
	},
	{
		title: 'Resume',
		href: '/resume',
		group: 'Pages',
		meta: 'Page',
		description: 'The short version: current role, education, and core skills.',
		keywords: [
			'resume',
			'short version',
			'overview',
			'experience',
			'skills',
			'education',
			'selected project',
			'ai engineer',
			'download',
			'print',
			'tools',
			'technologies',
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
		description: 'Twenty open-source projects across NLP, vision, audio, and data engineering.',
		keywords: [
			'projects',
			'work',
			'portfolio',
			'github',
			'repository',
			'nlp',
			'computer vision',
			'audio',
			'data engineering',
			'lora',
			'rag',
			'tts',
			'asr',
			'whisper',
			'spark',
			'airflow',
			'diffusion',
		],
	},
	{
		title: 'Certificates',
		href: '/certificates',
		group: 'Pages',
		meta: 'Page',
		description: 'Sixty-one course certificates and skill badges, grouped by provider.',
		keywords: [
			'certificates',
			'courses',
			'course certificate',
			'track',
			'skill badge',
			'datacamp',
			'kaggle',
			'microsoft learn',
			'opencv',
			'cognitive class',
			'netacad',
			'anthropic',
			'aws skill builder',
			'freecodecamp',
			'learning milestones',
		],
	},
	{
		title: 'Certifications',
		href: '/certifications',
		group: 'Pages',
		meta: 'Page',
		description: 'Assessed badges and career tracks, with a link to verify each one.',
		keywords: [
			'certifications',
			'certification',
			'credentials',
			'assessment',
			'assessed',
			'credly',
			'pcp',
			'pcap',
			'associate ai engineer',
			'machine learning engineer',
			'verify credential',
			'issued',
			'no expiry',
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
	meta: project.eyebrow,
	description: project.description,
	keywords: [project.eyebrow, project.mark, project.status, project.meta],
}));

const credentialItems: SearchItem[] = certificates.map((certificate) => ({
	title: certificate.title,
	href: '/certificates',
	group: 'Credentials',
	meta: certificate.provider,
	description: certificate.description,
	keywords: [certificate.provider, certificate.date, certificate.description],
}));

const socialDescriptions: Record<string, string> = {
	Email: 'Send me a note.',
	GitHub: 'Code, experiments, and every project on this site.',
	'Hugging Face': 'Fine-tuned models, datasets, and demos.',
	GitLab: 'Mirrors and other repositories.',
	LinkedIn: 'Professional profile and experience.',
	X: 'Short notes and things I find interesting.',
	Facebook: 'The personal side.',
};

const elsewhere: SearchItem[] = site.socials.map((social) => ({
	title: social.text ?? social.label,
	href: social.href,
	group: 'Elsewhere',
	meta: social.label,
	description: socialDescriptions[social.label] ?? 'Find me elsewhere on the web.',
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
