const Skills = () => {
  const skillCategories = [
    {
      title: "Ruby & Rails",
      skills: [
        "Ruby on Rails (5-8)",
        "Ruby",
        "Active Record & Database Design",
        "Rails API Development",
        "Background Jobs (Sidekiq, Solid Queue)",
        "Rails Testing (RSpec, Minitest)",
        "Hotwire (Turbo, Stimulus)",
      ],
    },
    {
      title: "Frontend & APIs",
      skills: [
        "JavaScript/TypeScript",
        "React, Vue.js, EmberJS",
        "RESTful APIs",
        "Tailwind CSS",
        "Preact",
        "SPA Development",
      ],
    },
    {
      title: "Infrastructure & Tools",
      skills: [
        "PostgreSQL",
        "Heroku, AWS",
        "Docker",
        "Git & CI/CD",
        "Redis",
        "Third-party API Integration",
      ],
    },
    {
      title: "Architecture & Practices",
      skills: [
        "Microservices Architecture",
        "System Refactoring",
        "Clean Code Principles",
        "Authentication (Devise, Pundit)",
        "Payment Integration (Paddle)",
        "GDPR Compliance",
      ],
    },
  ];

  return (
    <section className="section">
      <h3>Technical Expertise</h3>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h4>{category.title}</h4>
            <ul>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
