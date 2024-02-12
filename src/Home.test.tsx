import React from "react";
import "./homepage.css"; // Import CSS file for styling

const HomePage = () => {
  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">{/* Your navigation items */}</nav>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Welcome to Our N</h1>
        <p className="hero-subtitle">
          Create, collaborate, and share notes seamlessly!
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h2>Collaborate Effortlessly</h2>
          <p>Work together in real-time with your team or classmates.</p>
        </div>
        <div className="feature">
          <h2>Save and Organize</h2>
          <p>Keep your notes organized in one place for easy access.</p>
        </div>
        <div className="feature">
          <h2>Share with Anyone</h2>
          <p>Share your notes securely with anyone, anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">{/* Your footer content */}</footer>
    </div>
  );
};

export default HomePage;
