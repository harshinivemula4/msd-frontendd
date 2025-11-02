import React, { useState } from "react";
import { Link } from "react-router-dom";

function Events() {
  const [formData, setFormData] = useState({
    name: "",
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
      const response = await fetch("http://localhost:5000/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message || `Registered for ${formData.event}!`);
      setFormData({ name: "", email: "", event: "" });
    } catch (error) {
      console.error("Error submitting event data:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#0d0d0d",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <style>{`
        nav {
          display: flex;
          background-color: #1a1a1a;
          padding: 10px;
          gap: 10px;
          justify-content: center;
          z-index: 10;
          position: relative;
        }
        nav a {
          background-color: #2a2a2a;
          color: #fff;
          padding: 8px 16px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
          transition: background 0.3s ease;
        }
        nav a:hover {
          background-color: #ff6600;
        }
        .hero {
          position: relative;
          width: 100%;
          height: 600px;
          overflow: hidden;
        }
        .hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(65%);
        }
        .hero-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          text-align: center;
        }
        .hero-text h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        .hero-text p {
          font-size: 1.2rem;
        }
        h1.section-title {
          margin-left: 30px;
          margin-top: 20px;
        }
        .event {
          display: flex;
          background-color: #141414;
          margin: 20px auto;
          padding: 15px;
          border-radius: 10px;
          max-width: 900px;
          gap: 15px;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
        }
        .event img {
          width: 200px;
          height: 130px;
          object-fit: cover;
          border-radius: 5px;
        }
        .event-details h2 {
          color: #ff6600;
          margin: 0 0 8px 0;
        }
        .event-details p {
          margin: 4px 0;
          line-height: 1.4;
        }
        form {
          background: #141414;
          padding: 20px;
          border-radius: 10px;
          max-width: 400px;
          margin: 40px auto;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
        }
        form h2 {
          text-align: center;
          color: #ff6600;
          margin-bottom: 20px;
        }
        form label {
          display: block;
          margin: 10px 0 5px;
        }
        form input, form select {
          width: 100%;
          padding: 8px;
          border-radius: 6px;
          border: none;
          background-color: #2a2a2a;
          color: #fff;
        }
        form button {
          width: 100%;
          padding: 10px;
          background-color: #ff6600;
          border: none;
          border-radius: 6px;
          color: white;
          font-size: 16px;
          margin-top: 15px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        form button:hover {
          background-color: #e65c00;
        }
        @media (max-width: 700px) {
          .event {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .event img {
            width: 100%;
            height: auto;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav>
        <Link to="/" style={{ textDecoration: "none" }}>Home</Link>
        <Link to="/registrations" style={{ textDecoration: "none" }}>Registrations</Link>
        <Link to="/events" style={{ textDecoration: "none" }}>Events</Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>Contact</Link>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <img
          src="https://vignan.ac.in/newvignan/departments/dep_assets/stu_culturals/stu_cul_cse2.jpg"
          alt="Hero"
        />
        <div className="hero-text">
          <h1>Stay connected with our latest activities</h1>
          <p>Your gateway to college events and registrations</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <h1 className="section-title">Upcoming Events</h1>

      {events.map((event, index) => (
        <div className="event" key={index}>
          <img src={event.img} alt={event.title} />
          <div className="event-details">
            <h2>{event.title}</h2>
            <p><strong>Date:</strong> {event.date}</p>
            <p>{event.description}</p>
          </div>
        </div>
      ))}

      {/* Event Registration Form */}
      <form onSubmit={handleSubmit}>
        <h2>Quick Event Registration</h2>

        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          required
          onChange={handleChange}
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          required
          onChange={handleChange}
        />

        <label htmlFor="event">Select Event</label>
        <select
          id="event"
          name="event"
          value={formData.event}
          required
          onChange={handleChange}
        >
          <option value="">-- Select Event --</option>
          {events.map((event, index) => (
            <option key={index} value={event.title}>
              {event.title}
            </option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// ✅ Event Data
const events = [
  {
    title: "Tech Fest 2025",
    date: "March 15, 2025",
    img: "https://i.ytimg.com/vi/hj4jwraTFzk/hq720.jpg",
    description:
      "Join us for an exciting day of tech talks, workshops, and competitions that will inspire and challenge your skills.",
  },
  {
    title: "Sports Day",
    date: "April 20, 2025",
    img: "https://i.ytimg.com/vi/ZezfYglm74E/maxresdefault.jpg",
    description:
      "A fun-filled day with sports, games, and activities for all students to showcase their athletic spirit.",
  },
  {
    title: "Cultural Night",
    date: "May 10, 2025",
    img: "https://kohinoor.edu.in/wp-content/uploads/2023/06/0T7A3996-1.jpg",
    description:
      "Experience vibrant performances and celebrate the diverse culture of our campus with music, dance, and drama.",
  },
  {
    title: "Coding Bootcamp",
    date: "July 3, 2025",
    img: "https://i.pinimg.com/736x/e1/e8/a9/e1e8a9b4e434e432931582bfc76490b6.jpg",
    description:
      "Enhance your coding skills with an intensive workshop focused on programming techniques and best practices.",
  },
  {
    title: "Literary Showcase",
    date: "August 18, 2025",
    img: "https://vignan.ac.in/images/h-about1.jpg",
    description:
      "Share your love for literature through readings, poetry recitals, and storytelling sessions in a creative environment.",
  },
];

export default Events;
