import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://capio.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/artists`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
    },
    {
        url: `${baseUrl}/aftercare`,
        lastModified: new Date(),
    },
    {
        url: `${baseUrl}/terms-and-conditions`,
        lastModified: new Date(),
    }
  ];
} 