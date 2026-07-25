import { Link } from 'react-router-dom';
import './Legal.css';

const LAST_UPDATED = 'July 6, 2025';
const EFFECTIVE = 'July 6, 2025';

export default function PrivacyPolicy() {
  return (
    <div className="legal-wrap">
      {/* Hero */}
      <div className="legal-hero">
        <div className="section-pill">Legal</div>
        <h1>Privacy <span className="text-gradient">Policy</span></h1>
        <p style={{ color: 'rgba(138,155,176,0.85)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '560px' }}>
          At PIXE, we take your privacy seriously. This policy explains clearly what data we collect,
          why we collect it, and exactly how it is used — in plain language.
        </p>
        <div className="legal-meta">
          <div className="legal-meta-item">📅 <strong>Last Updated:</strong> {LAST_UPDATED}</div>
          <div className="legal-meta-item">✅ <strong>Effective:</strong> {EFFECTIVE}</div>
          <div className="legal-meta-item">⚖️ <strong>Governing Law:</strong> Indian IT Act 2000 · GDPR (EU)</div>
        </div>
      </div>

      {/* TOC */}
      <div className="legal-toc glass">
        <h5>Table of Contents</h5>
        <ol>
          <li><a href="#pp-1">Who We Are</a></li>
          <li><a href="#pp-2">Information We Collect</a></li>
          <li><a href="#pp-3">How We Use Your Information</a></li>
          <li><a href="#pp-4">Legal Basis for Processing (GDPR)</a></li>
          <li><a href="#pp-5">Data Sharing & Third Parties</a></li>
          <li><a href="#pp-6">Cookies & Tracking</a></li>
          <li><a href="#pp-7">Data Retention</a></li>
          <li><a href="#pp-8">Your Rights</a></li>
          <li><a href="#pp-9">Data Security</a></li>
          <li><a href="#pp-10">International Transfers</a></li>
          <li><a href="#pp-11">Children's Privacy</a></li>
          <li><a href="#pp-12">Changes to This Policy</a></li>
          <li><a href="#pp-13">Contact Us</a></li>
        </ol>
      </div>

      {/* Body */}
      <div className="legal-body">

        <div className="legal-section" id="pp-1">
          <h2><span className="sec-num">01</span> Who We Are</h2>
          <p>
            <strong>PIXE</strong> is a solo digital agency operated by an individual consultant providing
            custom software development, web design, mobile application development, and UI/UX design
            services. PIXE operates globally and serves clients in India and internationally.
          </p>
          <p>
            For the purposes of data protection law, PIXE is the <strong>data controller</strong> — meaning
            we decide what personal data is collected and how it is processed.
          </p>
          <div className="legal-highlight">
            <strong>Data Controller:</strong> PIXE (Solo Agency)<br />
            <strong>Email:</strong> <a href="mailto:raj@pixelexcellence.online">raj@pixelexcellence.online</a><br />
            <strong>Jurisdiction:</strong> India (with global clientele)
          </div>
        </div>

        <div className="legal-section" id="pp-2">
          <h2><span className="sec-num">02</span> Information We Collect</h2>
          <h3>2.1 Information You Provide Directly</h3>
          <p>When you interact with PIXE through our website, contact forms, or booking system, we may collect:</p>
          <ul>
            <li><strong>Identity Data:</strong> Full name, company name, job title</li>
            <li><strong>Contact Data:</strong> Email address, phone number (including WhatsApp)</li>
            <li><strong>Project Data:</strong> Project briefs, requirements, budget range, reference URLs</li>
            <li><strong>Scheduling Data:</strong> Preferred call dates, times, and timezone</li>
            <li><strong>Communications:</strong> Any messages sent via contact forms or email</li>
          </ul>

          <h3>2.2 Information Collected Automatically</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li><strong>Technical Data:</strong> IP address, browser type and version, operating system, device type</li>
            <li><strong>Usage Data:</strong> Pages visited, time on site, referring URLs, click paths</li>
            <li><strong>Cookie Data:</strong> Session identifiers and preference cookies (see Section 6)</li>
          </ul>

          <h3>2.3 Information We Do NOT Collect</h3>
          <p>PIXE does <strong>not</strong> collect or store:</p>
          <ul>
            <li>Payment card numbers or banking details (payments are handled by third-party processors)</li>
            <li>Sensitive personal data (health, ethnicity, political or religious views)</li>
            <li>Social media passwords or private account credentials</li>
          </ul>
        </div>

        <div className="legal-section" id="pp-3">
          <h2><span className="sec-num">03</span> How We Use Your Information</h2>
          <p>We use your personal data only for the following purposes:</p>
          <table className="legal-table">
            <thead>
              <tr><th>Purpose</th><th>Data Used</th><th>Legal Basis</th></tr>
            </thead>
            <tbody>
              <tr><td>Responding to enquiries and project briefs</td><td>Identity, Contact, Project</td><td>Legitimate Interest / Contract</td></tr>
              <tr><td>Scheduling discovery calls</td><td>Identity, Contact, Scheduling</td><td>Contract performance</td></tr>
              <tr><td>Sending project quotes and proposals</td><td>Identity, Contact, Project</td><td>Contract performance</td></tr>
              <tr><td>Managing ongoing project communication</td><td>Identity, Contact, Communications</td><td>Contract performance</td></tr>
              <tr><td>Improving our website and services</td><td>Technical, Usage</td><td>Legitimate Interest</td></tr>
              <tr><td>Legal compliance and record-keeping</td><td>All relevant data</td><td>Legal Obligation</td></tr>
            </tbody>
          </table>
          <div className="legal-highlight">
            We will <strong>never</strong> sell, rent, or trade your personal data to third parties for
            their own marketing purposes.
          </div>
        </div>

        <div className="legal-section" id="pp-4">
          <h2><span className="sec-num">04</span> Legal Basis for Processing (GDPR)</h2>
          <p>If you are located in the European Economic Area (EEA) or UK, we process your personal data under the following legal bases:</p>
          <ul>
            <li><strong>Contract:</strong> Processing is necessary to perform or prepare a contract with you (e.g., delivering a project).</li>
            <li><strong>Legitimate Interests:</strong> We process data where we have a legitimate business interest that does not override your rights (e.g., responding to enquiries, improving our services).</li>
            <li><strong>Legal Obligation:</strong> Where we are required to process data to comply with applicable law (e.g., tax records).</li>
            <li><strong>Consent:</strong> Where we ask for your specific consent before processing (e.g., marketing emails). You may withdraw consent at any time.</li>
          </ul>
        </div>

        <div className="legal-section" id="pp-5">
          <h2><span className="sec-num">05</span> Data Sharing & Third Parties</h2>
          <p>
            PIXE does not share your personal data with third parties except in the following limited circumstances:
          </p>
          <h3>5.1 Service Providers</h3>
          <p>We use carefully selected third-party tools to operate our website and business. These processors only handle your data on our instructions:</p>
          <table className="legal-table">
            <thead>
              <tr><th>Provider</th><th>Purpose</th><th>Data Shared</th></tr>
            </thead>
            <tbody>
              <tr><td>Google Analytics</td><td>Website analytics</td><td>Anonymised usage data</td></tr>
              <tr><td>Email Provider (e.g., Gmail/Zoho)</td><td>Project communication</td><td>Identity, Contact, Communications</td></tr>
              <tr><td>Payment Processor (Razorpay / Stripe)</td><td>Invoice payments</td><td>Name, email, payment info (not stored by PIXE)</td></tr>
              <tr><td>Cloud Hosting (Vercel / AWS)</td><td>Website & project hosting</td><td>Technical data only</td></tr>
            </tbody>
          </table>
          <h3>5.2 Legal Requirements</h3>
          <p>
            We may disclose personal data if required by law, court order, or a governmental authority,
            or where necessary to protect the rights, property, or safety of PIXE, our clients, or others.
          </p>
        </div>

        <div className="legal-section" id="pp-6">
          <h2><span className="sec-num">06</span> Cookies & Tracking</h2>
          <p>
            Our website uses cookies to ensure it functions correctly and to help us understand how visitors
            use the site. For full details, please read our <Link to="/cookies">Cookie Policy</Link>.
          </p>
          <p>You can control cookie settings at any time through your browser settings. Disabling certain
          cookies may affect website functionality.</p>
        </div>

        <div className="legal-section" id="pp-7">
          <h2><span className="sec-num">07</span> Data Retention</h2>
          <p>We retain your personal data only for as long as necessary for the purposes described in this policy:</p>
          <ul>
            <li><strong>Enquiry / Contact data:</strong> 12 months from last contact (or until project commencement)</li>
            <li><strong>Active client project data:</strong> Duration of the project + 5 years (for legal/tax compliance)</li>
            <li><strong>Financial records:</strong> 7 years (as required by Indian tax law)</li>
            <li><strong>Analytics / technical data:</strong> 26 months (Google Analytics default)</li>
          </ul>
          <p>After the relevant retention period, your data is securely deleted or anonymised.</p>
        </div>

        <div className="legal-section" id="pp-8">
          <h2><span className="sec-num">08</span> Your Rights</h2>
          <p>Depending on your location, you have the following rights regarding your personal data:</p>
          <h3>Rights Under GDPR (EEA / UK Residents)</h3>
          <ul>
            <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten") in certain circumstances.</li>
            <li><strong>Right to Restriction:</strong> Request that we restrict processing of your data in certain circumstances.</li>
            <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format.</li>
            <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or for direct marketing purposes.</li>
            <li><strong>Right to withdraw consent:</strong> Where processing is based on consent, you may withdraw it at any time.</li>
          </ul>
          <h3>Rights Under the Indian IT Act</h3>
          <ul>
            <li>Right to review and correct your sensitive personal data or information.</li>
            <li>Right to withdraw consent for data collection and processing.</li>
          </ul>
          <div className="legal-highlight">
            To exercise any of these rights, contact us at <a href="mailto:raj@pixelexcellence.online">raj@pixelexcellence.online</a>.
            We will respond within <strong>30 days</strong>.
          </div>
        </div>

        <div className="legal-section" id="pp-9">
          <h2><span className="sec-num">09</span> Data Security</h2>
          <p>
            PIXE implements appropriate technical and organisational security measures to protect your
            personal data against accidental loss, unauthorised access, disclosure, alteration, or destruction.
          </p>
          <p>These measures include:</p>
          <ul>
            <li>HTTPS/TLS encryption for all data transmitted to and from this website</li>
            <li>Access controls limiting who can view personal data</li>
            <li>Regular security reviews of tools and processes</li>
            <li>Use of reputable, security-certified cloud providers</li>
          </ul>
          <div className="legal-warning">
            No method of electronic transmission or storage is 100% secure. While we strive to protect
            your data, we cannot guarantee absolute security. In the event of a data breach affecting
            your rights, we will notify you and relevant authorities as required by law.
          </div>
        </div>

        <div className="legal-section" id="pp-10">
          <h2><span className="sec-num">10</span> International Data Transfers</h2>
          <p>
            PIXE is based in India and serves clients globally. Your personal data may be processed in
            countries outside your own, including India, the United States (via cloud providers), and
            other countries where our service providers operate.
          </p>
          <p>
            Where data is transferred outside the EEA, we ensure appropriate safeguards are in place,
            including Standard Contractual Clauses (SCCs) with service providers as required by GDPR.
          </p>
        </div>

        <div className="legal-section" id="pp-11">
          <h2><span className="sec-num">11</span> Children's Privacy</h2>
          <p>
            PIXE's services are not directed to individuals under the age of 18. We do not knowingly
            collect personal data from children. If you believe we have inadvertently collected data
            from a minor, please contact us immediately at <a href="mailto:raj@pixelexcellence.online">raj@pixelexcellence.online</a> and
            we will delete it promptly.
          </p>
        </div>

        <div className="legal-section" id="pp-12">
          <h2><span className="sec-num">12</span> Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices,
            technology, legal requirements, or other factors. When we do, we will update the
            <strong> "Last Updated"</strong> date at the top of this page.
          </p>
          <p>
            For significant changes, we will notify active clients by email. We encourage you to review
            this policy periodically.
          </p>
        </div>

        <div className="legal-section" id="pp-13">
          <h2><span className="sec-num">13</span> Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data
            practices, please do not hesitate to contact us:
          </p>
          <div className="legal-contact-card glass">
            <div className="legal-contact-icon">✉️</div>
            <div>
              <h4>PIXE — Data Privacy</h4>
              <p>
                Email: <a href="mailto:raj@pixelexcellence.online">raj@pixelexcellence.online</a><br />
                Response time: Within 30 days of receipt<br />
                You also have the right to lodge a complaint with your local supervisory authority
                (e.g., the <strong>Information Commissioner's Office (ICO)</strong> in the UK,
                or <strong>MeitY</strong> in India).
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
