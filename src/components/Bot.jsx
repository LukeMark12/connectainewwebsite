import React, { useState } from 'react';

function Bot({ closeBot }) {
  const [content, setContent] = useState('main');

  const renderContent = () => {
    switch (content) {
      case 'main':
        return (
          <>
            <button className="bot-option" onClick={() => setContent('services')}>Our Services</button>
            <button className="bot-option" onClick={() => setContent('promos')}>Current Promos</button>
            <button className="bot-option" onClick={() => setContent('policy')}>Our Policy</button>
            <button className="bot-option" onClick={() => setContent('contact')}>Contact Us</button>
          </>
        );
      case 'services':
        return (
          <>
            <p>Pick a service:</p>
            <button className="bot-option" onClick={() => setContent('chatbot')}>AI Chatbot</button>
            <button className="bot-option" onClick={() => setContent('video')}>Video Boost</button>
            <button className="bot-option" onClick={() => setContent('website')}>Website Build</button>
            <button className="bot-option" onClick={() => setContent('main')}>Back</button>
          </>
        );
      case 'promos':
        return (
          <>
            <p><strong>Current Promos:</strong></p>
            <p>Chatbot: First month $50 (first 10)</p>
            <p>Video: 10% off first month (first 10)</p>
            <p>Website: Free with 3 months of chatbot + videos</p>
            <button className="bot-option" onClick={() => setContent('contact')}>Get These Now</button>
            <button className="bot-option" onClick={() => setContent('main')}>Back</button>
          </>
        );
      case 'policy':
        return (
          <>
            <p><strong>Our Policy:</strong></p>
            <button className="bot-option" onClick={() => setContent('pricing')}>Pricing</button>
            <button className="bot-option" onClick={() => setContent('no-lockin')}>No Lock-In</button>
            <button className="bot-option" onClick={() => setContent('support')}>Support</button>
            <button className="bot-option" onClick={() => setContent('refunds')}>Refunds</button>
            <button className="bot-option" onClick={() => setContent('privacy')}>Data & Privacy</button>
            <button className="bot-option" onClick={() => setContent('main')}>Back</button>
          </>
        );
      case 'contact':
        return (
          <>
            <p><strong>Contact Us:</strong></p>
            <p>Luke: +358415773415</p>
            <p>Snoopy: 0417410934</p>
            <p>Email: lukemarkflying@gmail.com</p>
            <p><a href="#" target="_blank">FB DM</a></p>
            <button className="bot-option" onClick={() => setContent('main')}>Back</button>
          </>
        );
      case 'chatbot':
        return (
          <>
            <p><strong>AI Chatbot:</strong></p>
            <p>$100/month – 24/7 custom answers</p>
            <p>First month $50 (first 10 clients)</p>
            <button className="bot-option" onClick={() => setContent('contact')}>Get It</button>
            <button className="bot-option" onClick={() => setContent('services')}>Other Services</button>
          </>
        );
      case 'video':
        return (
          <>
            <p><strong>Video Social Boost:</strong></p>
            <p>$300-$1,500/month – 4-12 pro clips</p>
            <p>10% off first month (first 10)</p>
            <button className="bot-option" onClick={() => setContent('contact')}>Get It</button>
            <button className="bot-option" onClick={() => setContent('services')}>Other Services</button>
          </>
        );
      case 'website':
        return (
          <>
            <p><strong>Website Build:</strong></p>
            <p>$200 one-time – live in 2-3 days</p>
            <p>Free with 3 months of chatbot + videos</p>
            <button className="bot-option" onClick={() => setContent('contact')}>Get It</button>
            <button className="bot-option" onClick={() => setContent('services')}>Other Services</button>
          </>
        );
      case 'pricing':
        return (
          <>
            <p><strong>Pricing:</strong></p>
            <p>Chatbots: $100/month ($50 first month, first 10)</p>
            <p>Videos: $300-$1,500/month (10% off first month, first 10)</p>
            <p>Websites: $200 one-time, or free with 3 months of chatbot + videos</p>
            <button className="bot-option" onClick={() => setContent('contact')}>Get Started</button>
            <button className="bot-option" onClick={() => setContent('policy')}>Other Policies</button>
          </>
        );
      case 'no-lockin':
        return (
          <>
            <p><strong>No Lock-In:</strong></p>
            <p>Month-to-month. Cancel anytime with 7 days’ notice—no penalties.</p>
            <p>Email Luke or Snoopy to opt out.</p>
            <button className="bot-option" onClick={() => setContent('contact')}>Questions?</button>
            <button className="bot-option" onClick={() => setContent('policy')}>Other Policies</button>
          </>
        );
      case 'support':
        return (
          <>
            <p><strong>Full Support:</strong></p>
            <p>Setup, tweaks, fixes—Luke & Snoopy via phone, email, FB.</p>
            <p>Chatbot live in 24h, websites in 2-3 days, videos weekly.</p>
            <button className="bot-option" onClick={() => setContent('contact')}>Need Help?</button>
            <button className="bot-option" onClick={() => setContent('policy')}>Other Policies</button>
          </>
        );
      case 'refunds':
        return (
          <>
            <p><strong>Refunds:</strong></p>
            <p>First month refundable within 7 days if undelivered.</p>
            <p>No refunds post-first month—just cancel. Website fee ($200) non-refundable once live.</p>
            <button className="bot-option" onClick={() => setContent('contact')}>Questions?</button>
            <button className="bot-option" onClick={() => setContent('policy')}>Other Policies</button>
          </>
        );
      case 'privacy':
        return (
          <>
            <p><strong>Data & Privacy:</strong></p>
            <p>We collect only what’s needed (name, email, biz details).</p>
            <p>No selling/sharing. Chatbot data private unless you say otherwise.</p>
            <button className="bot-option" onClick={() => setContent('contact')}>Questions?</button>
            <button className="bot-option" onClick={() => setContent('policy')}>Other Policies</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bot">
      <div className="bot-header">ConnectAi – Pick an Option</div>
      <div className="bot-content">{renderContent()}</div>
    </div>
  );
}

export default Bot;