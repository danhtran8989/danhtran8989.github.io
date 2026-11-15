import { parse } from 'yaml';

import siteRaw from '../config/site.yaml?raw';
import projectsRaw from '../config/projects.yaml?raw';
import blogRaw from '../config/blog.yaml?raw';
import certificatesRaw from '../config/certificates.yaml?raw';
import aboutRaw from '../config/about.yaml?raw';
import cvRaw from '../config/cv.yaml?raw';
import resumeRaw from '../config/resume.yaml?raw';
import certificationsRaw from '../config/certifications.yaml?raw';
import homeRaw from '../config/home.yaml?raw';
import notfoundRaw from '../config/notfound.yaml?raw';

export const siteConfig = parse(siteRaw);
export const projectsConfig = parse(projectsRaw);
export const blogConfig = parse(blogRaw);
export const certificatesConfig = parse(certificatesRaw);
export const aboutConfig = parse(aboutRaw);
export const cvConfig = parse(cvRaw);
export const resumeConfig = parse(resumeRaw);
export const certificationsConfig = parse(certificationsRaw);
export const homeConfig = parse(homeRaw);
export const notfoundConfig = parse(notfoundRaw);
