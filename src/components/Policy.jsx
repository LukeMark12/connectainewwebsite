import React from 'react';
import { Link } from 'react-router-dom';

function PolicyPage() {
  return (
    <section className="policy-page">
      <h2>ConnectAi Policy</h2>
      <p>Clear, flexible, supportive—built for Helsinki businesses.</p>
      
      <h3>Pricing</h3>
      <p>
        Chatbots: $100/month ($50 first month for the first 10 clients). <br />
        Videos: $300-$1,500/month (10% off first month for the first 10 clients). <br />
        Websites: $200 one-time fee, or free with a 3-month subscription to chatbot and video services.
      </p>

      <h3>No Lock-In</h3>
      <p>
        We operate on a month-to-month basis. You can cancel anytime with 7 days’ notice—simply email Luke or Snoopy at support@connectai.com.
      </p>

      <h3>Full Support</h3>
      <p>
        We provide full support for setup, tweaks, and fixes. Contact Luke & Snoopy via phone, email, or Facebook. We guarantee fast delivery and ongoing support for all services.
      </p>

      <h3>Refunds</h3>
      <p>
        First month is fully refundable within 7 days if the service is undelivered. No refunds after the first month—just cancel your subscription. The website fee ($200) is non-refundable once the site is live.
      </p>

      <h3>Data & Privacy</h3>
      <p>
        We collect only what’s necessary: your name, email, and business details. We do not sell or share your data with third parties. Chatbot data remains private unless you explicitly authorize sharing.
      </p>

      <h3>Service Delivery</h3>
      <p>
        Websites are delivered within 48 hours of payment. Chatbots and video services are set up within 72 hours. Delays due to client feedback or revisions may extend timelines—Luke or Snoopy will keep you updated.
      </p>

      <h3>Contact Us</h3>
      <p>
        For any policy-related questions, reach out to Luke or Snoopy at support@connectai.com or via phone at +358 123 456 789.
      </p>

      <Link to="/" className="cta">Back to Home</Link>
    </section>
  );
}

export default PolicyPage;