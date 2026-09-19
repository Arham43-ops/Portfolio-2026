import type { MetadataRoute } from 'next';
import { portfolioData } from '@/data/portfolio';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-07.antideploy.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        '/',
        '/projects',
        '/skills',
        '/experience',
        '/achievements',
        '/contact',
        '/blog',
        '/gallery',
        '/resume',
    ];

    const projectRoutes = portfolioData.projects.map((project) => `/projects/${project.slug}`);
    const blogRoutes = portfolioData.blogs.map((post) => `/blog/${post.slug}`);

    return [...staticRoutes, ...projectRoutes, ...blogRoutes].map((path) => ({
        url: `${siteUrl}${path}`,
    }));
}
