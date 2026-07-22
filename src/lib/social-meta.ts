import { site } from '../site'
import { absoluteOgImageUrl, OG_HEIGHT, OG_WIDTH } from './og'

type SocialMetaInput = {
  /** Document <title> */
  title: string
  description: string
  url: string
  type: 'website' | 'article' | 'profile'
  /** Path used to resolve the dynamic OG image, e.g. `home`, `blog`, `blog/my-slug` */
  ogPath: string
  /** Open Graph / Twitter title (defaults to `title`) */
  socialTitle?: string
  imageAlt?: string
  publishedTime?: string
  author?: string
}

export function socialMeta({
  title,
  description,
  url,
  type,
  ogPath,
  socialTitle,
  imageAlt,
  publishedTime,
  author,
}: SocialMetaInput) {
  const image = absoluteOgImageUrl(ogPath)
  const cardTitle = socialTitle ?? title
  const alt = imageAlt ?? cardTitle

  const meta: Array<Record<string, string>> = [
    {
      title,
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:type',
      content: type,
    },
    {
      property: 'og:title',
      content: cardTitle,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:url',
      content: url,
    },
    {
      property: 'og:site_name',
      content: site.shortTitle,
    },
    {
      property: 'og:image',
      content: image,
    },
    {
      property: 'og:image:secure_url',
      content: image,
    },
    {
      property: 'og:image:type',
      content: 'image/png',
    },
    {
      property: 'og:image:width',
      content: String(OG_WIDTH),
    },
    {
      property: 'og:image:height',
      content: String(OG_HEIGHT),
    },
    {
      property: 'og:image:alt',
      content: alt,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: cardTitle,
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: image,
    },
    {
      name: 'twitter:image:alt',
      content: alt,
    },
  ]

  if (author) {
    meta.push({
      name: 'author',
      content: author,
    })
  }

  if (publishedTime) {
    meta.push({
      property: 'article:published_time',
      content: publishedTime,
    })
  }

  return meta
}
