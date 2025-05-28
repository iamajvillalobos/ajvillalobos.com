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
    },
    {
      title: "Tanda / Jun 2017 - Jan 2018",
    },
    {
      title: "Proudcloud / Aug 2015 - Feb 2016",
    },
    {
      title: "YouSource / Sep 2014 - Aug 2015",
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
