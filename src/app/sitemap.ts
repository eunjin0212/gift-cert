import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://gift-cert-eunjin0212.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'yearly', // 변경 빈도
      priority: 1,
    },
    {
      url: 'https://gift-cert-eunjin0212.vercel.app/exchange',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://gift-cert-eunjin0212.vercel.app/notice',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}