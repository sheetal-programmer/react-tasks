import { useMemo, useState } from "react";
import { flights } from "../../data/travelData";

function Flights() {
  const [search, setSearch] = useState("");

  const filteredFlights = useMemo(() => {
    return flights.filter(
      (flight) =>
        flight.route.toLowerCase().includes(search.toLowerCase()) ||
        flight.airline.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="mini-title">Domestic Flights</p>
        <h1>Search popular flight routes</h1>
        <p>Find routes, airlines, travel duration and starting prices.</p>
      </div>

      <div className="search-box small-search">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Goa, Jaipur, IndiGo..."
        />
      </div>

      <div className="table-card">
        {filteredFlights.map((flight) => (
          <div className="route-row" key={flight.id}>
            <div>
              <h3>{flight.route}</h3>
              <p>{flight.airline} • {flight.time}</p>
            </div>

            <div className="right-info">
              <strong>{flight.price}</strong>
              <a
                href="https://www.google.com/travel/flights"
                target="_blank"
                rel="noreferrer"
              >
                Check Flights
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Flights;