import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ use Link for internal navigation

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // ✅ Add this missing function
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Backend connection
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://msd-backend-1.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message); // shows “Contact received!” from your backend

      // Clear form after submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending contact form:", error);
      alert("Something went wrong while sending your message.");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    >
      {/* ✅ Navigation using React Router Links */}
      <nav style={{ display: "flex", gap: "30px", marginBottom: "30px" }}>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/registrations" style={navLinkStyle}>Registrations</Link>
        <Link to="/events" style={navLinkStyle}>Events</Link>
        <Link to="/contact" style={navLinkStyle}>Contact</Link>
      </nav>

      <h1>Contact Us</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "400px",
          background: "#222",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          required
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
          required
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }}
        />

        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>
    </div>
  );
}

// ✅ Styles
const navLinkStyle = {
  fontSize: "18px",
  padding: "8px 16px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: "8px",
  textDecoration: "none",
  color: "white",
  transition: "background-color 0.3s"
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "none",
  fontSize: "16px",
  marginBottom: "10px"
};

const buttonStyle = {
  marginTop: "20px",
  padding: "12px",
  backgroundColor: "#ff6600",
  border: "none",
  color: "white",
  fontSize: "18px",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background-color 0.3s"
};

export default Contact;


