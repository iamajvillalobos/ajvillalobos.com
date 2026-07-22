import { formatPostDate, getPost, posts } from '../blog/posts'
import { site } from '../site'

export const OG_WIDTH = 1200
export const OG_HEIGHT = 630

export type OgPayload = {
  /** Relative path under /og without extension, e.g. `home`, `blog`, `blog/my-slug` */
  id: string
  title: string
  description?: string
  meta?: string
}

export function resolveOgPayload(pathname: string): OgPayload | null {
  const path = pathname.replace(/^\/+|\/+$/g, '')

  if (!path || path === 'home') {
    return {
      id: 'home',
      title: site.shortTitle,
      description: site.socialDescription,
      meta: 'Senior Ruby on Rails Engineer',
    }
  }

  if (path === 'blog') {
    return {
      id: 'blog',
      title: 'Notes from shipping software',
      description:
        'Short posts on Rails, local tooling, AI-assisted workflows, and production software.',
    }
  }

  if (path.startsWith('blog/')) {
    const slug = path.slice('blog/'.length)
    const post = getPost(slug)
    if (!post) return null

    return {
      id: `blog/${post.slug}`,
      title: post.title,
      description: post.description,
      meta: formatPostDate(post.date),
    }
  }

  return null
}

export function allOgPayloads(): OgPayload[] {
  const payloads: OgPayload[] = [
    resolveOgPayload('home')!,
    resolveOgPayload('blog')!,
  ]

  for (const post of posts) {
    const payload = resolveOgPayload(`blog/${post.slug}`)
    if (payload) payloads.push(payload)
  }

  return payloads
}

export function ogImagePath(pathname: string) {
  const clean = pathname.replace(/^\/+|\/+$/g, '') || 'home'
  return `/og/${clean}.png`
}

export function absoluteOgImageUrl(pathname: string) {
  return `${site.origin}${ogImagePath(pathname)}`
}
