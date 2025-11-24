import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const experiences = [
    {
      title: "May 2024 - Present",
      role: "Ruby on Rails Developer",
      location: "Shiftcare • Australia (Remote)",
      description:
        "Building scalable Rails 7 features for aged care platform using Rails APIs, VueJS, and background job processing with Solid Queue. Developing customer-facing and internal admin tools serving thousands of aged care providers.",
    },
    {
      title: "June 2023 - Jan 2024",
      role: "Ruby on Rails Developer",
      location: "Radiopaedia • Australia (Remote)",
      description:
        "Enhanced mobile UX for medical education platform by redesigning critical pages with TypeScript, Preact, and Rails API integration. Optimized Rails backend performance and improved API response times for radiology case database.",
    },
    {
      title: "July 2019 - May 2023",
      role: "Senior Ruby on Rails Developer",
      location: "Kangarootime • USA (Remote)",
      description:
        "Led major refactoring of core Rails models enabling new feature development on childcare management platform. Architected and shipped COVID-19 health screening tools using Rails 6, Sidekiq, and PostgreSQL. Maintained legacy Rails 4/5 systems while modernizing codebase.",
    },
    {
      title: "Nov 2017 - Dec 2020",
      role: "Ruby on Rails Developer",
      location: "Bloom Solutions • Makati, Philippines (Remote)",
      description:
        "Built and scaled Rails-based fintech platform processing over $120M in cryptocurrency remittances. Developed RESTful APIs, integrated third-party payment providers, and architected BloomICO and BloomTeller applications with modern Rails patterns and React frontends.",
    },
    {
      title: "Jun 2017 - Jan 2018",
      role: "Ruby on Rails Developer",
      location: "Tanda • Ortigas, Metro Manila, Philippines",
      description:
        "Developed Rails integrations with multiple Point-of-Sale APIs (Clover, Square) for savings platform. Built internal sales tools and extended product with Facebook Messenger bot using Rails webhooks and background workers.",
    },
    {
      title: "Jun 2016 - Jun 2017",
      role: "Software Developer",
      location: "Aelogica • Taguig, Philippines",
      description:
        "Architected Rails microservices for apartment and self-storage booking platforms serving American clients. Created and maintained private RubyGems for shared functionality across services. Built internal Rails applications with ActiveRecord optimization.",
    },
    {
      title: "Aug 2015 - Feb 2016",
      role: "Software Developer",
      location: "Proudcloud • Quezon City, Philippines",
      description:
        "Migrated Rails monolith to modern API architecture with EmberJS frontend. Developed Rails API backend with Grape, serving production platform connecting talent to major studios. Implemented serializers and optimized database queries.",
    },
    {
      title: "Sep 2014 - Aug 2015",
      role: "Software Developer",
      location: "YouSource • Philippines",
      description:
        "Developed Cloudhealth pre-employment platform on Rails for Australian healthcare clients. Led migration from Rails monolith to Angular SPA with Rails API backend. Implemented RESTful endpoints and automated workflows.",
    },
  ];

  return (
    <section className="section">
      <h3>Experiences</h3>
      <ul className="experience-list">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            title={experience.title}
            role={experience.role}
            location={experience.location}
            description={experience.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Experience;
