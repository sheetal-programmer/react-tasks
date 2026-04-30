function DestinationCard({ place, onSave }) {
  return (
    <div className="destination-card">
      <img src={place.image} alt={place.name} />

      <div className="destination-info">
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

          <button onClick={() => onSave(place)}>Save Trip</button>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;