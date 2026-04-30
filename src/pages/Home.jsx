import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { TripContext } from "../context/TripContext";
import { destinations } from "../data/travelData";

function Home() {
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const { dispatch } = useContext(TripContext);

  useEffect(() => {
    setTimeout(() => {
      setPlaces(destinations);
      setLoading(false);
    }, 700);
  }, []);

  const filteredPlaces = useMemo(() => {
    return places.filter(
      (place) =>
        place.name.toLowerCase().includes(search.toLowerCase()) ||
        place.city.toLowerCase().includes(search.toLowerCase()) ||
        place.type.toLowerCase().includes(search.toLowerCase())
    );
  }, [places, search]);

  const saveTrip = useCallback(
    (place) => {
      dispatch({ type: "SAVE_TRIP", payload: place });
      alert(`${place.name} saved to profile`);
    },
    [dispatch]
  );

  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <p className="mini-title">India Travel Planner</p>
          <h1>Explore India with flights, hotels and packages.</h1>
          <p>
            Search destinations, compare trips, save plans and manage your
            travel from one simple React application.
          </p>

          <div className="search-box">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Goa, Manali, Jaipur, Kerala..."
            />
          </div>
        </div>

        <div className="hero-booking-card">
          <h3>Popular Booking</h3>
          <p>Bengaluru → Goa</p>
          <h2>₹3,499</h2>
          <span>Flight + Hotel options available</span>
        </div>
      </section>

      <section className="stats">
        <div>
          <h2>6+</h2>
          <p>Destinations</p>
        </div>
        <div>
          <h2>4</h2>
          <p>Flight Routes</p>
        </div>
        <div>
          <h2>24/7</h2>
          <p>Support</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <h2>Popular India Trips</h2>
          <p>Select a destination and save it to your profile.</p>
        </div>

        {loading ? (
          <p className="loading">Loading destinations...</p>
        ) : filteredPlaces.length === 0 ? (
          <div className="empty-box">
            <h3>No destination found</h3>
            <p>Try searching Goa, Manali, Jaipur, Kerala, Coorg or Varanasi.</p>
          </div>
        ) : (
          <div className="card-grid">
            {filteredPlaces.map((place) => (
              <div className="destination-card" key={place.id}>
                <div className="emoji-box">{place.emoji}</div>
                <span className="tag">{place.type}</span>
                <h3>{place.name}</h3>
                <p>📍 {place.city}</p>
                <p>✈️ {place.flight}</p>
                <p>🏨 {place.hotel}</p>

                <div className="card-footer">
                  <div>
                    <strong>₹{place.price}</strong>
                    <small>{place.days}</small>
                  </div>

                  <button onClick={() => saveTrip(place)}>Save Trip</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;