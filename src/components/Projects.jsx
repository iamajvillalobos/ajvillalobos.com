import ProjectItem from "./ProjectItem";

const Projects = () => {
  const projects = [
    {
      title: "Bruskoffee Admin",
      description:
        "Inventory system built for a specialty coffee shop. Features include automatic low-stock alerts, ingredient-based costing, sales reporting, and 3rd-party POS + delivery report integration.",
      tags: [
        "ruby on rails 7",
        "heroku",
        "tailwind",
        "api integration",
        "avo admin",
        "devise",
        "solid queue",
      ],
    },
    {
      title: "Medical Laboratory Admin",
      description:
        "Inventory and access control system for a medical lab. Tracks perishable goods, sales, and stock movement with user authorizations and audit history.",
      tags: [
        "ruby on rails 8",
        "heroku",
        "tailwind",
        "devise",
        "pundit",
        "paper trail",
      ],
    },
    {
      title: "Privacy-focused Marketing Tool",
      description:
        "A simple Bitly alternative focused on privacy and GDPR compliance. Originally launched as a paid tool and later acquired by an early user.",
      tags: [
        "ruby on rails 5",
        "heroku",
        "bootstrap",
        "aws",
        "paddle",
        "postmark",
        "subdomains",
      ],
    },
    {
      title: "Clover Ruby Gem",
      description:
        "An open-source Ruby wrapper for a major POS system's REST API. Though now archived, the gem was widely forked and used in production integrations.",
      tags: ["ruby", "rubygems", "api integration"],
    },
  ];

  return (
    <section className="section">
      <h3>Other Works</h3>
      <ul className="project-list">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
