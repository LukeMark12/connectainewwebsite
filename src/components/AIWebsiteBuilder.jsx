import React from 'react';

function AIWebsiteBuilder() {
  return (
    <section id="ai-solutions" className="ai-website-builder">
      <h2>AI Website Building</h2>
      <p>
        Create beautiful, functional websites in minutes using our AI-powered website builder. Just describe what you want, and watch as ConnectAI brings your vision to life.
      </p>
      <div className="features">
        <div className="feature">
          <span className="icon">🧹</span>
          <h4>Code Generation</h4>
          <p>Clean, fast, optimized code that loads quickly.</p>
        </div>
        <div className="feature">
          <span className="icon">⚡</span>
          <h4>Lightning Fast</h4>
          <p>From concept to live in minutes.</p>
        </div>
      </div>
      <div className="demo">
        <p className="code-prompt">$ describe "business landing page with contact form"</p>
        <p className="code-output">
          AI: Generating website components... <br />
          AI: Creating responsive layouts... <br />
          AI: Website ready! Preview at your-domain.com
        </p>
      </div>
    </section>
  );
}

export default AIWebsiteBuilder;