import { Link, createFileRoute } from '@tanstack/react-router'

import { socialMeta } from '../lib/social-meta'
import { site, structuredData } from '../site'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: socialMeta({
      title: site.title,
      description: site.description,
      url: site.canonicalUrl,
      type: 'profile',
      ogPath: 'home',
      imageAlt: `${site.shortTitle} — Senior Product Engineer`,
    }),
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
        <p className="tagline">Senior Product Engineer</p>
        <nav className="site-nav" aria-label="Site">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <Link to="/blog">Blog</Link>
          <a href={`mailto:${site.email}`}>Email</a>
          <a className="resume-link" href={site.resumePath} download>
            Resume (PDF)
          </a>
        </nav>
      </header>

      <p className="intro">
        I&rsquo;m a senior product engineer with <em>twelve years</em> of Ruby
        on Rails experience building production software for fintech,
        healthtech, and SaaS teams across the US, UK, and Australia. I work
        closely with engineering and product teams to turn operational needs
        into reliable software. Rails is my primary stack, and I use AI coding
        tools as a practical part of development. I&rsquo;m open to full-time
        senior product engineering opportunities, especially Rails and backend
        product work.
      </p>

      <section id="work" className="sec">
        <h2>Work</h2>

        <div className="when">2025&ndash;now</div>
        <div className="what">
          <h3>Lavanda</h3>
          <p className="role">Senior Ruby on Rails Developer &middot; UK, remote</p>
          <p>
            I work on booking and leasing features for a property management
            platform used by build-to-rent and co-living operators.
          </p>
          <ul className="highlights">
            <li>
              Made its DocuSign integration more flexible by replacing
              application-defined prefilled fields with client-configured Sender
              Fields.
            </li>
            <li>Built booking-import tooling for onboarding new clients.</li>
            <li>
              Work directly with product and implementation managers to
              investigate questions, clarify technical constraints, and resolve
              client concerns.
            </li>
          </ul>
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
            My self-funded software studio for Philippine businesses. I design,
            build, operate, and support its products end to end, covering
            product decisions, engineering, infrastructure, and customer
            support.
          </p>
        </div>

        <div className="when">Inventory</div>
        <div className="what">
          <h3>
            <a href="https://keeptrack.ph">KeepTrack.ph</a>
          </h3>
          <p>
            Inventory management software used by four Philippine businesses,
            with stock tracking, expiry alerts, purchase orders, supplier
            management, and recipe costing. The product is maintained and
            supported for its existing customers.
          </p>
        </div>

        <div className="when">Payroll</div>
        <div className="what">
          <h3>
            <a href="https://timekeep.ph">Timekeep.ph</a>
          </h3>
          <p>
            My primary self-funded product: payroll, attendance, and scheduling
            software for Philippine businesses.
          </p>
          <ul className="highlights">
            <li>
              My work spans product decisions, engineering, infrastructure, and
              customer support.
            </li>
            <li>
              The platform has recorded more than 17,000 attendance entries and
              generated over 1,300 payslips across 89 finalized payroll runs,
              representing more than ₱6.9 million in gross payroll calculations.
            </li>
            <li>
              Handles Philippine requirements including government
              contributions, withholding tax, holiday pay, scheduling,
              facial-verification attendance, and employee self-service.
            </li>
          </ul>
        </div>

        <div className="when">Healthtech</div>
        <div className="what">
          <h3>
            <a href="https://sigrx.app">SigRx.app</a>
          </h3>
          <p>
            A digital prescription and patient-record application originally
            built for a doctor operating a laboratory. It is in use today while
            I validate whether the product should be expanded for more
            Philippine doctors.
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
