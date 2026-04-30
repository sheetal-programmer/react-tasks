import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { TripProvider } from "./context/TripContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

import Flights from "./pages/services/Flights";
import Hotels from "./pages/services/Hotels";
import Packages from "./pages/services/Packages";

function App() {
  return (
    <TripProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/services/flights" element={<Flights />} />
          <Route path="/services/hotels" element={<Hotels />} />
          <Route path="/services/packages" element={<Packages />} />
        </Routes>
      </BrowserRouter>
    </TripProvider>
  );
}

export default App;