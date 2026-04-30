import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="mini-title">Travel Services</p>
        <h1>Plan your complete trip in one place.</h1>
        <p>
          Choose flights, hotels and ready-made packages for popular Indian
          destinations.
        </p>
      </div>

      <div className="card-grid">
        <div className="service-card">
          <div className="service-icon">✈️</div>
          <h3>Flight Booking</h3>
          <p>Search domestic routes, airlines, travel time and prices.</p>
          <Link to="/services/flights">Explore Flights</Link>
        </div>

        <div className="service-card">
          <div className="service-icon">🏨</div>
          <h3>Hotel Booking</h3>
          <p>Compare budget hotels, comfort stays and premium resorts.</p>
          <Link to="/services/hotels">Explore Hotels</Link>
        </div>

        <div className="service-card">
          <div className="service-icon">🌴</div>
          <h3>Tour Packages</h3>
          <p>Book student, weekend, family and couple travel packages.</p>
          <Link to="/services/packages">Explore Packages</Link>
        </div>
      </div>

      <div className="service-note">
        <h3>How it works</h3>
        <p>
          Search destination → Check flights/hotels → Save trip → Contact advisor
        </p>
      </div>
    </section>
  );
}

export default Services;