import { actOrbstackLocalCi } from './posts/act-orbstack-local-ci'
import type { BlogPost } from './types'

export const posts: BlogPost[] = [actOrbstackLocalCi].sort((a, b) =>
  b.date.localeCompare(a.date),
)

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

export function formatPostDate(date: string): string {
  const [year, month, day] = date.split('-').map(Number)
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
