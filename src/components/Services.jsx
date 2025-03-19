import React from 'react';

function Services() {
  return (
    <section id="pricing" className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        <div className="service">
          <h3>AI Chatbot</h3>
          <p>$100/month – 24/7 Custom Answers</p>
          <p className="promo">First Month $50 (First 10!)</p>
        </div>
        <div className="service">
          <h3>Video Social Boost</h3>
          <p>$300-$1,500/month – 4-12 Pro Clips</p>
          <p className="promo">10% Off First Month!</p>
        </div>
        <div className="service">
          <h3>Website Build</h3>
          <p>$200 One-Time – Live in 2-3 Days</p>
          <p>Or FREE with 3 Months of Chatbot + Videos</p>
        </div>
      </div>
    </section>
  );
}

export default Services;