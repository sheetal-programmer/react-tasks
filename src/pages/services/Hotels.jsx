import { hotels } from "../../data/travelData";

function Hotels() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="mini-title">Hotel Booking</p>
        <h1>Stay options for every budget</h1>
        <p>Choose a stay type based on comfort and travel budget.</p>
      </div>

      <div className="card-grid">
        {hotels.map((hotel) => (
          <div className="service-card" key={hotel.id}>
            <div className="service-icon">🏨</div>
            <h3>{hotel.name}</h3>
            <p>{hotel.details}</p>
            <strong>{hotel.price}</strong>
            <button>Request Hotel</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hotels;