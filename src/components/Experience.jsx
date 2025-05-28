import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const experiences = [
    {
      title: "Shiftcare / May 2024 - Present",
      role: "Ruby on Rails Developer",
      location: "Australia (Remote)",
      description:
        "Build scalable, user-friendly features for aged care using Rails APIs and VueJS, serving both customers and internal users.",
    },
    {
      title: "Radiopaedia / June 2023 - Jan 2024",
      role: "Ruby on Rails Developer",
      location: "Australia (Remote)",
      description:
        "Improved UX by making key pages mobile-friendly and redesigning the layout using TypeScript, Preact, and Rails API integration.",
    },
    {
      title: "Kangarootime / July 2019 - May 2023",
      role: "Senior Ruby on Rails Developer",
      location: "USA (Remote)",
      description:
        "Led refactoring of a core Rails model, enabling new feature development. Maintained legacy systems and built COVID-19 tools to support childcare centers' daily operations.",
    },
    {
      title: "Bloom Solutions / Nov 2017 - Dec 2020",
      role: "Ruby on Rails Developer",
      location: "Makati, Philippines (Remote)",
      description:
        "Transformed money services with cryptocurrencies, building features for Bloom Remit that facilitated over $120m in transactions. Led design for BloomICO and BloomTeller apps using modern scalable UI approaches.",
    },
    {
      title: "Tanda / Jun 2017 - Jan 2018",
      role: "Ruby on Rails Developer",
      location: "Ortigas, Metro Manila, Philippines",
      description:
        "Built third-party integrations using multiple PoS APIs and created sales tools to increase team productivity. Extended core product functionality with Facebook Messenger bot and streamlined processes with web services.",
    },
    {
      title: "Aelogica / Jun 2016 - Jun 2017",
      role: "Software Developer",
      location: "Taguig, Philippines",
      description:
        "Developed backend systems for apartment and self-storage booking platforms using microservices architecture. Built internal applications and distributed gems over private RubyGems system for American marketing clients.",
    },
    {
      title: "Proudcloud / Aug 2015 - Feb 2016",
      role: "Software Developer",
      location: "Quezon City, Philippines",
      description:
        "Ported talent-production company connection platform from Rails monolith to SPA using EmberJS frontend. Developed Rails API backend serving hundreds of companies connecting artists to major production studios.",
    },
    {
      title: "YouSource / Sep 2014 - Aug 2015",
      role: "Software Developer",
      location: "Philippines",
      description:
        "Developed Cloudhealth platform automating pre-employment workflows for Australian clients. Worked on monolithic Rails application and led migration to Angular frontend with Rails API backend.",
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
