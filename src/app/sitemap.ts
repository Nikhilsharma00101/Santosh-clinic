import { MetadataRoute } from 'next'
import { SERVICE_DETAILS } from '@/lib/service-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://santoshclinic.com'

    // Static pages
    const staticPages = [
        '',
        '/about',
        '/doctors',
        '/services',
        '/book',
        '/contact',
        '/education',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic pages (Services)
    const servicePages = Object.keys(SERVICE_DETAILS).map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    return [...staticPages, ...servicePages]
}
