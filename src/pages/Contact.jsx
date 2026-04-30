import { useRef, useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  const sendMessage = () => {
    if (message.trim() === "") {
      inputRef.current.focus();
      return;
    }

    alert("Thank you! Our travel advisor will contact you soon.");
    setMessage("");
  };

  return (
    <section className="page-section">
      <div className="contact-card">
        <div>
          <p className="mini-title">Contact Us</p>
          <h1>Need help planning your trip?</h1>
          <p>
            Send your requirement and our advisor will help you with flights,
            hotels and packages.
          </p>

          <div className="contact-details">
            <p>📧 support@wanderindia.in</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 Bengaluru, India</p>
          </div>
        </div>

        <div className="contact-form">
          <input
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Example: I need Goa trip for 3 days"
          />

          <button onClick={sendMessage}>Send Enquiry</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;