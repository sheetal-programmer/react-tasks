import { Link } from "react-router-dom";

function ServiceCard({ icon, title, text, link }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <Link to={link}>Explore Service</Link>
    </div>
  );
}

export default ServiceCard;