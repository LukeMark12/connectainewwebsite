import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">ConnectAI</h1>
        <nav>
          <a href="#ai-solutions">AI Solutions</a>
          <a href="#integration">Integration</a>
          <a href="#success-stories">Success Stories</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact" className="cta">Get Started</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;