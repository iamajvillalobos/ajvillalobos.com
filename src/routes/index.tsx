import { createFileRoute } from '@tanstack/react-router'

import { site, structuredData } from '../site'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: site.title,
      },
      {
        name: 'description',
        content: site.description,
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        property: 'og:type',
        content: 'profile',
      },
      {
        property: 'og:title',
        content: site.title,
      },
      {
        property: 'og:description',
        content: site.socialDescription,
      },
      {
        property: 'og:url',
        content: site.canonicalUrl,
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
        content: site.title,
      },
      {
        name: 'twitter:description',
        content: site.socialDescription,
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: site.canonicalUrl,
      },
      {
        rel: 'alternate',
        type: 'application/pdf',
        title: 'AJ Villalobos resume PDF',
        href: site.resumeUrl,
      },
      {
        rel: 'me',
        href: site.githubUrl,
      },
      {
        rel: 'me',
        href: site.linkedinUrl,
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  component: ResumePage,
})

function ResumePage() {
  return (
    <div className="page">
      <header className="masthead">
        <h1 className="name">
          AJ Villalobos<span className="dot">.</span>
        </h1>
        <p className="tagline">Senior Ruby on Rails Engineer</p>
        <nav className="site-nav" aria-label="Site">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href={`mailto:${site.email}`}>Email</a>
          <a className="resume-link" href={site.resumePath} download>
            Resume (PDF)
          </a>
        </nav>
      </header>

      <p className="intro">
        I have spent <em>twelve years</em> building production Rails
        applications for fintech, healthtech, and SaaS teams in the US, UK, and
        Australia. These days I pair that experience with AI-assisted
        development, using Claude Code, agentic loops, and parallel agents
        without lowering the bar for what reaches production.
      </p>

      <section id="work" className="sec">
        <h2>Work</h2>

        <div className="when">2025&ndash;now</div>
        <div className="what">
          <h3>Lavanda</h3>
          <p className="role">Senior Ruby on Rails Developer &middot; UK, remote</p>
          <p>
            I build features for a property management and bookings platform
            used by build-to-rent and co-living operators (Rails, GraphQL,
            Next.js). Recent work includes the DocuSign lease-signing
            integration and booking-import tooling for onboarding new clients.
            Day to day I lean on Claude Code: custom skills, self-verifying
            agent loops, and parallel agents in git worktrees.
          </p>
        </div>

        <div className="when">2024&ndash;25</div>
        <div className="what">
          <h3>ShiftCare</h3>
          <p className="role">
            Ruby on Rails Engineer &middot; Sydney, Australia
          </p>
          <p>
            Shipped customer-facing and internal features for an aged-care
            platform, Rails APIs with a Vue frontend, balancing usability with
            maintainable backend architecture.
          </p>
        </div>

        <div className="when">2023&ndash;24</div>
        <div className="what">
          <h3>Radiopaedia</h3>
          <p className="role">Ruby on Rails Developer &middot; Australia</p>
          <p>
            Improved mobile UX and key page layouts for one of the largest
            radiology references on the web, TypeScript and Preact components
            inside a Rails app.
          </p>
        </div>

        <div className="when">2019&ndash;23</div>
        <div className="what">
          <h3>Kangarootime</h3>
          <p className="role">Ruby on Rails Developer &middot; United States</p>
          <p>
            Maintained and extended a legacy childcare-center platform used
            across the US. Refactored its core status-tracking model and built
            COVID screening and onboarding features during a high-change period.
          </p>
        </div>

        <div className="when">2017&ndash;20</div>
        <div className="what">
          <h3>BloomSolutions</h3>
          <p className="role">Software Engineer &middot; Makati, Philippines</p>
          <p>
            Built features for BloomRemit, a cryptocurrency-enabled remittance
            platform that facilitated over $120M in customer transactions, with
            an emphasis on tested, maintainable service patterns.
          </p>
        </div>

        <div className="when">2014&ndash;18</div>
        <div className="what">
          <h3>Earlier</h3>
          <p>
            POS integrations and a Messenger bot at Tanda, booking platforms and
            private gems at Aelogica, Rails and Ember work at Proudcloud, and
            Rails features at YouSource. Full history in the{' '}
            <a href={site.resumePath} download>
              PDF resume
            </a>
            .
          </p>
        </div>
      </section>

      <section id="projects" className="sec">
        <h2>Projects</h2>

        <div className="when">Brand</div>
        <div className="what">
          <h3>
            <a href="https://arqen.dev">Arqen.dev</a>
          </h3>
          <p>
            The home of my self-funded products: software that actually works
            for Philippine businesses, built with firsthand knowledge of local
            compliance rather than theoretical knowledge. The three products
            below ship under it.
          </p>
        </div>

        <div className="when">Inventory</div>
        <div className="what">
          <h3>
            <a href="https://keeptrack.ph">KeepTrack.ph</a>
          </h3>
          <p>
            Inventory management for Philippine small businesses: real-time
            stock tracking, expiry alerts, purchase orders and supplier
            management, and recipe costing for restaurants, pharmacies, and
            retail. Tagline: stop guessing what&rsquo;s in stock.
          </p>
        </div>

        <div className="when">Payroll</div>
        <div className="what">
          <h3>
            <a href="https://timekeep.ph">Timekeep.ph</a>
          </h3>
          <p>
            Payroll, attendance, and scheduling for Philippine SMEs. One-click
            payroll with SSS, PhilHealth, Pag-IBIG, and withholding tax computed
            automatically, plus a facial-verification attendance kiosk and an
            employee self-service portal.
          </p>
        </div>

        <div className="when">Healthtech</div>
        <div className="what">
          <h3>
            <a href="https://sigrx.app">SigRx.app</a>
          </h3>
          <p>
            A digital prescription pad for Philippine doctors. Prescriptions
            formatted for standard pad sizes, patient records, a pre-loaded
            medicine library, and medical certificates on matching letterhead.
            Currently in private beta.
          </p>
        </div>

        <div className="when">Acquired</div>
        <div className="what">
          <h3>Privacy-first link shortener</h3>
          <p>
            A simple Bitly alternative built for GDPR compliance. Launched as a
            paid product and later acquired by one of its early users.
          </p>
        </div>

        <div className="when">Open source</div>
        <div className="what">
          <h3>Clover Ruby gem</h3>
          <p>
            A Ruby wrapper for the Clover POS REST API. Archived, then forked
            and used in other teams&rsquo; production integrations.
          </p>
        </div>
      </section>

      <section id="resume" className="sec">
        <h2>Resume</h2>

        <div className="when">PDF</div>
        <div className="what">
          <p>
            Hiring or screening? The resume has the full work history,
            education, and contact details in a printable page.
          </p>
          <p>
            <a className="cta" href={site.resumePath} download>
              Download the resume (PDF) &darr;
            </a>
          </p>
        </div>
      </section>

      <footer className="closing">
        <p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span className="sep">&middot;</span>
          <a href={site.githubUrl} rel="me">
            GitHub
          </a>
          <span className="sep">&middot;</span>
          <a href={site.linkedinUrl} rel="me">
            LinkedIn
          </a>
          <span className="sep">&middot;</span>
          <span>Iloilo City, Philippines</span>
        </p>
      </footer>
    </div>
  )
}
