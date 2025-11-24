import ProjectItem from "./ProjectItem";

const Projects = () => {
  const projects = [
    {
      title: "Bruskoffee Admin Platform",
      description:
        "Full-featured Rails 7 inventory management system for specialty coffee shop operations. Architected with Solid Queue for background jobs, Avo Admin for rapid UI development, and custom API integrations for POS and delivery services. Implemented automated low-stock alerts, ingredient-based cost calculations, and comprehensive sales analytics with ActiveRecord queries.",
      tags: [
        "rails 7",
        "solid queue",
        "avo admin",
        "api integration",
        "postgresql",
        "devise",
        "tailwind css",
        "heroku",
      ],
    },
    {
      title: "Medical Laboratory Management System",
      description:
        "Rails 8 application managing inventory, access control, and audit trails for medical laboratory. Built with Pundit for authorization, Paper Trail for comprehensive audit logging, and custom Rails validators for perishable goods tracking. Features role-based permissions, stock movement tracking, and detailed reporting.",
      tags: [
        "rails 8",
        "pundit",
        "paper trail",
        "devise",
        "postgresql",
        "tailwind css",
        "heroku",
      ],
    },
    {
      title: "Privacy-Focused Link Shortener (Acquired)",
      description:
        "GDPR-compliant Rails 5 SaaS alternative to Bitly with multi-tenant architecture using subdomain routing. Integrated Paddle for subscription payments, AWS for asset storage, and Postmark for transactional emails. Successfully launched as paid product and acquired by early user. Featured custom analytics without user tracking.",
      tags: [
        "rails 5",
        "multi-tenancy",
        "paddle payments",
        "aws s3",
        "postmark",
        "bootstrap",
        "heroku",
      ],
    },
    {
      title: "Clover POS Ruby Gem (Open Source)",
      description:
        "Open-source Ruby wrapper for Clover POS REST API, providing clean interface for inventory, orders, and payment operations. Designed with Faraday middleware, comprehensive RSpec test coverage, and proper error handling. Widely adopted in production environments before being archived (50+ forks).",
      tags: ["ruby", "faraday", "rspec", "rubygems", "api client", "open source"],
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
