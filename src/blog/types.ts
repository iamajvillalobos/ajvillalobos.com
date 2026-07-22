import type { ReactNode } from 'react'

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  content: () => ReactNode
}
