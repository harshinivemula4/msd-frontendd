import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #fff;
          background-color: #121212;
        }
        .header {
          position: relative;
          background-image: url('https://content3.jdmagicbox.com/comp/guntur/u8/9999px863.x863.221229201921.e1u8/catalogue/vignan-university-guntur-universities-6RekzQOjo4.jpg');
          background-size: cover;
          background-position: center;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }
        .top-bar {
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
        }
        .logo {
          height: 60px;
        }
        .nav {
          display: flex;
          gap: 30px;
        }
        .nav a {
          font-size: 18px;
          cursor: pointer;
          padding: 8px 16px;
          background-color: #e65c00;
          border-radius: 8px;
          text-decoration: none;
          color: white;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }
        .nav a:hover {
          background-color: #ff7518;
          transform: scale(1.05);
        }
        .hero-content {
          z-index: 2;
          padding: 60px;
          text-align: left;
          max-width: 600px;
        }
        .hero-content h1 {
          font-size: 48px;
          margin-bottom: 20px;
        }
        .hero-content p {
          font-size: 20px;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        .cta-button {
          padding: 14px 28px;
          background-color: #e65c00;
          border: none;
          color: #fff;
          font-size: 18px;
          border-radius: 10px;
          cursor: pointer;
          transition: transform 0.2s, background-color 0.3s;
        }
        .cta-button:hover {
          background-color: #ff7518;
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .top-bar {
            flex-direction: column;
            align-items: flex-start;
          }
          .nav {
            margin-top: 10px;
            flex-direction: column;
            gap: 10px;
          }
          .hero-content {
            padding: 30px;
          }
          .hero-content h1 {
            font-size: 32px;
          }
          .hero-content p {
            font-size: 16px;
          }
        }
      `}</style>

      <header className="header">
        <div className="overlay"></div>
        <div className="top-bar">
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/registrations">Registrations</Link>
            <Link to="/events">Events</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Vignan-university-guntur-Logo.jpg"
            alt="University Logo"
            className="logo"
          />
        </div>

        <div className="hero-content">
          <h1>Campus Connect</h1>
          <p>
            Explore, Register, and Participate in all the exciting events hosted by our university.
            Stay informed and never miss a moment!
          </p>
          <button
            className="cta-button"
            onClick={() => navigate("/events")}
          >
            Explore Events
          </button>
        </div>
      </header>
    </div>
  );
}

export default Home;
