import { Link } from 'react-router-dom';
import './Legal.css';

const LAST_UPDATED = 'July 6, 2025';
const EFFECTIVE = 'July 6, 2025';

export default function CookiePolicy() {
  return (
    <div className="legal-wrap">
      {/* Hero */}
      <div className="legal-hero">
        <div className="section-pill">Legal</div>
        <h1>Cookie <span className="text-gradient">Policy</span></h1>
        <p style={{ color: 'rgba(138,155,176,0.85)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '560px' }}>
          This Cookie Policy explains how PIXE uses cookies and similar tracking technologies when you
          visit our website.
        </p>
        <div className="legal-meta">
          <div className="legal-meta-item">📅 <strong>Last Updated:</strong> {LAST_UPDATED}</div>
          <div className="legal-meta-item">✅ <strong>Effective:</strong> {EFFECTIVE}</div>
          <div className="legal-meta-item">⚖️ <strong>Governing Law:</strong> India (IT Act 2000) · GDPR (EU)</div>
        </div>
      </div>

      {/* TOC */}
      <div className="legal-toc glass">
        <h5>Table of Contents</h5>
        <ol>
          <li><a href="#cp-sec-1">What Are Cookies?</a></li>
          <li><a href="#cp-sec-2">How We Use Cookies</a></li>
          <li><a href="#cp-sec-3">Types of Cookies We Use</a></li>
          <li><a href="#cp-sec-4">Third-Party Cookies</a></li>
          <li><a href="#cp-sec-5">Managing and Disabling Cookies</a></li>
          <li><a href="#cp-sec-6">Other Tracking Technologies</a></li>
          <li><a href="#cp-sec-7">Changes to This Policy</a></li>
          <li><a href="#cp-sec-8">Contact Us</a></li>
        </ol>
      </div>

      <div className="legal-body">
        <div className="legal-section" id="cp-sec-1">
          <h2><span className="sec-num">01</span> What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your browser or the hard drive of your device
            (computer, smartphone, tablet) when you visit a website. They allow the website to recognize
            your device and store information about your preferences or past actions.
          </p>
          <p>
            Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device
            for a set period or until you delete them. Session cookies are temporary and are deleted
            automatically when you close your web browser.
          </p>
        </div>

        <div className="legal-section" id="cp-sec-2">
          <h2><span className="sec-num">02</span> How We Use Cookies</h2>
          <p>
            PIXE uses cookies to improve your browsing experience, analyze website traffic, and remember your
            preferences. Specifically, we use cookies to:
          </p>
          <ul>
            <li>Enable basic functions of the website, such as page navigation and secure area access.</li>
            <li>Understand how visitors interact with our website by gathering anonymous analytics data.</li>
            <li>Store your preferences, such as selected currency or language settings.</li>
            <li>Optimize site performance and loading speeds.</li>
          </ul>
        </div>

        <div className="legal-section" id="cp-sec-3">
          <h2><span className="sec-num">03</span> Types of Cookies We Use</h2>
          <p>We classify our cookies into the following categories:</p>

          <h3>3.1 Strictly Necessary Cookies</h3>
          <p>
            These cookies are essential for the website to function properly and cannot be switched off in our
            systems. They are usually set in response to actions made by you, such as setting your privacy
            preferences, logging in, or filling in forms.
          </p>

          <h3>3.2 Analytical/Performance Cookies</h3>
          <p>
            These cookies allow us to count visits and traffic sources so we can measure and improve the performance
            of our site. They help us know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous.
          </p>

          <h3>3.3 Functionality Cookies</h3>
          <p>
            These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, some or all of these services may not function properly.
          </p>

          <table className="legal-table">
            <thead>
              <tr><th>Cookie Name</th><th>Type</th><th>Provider</th><th>Purpose</th><th>Duration</th></tr>
            </thead>
            <tbody>
              <tr><td>_ga</td><td>Analytics</td><td>Google</td><td>Distinguishes unique users for analytics.</td><td>2 years</td></tr>
              <tr><td>_gid</td><td>Analytics</td><td>Google</td><td>Distinguishes unique users for analytics.</td><td>24 hours</td></tr>
              <tr><td>_gat</td><td>Analytics</td><td>Google</td><td>Used to throttle request rate.</td><td>1 minute</td></tr>
              <tr><td>pixe_pref</td><td>Functionality</td><td>PIXE</td><td>Remembers user preferences like currency.</td><td>1 year</td></tr>
            </tbody>
          </table>
        </div>

        <div className="legal-section" id="cp-sec-4">
          <h2><span className="sec-num">04</span> Third-Party Cookies</h2>
          <p>
            In addition to our first-party cookies, we may also permit third-party services to set cookies on your
            device. This primarily includes:
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> To help us track page performance, user behavior, and source channels. Google's privacy policy can be found at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">google.com/privacy</a>.</li>
            <li><strong>Stripe / Razorpay:</strong> Third-party payment gateways set functional cookies to ensure secure payment processing during invoices.</li>
          </ul>
        </div>

        <div className="legal-section" id="cp-sec-5">
          <h2><span className="sec-num">05</span> Managing and Disabling Cookies</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences
            in several ways:
          </p>
          <h3>5.1 Browser Settings</h3>
          <p>
            You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies,
            you may still use our website, though your access to some functionality and areas of our website may be restricted. Browser controls vary, so you should visit your browser's help menu for more information:
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>
        </div>

        <div className="legal-section" id="cp-sec-6">
          <h2><span className="sec-num">06</span> Other Tracking Technologies</h2>
          <p>
            We may occasionally use other technologies like web beacons (sometimes called "tracking pixels" or "clear gifs") to track visitors. These are tiny graphic files that contain a unique identifier that enable us to recognize when someone has visited our website. This allows us to monitor traffic patterns of users, deliver or communicate with cookies, and improve site performance.
          </p>
        </div>

        <div className="legal-section" id="cp-sec-7">
          <h2><span className="sec-num">07</span> Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>
        </div>

        <div className="legal-section" id="cp-sec-8">
          <h2><span className="sec-num">08</span> Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please email us:
          </p>
          <div className="legal-contact-card glass">
            <div className="legal-contact-icon">🍪</div>
            <div>
              <h4>PIXE — Cookie Inquiry</h4>
              <p>
                Email: <a href="mailto:raj@pixe.in">raj@pixe.in</a><br />
                We will respond to cookie inquiries within <strong>30 days</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
