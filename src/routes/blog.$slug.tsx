import { Link, createFileRoute, notFound } from '@tanstack/react-router'

import { formatPostDate, getPost, posts } from '../blog/posts'
import { socialMeta } from '../lib/social-meta'
import { site } from '../site'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = getPost(params.slug)
    if (!post) {
      throw notFound()
    }
    return { slug: post.slug }
  },
  head: ({ params }) => {
    const post = getPost(params.slug)
    if (!post) {
      return {
        meta: [{ title: `Not found · ${site.shortTitle}` }],
      }
    }

    const url = `${site.origin}/blog/${post.slug}`
    const title = `${post.title} · ${site.shortTitle}`

    return {
      meta: socialMeta({
        title,
        socialTitle: post.title,
        description: post.description,
        url,
        type: 'article',
        ogPath: `blog/${post.slug}`,
        imageAlt: post.title,
        publishedTime: post.date,
        author: site.shortTitle,
      }),
      links: [
        {
          rel: 'canonical',
          href: url,
        },
      ],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            url,
            image: `${site.origin}/og/blog/${post.slug}.png`,
            author: {
              '@type': 'Person',
              name: site.shortTitle,
              url: site.canonicalUrl,
            },
            publisher: {
              '@type': 'Person',
              name: site.shortTitle,
              url: site.canonicalUrl,
            },
            mainEntityOfPage: url,
          }),
        },
      ],
    }
  },
  component: BlogPostPage,
})

function BlogPostPage() {
  const { slug } = Route.useLoaderData()
  const post = getPost(slug)

  if (!post) {
    throw notFound()
  }

  const Content = post.content
  const index = posts.findIndex((item) => item.slug === post.slug)
  const newer = index > 0 ? posts[index - 1] : undefined
  const older = index >= 0 && index < posts.length - 1 ? posts[index + 1] : undefined

  return (
    <div className="page">
      <header className="masthead">
        <p className="page-kicker">
          <Link to="/blog">Blog</Link>
        </p>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-meta">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span className="sep">&middot;</span>
          <span>{site.shortTitle}</span>
        </p>
        <nav className="site-nav" aria-label="Site">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <a href={`mailto:${site.email}`}>Email</a>
        </nav>
      </header>

      <article className="post-body">
        <Content />
      </article>

      <nav className="post-nav" aria-label="Post navigation">
        {older ? (
          <Link
            className="post-nav-link"
            to="/blog/$slug"
            params={{ slug: older.slug }}
          >
            <span className="post-nav-label">Older</span>
            <span className="post-nav-title">{older.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {newer ? (
          <Link
            className="post-nav-link post-nav-link-next"
            to="/blog/$slug"
            params={{ slug: newer.slug }}
          >
            <span className="post-nav-label">Newer</span>
            <span className="post-nav-title">{newer.title}</span>
          </Link>
        ) : null}
      </nav>

      <footer className="closing">
        <p>
          <Link to="/blog">All posts</Link>
          <span className="sep">&middot;</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </footer>
    </div>
  )
}
