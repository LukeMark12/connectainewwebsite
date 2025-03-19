import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AIWebsiteBuilder from './components/AIWebsiteBuilder';
import BusinessIntegration from './components/BusinessIntegration';
import Services from './components/Services';
import Policy from './components/Policy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Bot from './components/Bot';

function App() {
  const [botOpen, setBotOpen] = useState(false);

  return (
    <div className="app">
      <Header />
      <Hero />
      <AIWebsiteBuilder />
      <BusinessIntegration />
      <Services />
      <Policy />
      <Contact />
      <Footer />
      <button className="bot-toggle" onClick={() => setBotOpen(!botOpen)}>
        💡
      </button>
      {botOpen && <Bot closeBot={() => setBotOpen(false)} />}
    </div>
  );
}

export default App;