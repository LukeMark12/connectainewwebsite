import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <p className="tagline">Revolutionize Your Business with ConnectAI</p>
      <h1>
        Grow Your Business with <span>AI-Powered</span> Solutions
      </h1>
      <p className="subtitle">
        ConnectAI builds beautiful websites and provides 24/7 customer support, helping businesses scale faster with minimal effort.
      </p>
      <div className="cta-buttons">
        <a href="#contact" className="cta">Get Started</a>
        <a href="#ai-solutions" className="learn-more">Learn More</a>
      </div>
      <div className="stats">
        <div className="stat">
          <h3>500+</h3>
          <p>Websites Built</p>
        </div>
        <div className="stat">
          <h3>24/7</h3>
          <p>AI Support</p>
        </div>
        <div className="stat">
          <h3>99%</h3>
          <p>Satisfaction</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;