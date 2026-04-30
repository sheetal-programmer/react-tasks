import { useContext, useMemo } from "react";
import { TripContext } from "../context/TripContext";

function Profile() {
  const { savedTrips, dispatch } = useContext(TripContext);

  const totalAmount = useMemo(() => {
    return savedTrips.reduce((total, trip) => total + trip.price, 0);
  }, [savedTrips]);

  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="mini-title">Traveller Profile</p>
        <h1>My Saved Trips</h1>
        <p>Manage saved trips, estimated cost and selected travel plans.</p>
      </div>

      <div className="profile-summary">
        <div>
          <h2>{savedTrips.length}</h2>
          <p>Saved Trips</p>
        </div>

        <div>
          <h2>₹{totalAmount}</h2>
          <p>Estimated Total</p>
        </div>

        <button onClick={() => dispatch({ type: "CLEAR_ALL" })}>
          Clear All
        </button>
      </div>

      {savedTrips.length === 0 ? (
        <div className="empty-box">
          <h3>No trips saved yet</h3>
          <p>Go to Home and save your favourite destination.</p>
        </div>
      ) : (
        <div className="card-grid">
          {savedTrips.map((trip) => (
            <div className="destination-card" key={trip.id}>
              <div className="emoji-box">{trip.emoji}</div>
              <span className="tag">{trip.type}</span>
              <h3>{trip.name}</h3>
              <p>📍 {trip.city}</p>
              <p>✈️ {trip.flight}</p>
              <p>🏨 {trip.hotel}</p>
              <strong>₹{trip.price}</strong>

              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_TRIP", payload: trip.id })
                }
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Profile;