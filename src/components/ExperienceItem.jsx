const ExperienceItem = ({ title, role, location, description }) => {
  return (
    <li className="experience-item">
      <div className="experience-header">
        <div className="experience-title">{title}</div>
        {role && <h4 className="experience-role">{role}</h4>}
        {location && <div className="experience-location">{location}</div>}
      </div>
      {description && <p className="experience-description">{description}</p>}
    </li>
  );
};

export default ExperienceItem;
