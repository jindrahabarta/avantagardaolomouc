import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://solariumolomouc.cz',
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: 'https://solariumolomouc.cz/galerie',
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: 'https://solariumolomouc.cz/opalovani',
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: 'https://solariumolomouc.cz/kosmetika',
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: 'https://solariumolomouc.cz/permanentky',
            lastModified: new Date(),
            priority: 0.8,
        },
    ]
}
