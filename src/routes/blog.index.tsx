import { Link, createFileRoute } from '@tanstack/react-router'

import { formatPostDate, posts } from '../blog/posts'
import { site } from '../site'

const blogUrl = `${site.origin}/blog`
const blogTitle = `Blog · ${site.shortTitle}`
const blogDescription =
  'Short notes on Rails, local tooling, AI-assisted workflows, and shipping production software.'

export const Route = createFileRoute('/blog/')({
  head: () => ({
    meta: [
      {
        title: blogTitle,
      },
      {
        name: 'description',
        content: blogDescription,
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: blogTitle,
      },
      {
        property: 'og:description',
        content: blogDescription,
      },
      {
        property: 'og:url',
        content: blogUrl,
      },
      {
        property: 'og:site_name',
        content: site.shortTitle,
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:title',
        content: blogTitle,
      },
      {
        name: 'twitter:description',
        content: blogDescription,
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: blogUrl,
      },
    ],
  }),
  component: BlogIndexPage,
})

function BlogIndexPage() {
  return (
    <div className="page">
      <header className="masthead">
        <p className="page-kicker">
          <Link to="/">{site.shortTitle}</Link>
        </p>
        <h1 className="name">
          Blog<span className="dot">.</span>
        </h1>
        <p className="tagline">Short notes from shipping software</p>
        <nav className="site-nav" aria-label="Site">
          <Link to="/">Home</Link>
          <Link to="/blog" aria-current="page">
            Blog
          </Link>
          <a href={`mailto:${site.email}`}>Email</a>
        </nav>
      </header>

      <section className="sec blog-list" aria-label="Posts">
        <h2>Posts</h2>

        {posts.map((post) => (
          <article key={post.slug} className="blog-list-item">
            <div className="when">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            </div>
            <div className="what">
              <h3>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                >
                  {post.title}
                </Link>
              </h3>
              <p>{post.description}</p>
            </div>
          </article>
        ))}
      </section>

      <footer className="closing">
        <p>
          <Link to="/">{site.shortTitle}</Link>
          <span className="sep">&middot;</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </footer>
    </div>
  )
}
