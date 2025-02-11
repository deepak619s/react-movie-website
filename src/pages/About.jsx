import { NavLink } from "react-router-dom";
import "../App.css";

export const About = () => {
    return (
        <div className="about-container">
          <div className="about-content">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">Welcome to <span className="highlight">My MoviesHib</span>, your ultimate destination for movie enthusiasts. We bring you the latest news, in-depth reviews, trailers, and exclusive insights from the world of cinema.</p>
            <div className="about-grid">
              <div className="about-card">
                <h2 className="card-title">Our Mission</h2>
                <p>To connect movie lovers with the magic of cinema, providing comprehensive and reliable content that entertains, informs, and inspires.</p>
              </div>

              <div className="about-card">
                <h2 className="card-title">Why Choose Us?</h2>
                <p>Our passionate team of cinephiles is dedicated to curating content that reflects the diverse world of films, from blockbusters to indie gems.</p>
              </div>

            </div>
            <div className="contact-section">
              <h2 className="card-title">Contact Us</h2>
              <p>Email: <NavLink to="mailto:info@cineworld.com" className="contact-link">info@mymovieshub.com</NavLink></p>
              <p>Follow us on:
                <NavLink to="#" className="contact-link">Facebook</NavLink>,
                <NavLink to="#" className="contact-link">Twitter</NavLink>,
                <NavLink to="#" className="contact-link">Instagram</NavLink>
              </p>
            </div>
          </div>
        </div>
      );
};