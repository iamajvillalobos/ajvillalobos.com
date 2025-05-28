import Tag from "./Tag";

const ProjectItem = ({ title, description, tags }) => {
  return (
    <li className="project-item">
      <h4 className="project-title">{title}</h4>
      <p className="project-description">{description}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </div>
    </li>
  );
};

export default ProjectItem;
