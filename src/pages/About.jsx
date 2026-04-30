function About() {
  return (
    <section className="page-section">
      <div className="about-layout">
        <div>
          <p className="mini-title">About WanderIndia</p>
          <h1>Built to make India travel planning simple.</h1>
          <p>
            WanderIndia is a travel planning React app where users can explore
            destinations, check travel services and save their favourite trips.
          </p>
          <p>
            This project uses routing, nested routing, useState, useEffect,
            useContext, useReducer, useCallback, useMemo and useRef.
          </p>
        </div>

        <div className="info-card">
          <h3>Features</h3>
          <ul>
            <li>Destination search</li>
            <li>Flight, hotel and package pages</li>
            <li>Saved trips profile</li>
            <li>Responsive premium UI</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;