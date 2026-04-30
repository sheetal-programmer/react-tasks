import { packages } from "../../data/travelData";

function Packages() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="mini-title">Tour Packages</p>
        <h1>Ready-made travel packages</h1>
        <p>Select packages created for different types of travellers.</p>
      </div>

      <div className="card-grid">
        {packages.map((pack) => (
          <div className="service-card" key={pack.id}>
            <div className="service-icon">🌴</div>
            <h3>{pack.name}</h3>
            <p>{pack.includes}</p>
            <strong>{pack.price}</strong>
            <button>Book Package</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;