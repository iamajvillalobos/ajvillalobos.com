const ExperienceItem = ({ title, role, location, description }) => {
  return (
    <li className="experience-item">
      <div className="experience-header">
        <h4 className="experience-title">{title}</h4>
        {role && <p className="experience-role">{role}</p>}
        {location && <p className="experience-location">{location}</p>}
      </div>
      {description && <p className="experience-description">{description}</p>}
    </li>
  );
};

export default ExperienceItem;
