export const site = {
  origin: 'https://ajvillalobos.com',
  canonicalUrl: 'https://ajvillalobos.com/',
  title: 'AJ Villalobos, Senior Product Engineer',
  shortTitle: 'AJ Villalobos',
  description:
    'AJ Villalobos is a senior product engineer in Iloilo City, Philippines with twelve years of Ruby on Rails experience building and shipping production software.',
  socialDescription:
    'Senior product engineer with twelve years of Ruby on Rails experience shipping production software for remote product teams.',
  email: 'hello@ajvillalobos.com',
  resumePath: '/aj-villalobos-senior-product-engineer-resume.pdf',
  resumeUrl:
    'https://ajvillalobos.com/aj-villalobos-senior-product-engineer-resume.pdf',
  githubUrl: 'https://github.com/iamajvillalobos',
  linkedinUrl: 'https://www.linkedin.com/in/aj-villalobos/',
  arqenUrl: 'https://arqen.dev',
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${site.canonicalUrl}#website`,
      url: site.canonicalUrl,
      name: site.shortTitle,
      description: site.description,
      publisher: {
        '@id': `${site.canonicalUrl}#person`,
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${site.canonicalUrl}#profile-page`,
      url: site.canonicalUrl,
      name: site.title,
      description: site.description,
      mainEntity: {
        '@id': `${site.canonicalUrl}#person`,
      },
    },
    {
      '@type': 'Person',
      '@id': `${site.canonicalUrl}#person`,
      name: 'AJ Villalobos',
      url: site.canonicalUrl,
      email: `mailto:${site.email}`,
      jobTitle: 'Senior Product Engineer',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Iloilo City',
        addressCountry: 'PH',
      },
      worksFor: {
        '@type': 'Organization',
        name: 'Lavanda',
      },
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Senior Product Engineer',
        occupationalCategory: 'Software Developer',
        skills:
          'Ruby on Rails, product engineering, GraphQL, TypeScript, Preact, Vue, Next.js, Claude Code, agentic development workflows',
      },
      knowsAbout: [
        'Ruby on Rails',
        'product engineering',
        'production Rails applications',
        'AI-assisted software development',
        'Claude Code workflows',
        'GraphQL',
        'fintech software',
        'healthtech software',
        'SaaS products',
        'Philippine small business software',
      ],
      sameAs: [site.githubUrl, site.linkedinUrl, site.arqenUrl],
    },
  ],
}
