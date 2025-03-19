import React from 'react';

function BusinessIntegration() {
  return (
    <section id="integration" className="business-integration">
      <h2>How ConnectAI Transforms Your Business</h2>
      <div className="integration-content">
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <h4>Analysis & Planning</h4>
            <p>Our AI analyzes your business needs and creates a tailored integration plan, identifying key areas for automation and improvement.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h4>Implementation</h4>
            <p>Seamless integration with your existing systems, with minimal disruption to your operations and rapid deployment.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h4>Scaling & Optimization</h4>
            <p>As your business grows, our AI solutions adapt and scale accordingly, ensuring long-term success.</p>
          </div>
        </div>
        <div className="diagram">
          <div className="circle">Your Business</div>
          <div className="connection customer-ai">Customer AI</div>
          <div className="connection data-analytics">Data Analytics</div>
          <div className="connection automation">Automation</div>
        </div>
      </div>
    </section>
  );
}

export default BusinessIntegration;