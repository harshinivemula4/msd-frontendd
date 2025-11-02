import React, { useState } from "react";
import { Link } from "react-router-dom";

function Registrations() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    event: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://msd-backend-1.onrender.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message || "Registration submitted successfully!");

      setFormData({ fullname: "", email: "", event: "" });
    } catch (error) {
      console.error("Error sending registration form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #fff;
          background-image: url('https://vignan.ac.in/newvignan/assets/images/home/image-13.webp');
          background-size: cover;
          background-position: center;
          min-height: 100vh;
          position: relative;
        }
        body::before {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 0;
        }
        .content { position: relative; z-index: 1; padding: 20px; }
        .nav {
          display: flex; gap: 30px; margin-bottom: 30px; flex-wrap: wrap;
        }
        .nav a {
          font-size: 18px;
          padding: 8px 16px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          text-decoration: none;
          color: white;
          transition: background-color 0.3s ease;
        }
        .nav a:hover { background-color: rgba(255, 255, 255, 0.3); }
        h1 { margin-bottom: 20px; }
        form {
          max-width: 400px;
          background: rgba(34, 34, 34, 0.9);
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 40px;
        }
        label { display: block; margin: 15px 0 5px; }
        input, select {
          width: 100%; padding: 8px;
          border-radius: 6px; border: none;
          font-size: 16px; background-color: #333; color: #fff;
        }
        input::placeholder { color: #bbb; }
        button {
          margin-top: 20px; padding: 12px;
          background-color: #ff6600;
          border: none; color: white;
          font-size: 18px; border-radius: 8px;
          cursor: pointer; transition: background-color 0.3s;
          width: 100%;
        }
        button:hover { background-color: #e65c00; }
        .event-images {
          display: flex; gap: 20px; max-width: 1000px;
          flex-wrap: wrap; justify-content: center;
        }
        .event-images img {
          border-radius: 12px; flex: 1 1 calc(33.33% - 20px);
          height: auto; object-fit: cover; max-width: 100%;
          box-shadow: 0 4px 10px rgba(0,0,0,0.5);
          transition: transform 0.3s ease;
          cursor: pointer; min-width: 250px;
        }
        .event-images img:hover { transform: scale(1.05); }
        @media (max-width: 980px) {
          .event-images img { flex: 1 1 calc(50% - 20px); }
        }
        @media (max-width: 600px) {
          .event-images { flex-direction: column; gap: 15px; }
          .event-images img { flex: 1 1 100%; min-width: auto; }
        }
      `}</style>

      <div className="content">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/registrations">Registrations</Link>
          <Link to="/events">Events</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <h1>Event Registration</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Your full name"
            required
            value={formData.fullname}
            onChange={handleChange}
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="event">Select Event</label>
          <select
            id="event"
            name="event"
            required
            value={formData.event}
            onChange={handleChange}
          >
            <option value="" disabled>Select an event</option>
            <option value="tech-fest">Tech Fest 2025</option>
            <option value="sports-day">Sports Day</option>
            <option value="cultural-night">Cultural Night</option>
          </select>

          <button type="submit">Register</button>
        </form>

        <section>
          <h2>Event Highlights</h2>
          <div className="event-images">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRynC9qATdYufmSZ7BWCE32H_ZaFKJpRdyucg&s" alt="Tech Fest" title="Tech Fest 2025" />
            <img src="https://i.ytimg.com/vi/QkUHhs-s0Cw/maxresdefault.jpg" alt="Sports Day" title="Sports Day" />
            <img src="https://www.vignan.ac.in/mahotsav/assets/images/highlights/2.jpg" alt="Cultural Night" title="Cultural Night" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Registrations;


