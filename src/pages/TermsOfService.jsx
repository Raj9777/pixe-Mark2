import { Link } from 'react-router-dom';
import './Legal.css';

const LAST_UPDATED = 'July 6, 2025';
const EFFECTIVE = 'July 6, 2025';

export default function TermsOfService() {
  return (
    <div className="legal-wrap">
      {/* Hero */}
      <div className="legal-hero">
        <div className="section-pill">Legal</div>
        <h1>Terms of <span className="text-gradient">Service</span></h1>
        <p style={{ color: 'rgba(138,155,176,0.85)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '560px' }}>
          These Terms of Service govern your use of the PIXE website and the engagement of PIXE's
          services. Please read them carefully before proceeding.
        </p>
        <div className="legal-meta">
          <div className="legal-meta-item">📅 <strong>Last Updated:</strong> {LAST_UPDATED}</div>
          <div className="legal-meta-item">✅ <strong>Effective:</strong> {EFFECTIVE}</div>
          <div className="legal-meta-item">⚖️ <strong>Governing Law:</strong> India (Karnataka)</div>
        </div>
      </div>

      {/* Highlight */}
      <div className="legal-highlight" style={{ marginBottom: '48px' }}>
        By using this website or engaging PIXE's services, you agree to these Terms. If you do not
        agree, please do not use our website or services.
      </div>

      {/* TOC */}
      <div className="legal-toc glass">
        <h5>Table of Contents</h5>
        <ol>
          <li><a href="#ts-1">Definitions</a></li>
          <li><a href="#ts-2">Acceptance of Terms</a></li>
          <li><a href="#ts-3">Services Provided</a></li>
          <li><a href="#ts-4">Project Engagement & Contracts</a></li>
          <li><a href="#ts-5">Payment Terms</a></li>
          <li><a href="#ts-6">Intellectual Property</a></li>
          <li><a href="#ts-7">Client Obligations</a></li>
          <li><a href="#ts-8">Delivery & Timelines</a></li>
          <li><a href="#ts-9">Revisions & Scope Changes</a></li>
          <li><a href="#ts-10">Confidentiality</a></li>
          <li><a href="#ts-11">Warranties & Disclaimers</a></li>
          <li><a href="#ts-12">Limitation of Liability</a></li>
          <li><a href="#ts-13">Termination</a></li>
          <li><a href="#ts-14">Post-Launch Support</a></li>
          <li><a href="#ts-15">Governing Law & Disputes</a></li>
          <li><a href="#ts-16">Changes to Terms</a></li>
          <li><a href="#ts-17">Contact</a></li>
        </ol>
      </div>

      <div className="legal-body">

        <div className="legal-section" id="ts-1">
          <h2><span className="sec-num">01</span> Definitions</h2>
          <p>In these Terms, the following definitions apply:</p>
          <ul>
            <li><strong>"PIXE," "we," "us," "our"</strong> — the solo digital agency operating under the brand name PIXE.</li>
            <li><strong>"Client," "you," "your"</strong> — any individual, company, or organisation that engages PIXE for services or uses this website.</li>
            <li><strong>"Project"</strong> — the specific scope of work agreed between PIXE and the Client, as defined in a written proposal or Statement of Work (SOW).</li>
            <li><strong>"Deliverables"</strong> — all work products created by PIXE as part of the Project, including code, designs, documents, and other outputs.</li>
            <li><strong>"Services"</strong> — custom software development, web design and development, mobile app development, UI/UX design, API development, and related digital services offered by PIXE.</li>
            <li><strong>"Website"</strong> — the PIXE website accessible at pixe.dev and associated subdomains.</li>
          </ul>
        </div>

        <div className="legal-section" id="ts-2">
          <h2><span className="sec-num">02</span> Acceptance of Terms</h2>
          <p>
            By accessing this Website, submitting an enquiry, or entering into a service engagement
            with PIXE, you confirm that you have read, understood, and agree to be bound by these Terms
            of Service, along with our <Link to="/privacy">Privacy Policy</Link> and <Link to="/cookies">Cookie Policy</Link>,
            which are incorporated herein by reference.
          </p>
          <p>
            If you are entering these Terms on behalf of a company or other legal entity, you represent
            that you have the authority to bind that entity to these Terms.
          </p>
        </div>

        <div className="legal-section" id="ts-3">
          <h2><span className="sec-num">03</span> Services Provided</h2>
          <p>PIXE offers the following professional digital services:</p>
          <ul>
            <li>Custom software development (web and desktop applications)</li>
            <li>Website design and development</li>
            <li>Mobile application development (iOS and Android via React Native)</li>
            <li>UI/UX design and prototyping</li>
            <li>API development and third-party integrations</li>
            <li>Performance optimisation and technical audits</li>
          </ul>
          <p>
            All services are subject to availability and PIXE's capacity at the time of enquiry. PIXE
            reserves the right to decline any project at its sole discretion.
          </p>
        </div>

        <div className="legal-section" id="ts-4">
          <h2><span className="sec-num">04</span> Project Engagement & Contracts</h2>
          <h3>4.1 How Projects Begin</h3>
          <p>
            A service engagement begins when both parties have agreed in writing to a Proposal or
            Statement of Work (SOW) that outlines the scope, deliverables, timeline, and pricing. No
            work will commence without such written agreement.
          </p>
          <h3>4.2 Binding Agreement</h3>
          <p>
            A project-specific agreement (Proposal, SOW, or contract) signed or accepted by both
            parties shall take precedence over these General Terms where there is any conflict.
          </p>
          <h3>4.3 Discovery Calls</h3>
          <p>
            Initial discovery calls are offered free of charge and without obligation. A discovery call
            does not constitute a binding agreement to engage PIXE's services.
          </p>
        </div>

        <div className="legal-section" id="ts-5">
          <h2><span className="sec-num">05</span> Payment Terms</h2>
          <h3>5.1 Pricing</h3>
          <p>
            All prices are stated in the project Proposal. Prices are quoted in either Indian Rupees
            (INR) or US Dollars (USD) as agreed. Starting prices are indicative; final pricing is
            determined by project scope.
          </p>
          <h3>5.2 Payment Schedule</h3>
          <p>Unless otherwise agreed in the Proposal, the standard payment structure is:</p>
          <ul>
            <li><strong>50% deposit</strong> — due before project commencement</li>
            <li><strong>25% milestone payment</strong> — due at project midpoint / design approval</li>
            <li><strong>25% final payment</strong> — due upon delivery of final Deliverables</li>
          </ul>
          <h3>5.3 Late Payments</h3>
          <p>
            Invoices are due within <strong>7 days</strong> of issue. Overdue invoices may attract a
            late payment fee of 1.5% per month on the outstanding balance. PIXE reserves the right to
            pause work on overdue accounts.
          </p>
          <h3>5.4 Refunds</h3>
          <p>
            Deposits are non-refundable once work has commenced, as they compensate PIXE for time
            reserved and work begun. If PIXE fails to deliver the agreed scope, a partial or full
            refund may be negotiated in good faith.
          </p>
          <h3>5.5 Taxes</h3>
          <p>
            All fees are exclusive of applicable taxes. Indian clients are subject to GST as applicable.
            International clients are responsible for any taxes applicable in their jurisdiction.
          </p>
        </div>

        <div className="legal-section" id="ts-6">
          <h2><span className="sec-num">06</span> Intellectual Property</h2>
          <h3>6.1 Ownership Upon Full Payment</h3>
          <p>
            Upon receipt of full and final payment, PIXE assigns to the Client all intellectual property
            rights in the custom Deliverables created specifically for that Client's project, including
            source code, designs, and documentation.
          </p>
          <h3>6.2 Third-Party Components</h3>
          <p>
            Deliverables may incorporate open-source libraries, frameworks, stock assets, or other
            third-party components. These remain subject to their respective licenses. PIXE will
            disclose the use of any significant third-party components.
          </p>
          <h3>6.3 PIXE's Retained Rights</h3>
          <p>
            PIXE retains the right to display completed work in its portfolio and case studies, and to
            use general methodologies, techniques, and know-how developed during the project.
            Client-specific confidential information will not be disclosed without permission.
          </p>
          <h3>6.4 Rights Before Full Payment</h3>
          <p>
            Until full payment is received, all Deliverables remain the intellectual property of PIXE.
            Partial use of Deliverables before final payment requires written consent from PIXE.
          </p>
          <h3>6.5 Portfolio Usage</h3>
          <p>
            Unless otherwise agreed in writing, PIXE reserves the right to feature the completed
            project (including screenshots and descriptions) in its portfolio and marketing materials.
            The Client may request removal of specific details if needed.
          </p>
        </div>

        <div className="legal-section" id="ts-7">
          <h2><span className="sec-num">07</span> Client Obligations</h2>
          <p>The Client agrees to:</p>
          <ul>
            <li>Provide clear, accurate, and timely project requirements, content, assets, and feedback</li>
            <li>Designate a single point of contact for project communication</li>
            <li>Respond to queries and review requests within <strong>5 business days</strong></li>
            <li>Grant PIXE access to required systems, accounts, or platforms necessary for the project</li>
            <li>Ensure all content and materials provided are owned or licensed by the Client and do not infringe third-party rights</li>
            <li>Make payments according to the agreed schedule</li>
          </ul>
          <div className="legal-warning">
            Project delays caused by the Client (e.g., late feedback, delayed approvals, or failure to
            provide required assets) may result in revised timelines and potentially additional costs,
            which will be communicated in advance.
          </div>
        </div>

        <div className="legal-section" id="ts-8">
          <h2><span className="sec-num">08</span> Delivery & Timelines</h2>
          <p>
            PIXE commits to meeting the timelines agreed in the project Proposal. Timelines are
            contingent on the Client fulfilling their obligations (Section 7). PIXE will notify the
            Client promptly if any circumstances outside our control may affect delivery.
          </p>
          <p>
            Time estimates are professional assessments. PIXE will communicate proactively if a
            delivery date needs to be revised, and will work collaboratively to minimise any impact.
          </p>
        </div>

        <div className="legal-section" id="ts-9">
          <h2><span className="sec-num">09</span> Revisions & Scope Changes</h2>
          <h3>9.1 Included Revisions</h3>
          <p>
            Each project proposal specifies the number of revision rounds included. Standard projects
            include <strong>2 rounds of revisions</strong> per major deliverable unless otherwise stated.
          </p>
          <h3>9.2 Scope Changes</h3>
          <p>
            Any request that materially changes the agreed project scope (a "change request") will be
            assessed separately. PIXE will provide a written estimate of the additional time and cost
            before proceeding. Work on scope changes only begins upon written approval.
          </p>
          <h3>9.3 Additional Revisions</h3>
          <p>
            Revisions beyond the included rounds will be charged at PIXE's current hourly rate of
            <strong> ₹2,500/hour (or $35/hour for international clients)</strong>, agreed before work begins.
          </p>
        </div>

        <div className="legal-section" id="ts-10">
          <h2><span className="sec-num">10</span> Confidentiality</h2>
          <p>
            Both parties agree to keep confidential any proprietary or sensitive information shared
            during the project engagement. This includes business data, trade secrets, technical
            specifications, and client relationships.
          </p>
          <p>
            PIXE is willing to sign a mutual Non-Disclosure Agreement (NDA) before any sensitive
            project details are shared, upon request.
          </p>
          <p>
            Confidentiality obligations survive termination of the engagement for a period of
            <strong> 3 years</strong>.
          </p>
        </div>

        <div className="legal-section" id="ts-11">
          <h2><span className="sec-num">11</span> Warranties & Disclaimers</h2>
          <h3>11.1 PIXE Warranties</h3>
          <p>PIXE warrants that:</p>
          <ul>
            <li>All services will be performed with reasonable skill and care</li>
            <li>Deliverables will substantially conform to the agreed specifications</li>
            <li>PIXE has the right to enter into the project agreement and perform the services</li>
          </ul>
          <h3>11.2 Website Disclaimer</h3>
          <p>
            This Website and its content are provided "as is" without warranty of any kind. PIXE does
            not warrant that the Website will be uninterrupted, error-free, or free of viruses.
          </p>
          <h3>11.3 No Guarantee of Results</h3>
          <p>
            While PIXE strives to build high-quality, performant products, we cannot guarantee specific
            business outcomes (e.g., revenue growth, user acquisition) resulting from Deliverables, as
            these depend on many factors beyond our control.
          </p>
        </div>

        <div className="legal-section" id="ts-12">
          <h2><span className="sec-num">12</span> Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, PIXE's total liability to the Client for
            any claim arising from a project engagement shall not exceed the total fees paid by the
            Client to PIXE for that specific project.
          </p>
          <p>
            PIXE shall not be liable for any indirect, consequential, incidental, special, or punitive
            damages, including but not limited to loss of profits, loss of data, loss of business
            opportunity, or business interruption, even if advised of the possibility of such damages.
          </p>
          <div className="legal-highlight">
            Nothing in these Terms limits liability for fraud, gross negligence, or any liability that
            cannot be excluded by law.
          </div>
        </div>

        <div className="legal-section" id="ts-13">
          <h2><span className="sec-num">13</span> Termination</h2>
          <h3>13.1 Termination by Client</h3>
          <p>
            The Client may terminate a project engagement with <strong>14 days' written notice</strong>.
            Upon termination, the Client will pay for all work completed up to the termination date.
            The deposit is non-refundable.
          </p>
          <h3>13.2 Termination by PIXE</h3>
          <p>PIXE reserves the right to terminate an engagement with immediate effect if:</p>
          <ul>
            <li>The Client fails to make payment within 14 days of a due date</li>
            <li>The Client requests work that is illegal, unethical, or violates third-party rights</li>
            <li>The Client acts in an abusive or threatening manner toward PIXE</li>
          </ul>
          <h3>13.3 Effect of Termination</h3>
          <p>
            Upon termination, PIXE will deliver all completed work to the Client upon receipt of any
            outstanding payments. Intellectual property in incomplete work remains with PIXE until full
            payment for work completed is received.
          </p>
        </div>

        <div className="legal-section" id="ts-14">
          <h2><span className="sec-num">14</span> Post-Launch Support</h2>
          <p>
            All projects include <strong>30 days of complimentary post-launch support</strong> covering:
          </p>
          <ul>
            <li>Bug fixes for issues present in the delivered code (not caused by Client modifications)</li>
            <li>Minor adjustments to content or styling within the original scope</li>
            <li>Guidance on using the delivered product</li>
          </ul>
          <p>
            Support is provided during business hours (Monday–Friday, 10 AM–6 PM IST) via email.
            Response time: within 1 business day.
          </p>
          <p>
            After the 30-day period, ongoing support and maintenance is available under a separate
            retainer agreement at agreed rates.
          </p>
        </div>

        <div className="legal-section" id="ts-15">
          <h2><span className="sec-num">15</span> Governing Law & Disputes</h2>
          <p>
            These Terms and any dispute arising from them shall be governed by the laws of
            <strong> India</strong>, specifically the jurisdiction of <strong>Karnataka</strong>, without
            regard to conflict of law principles.
          </p>
          <p>
            In the event of a dispute, both parties agree to first attempt resolution through good-faith
            negotiation. If negotiation fails, disputes shall be submitted to binding arbitration under
            the Arbitration and Conciliation Act, 1996, with the seat of arbitration in Bengaluru, India.
          </p>
          <p>
            For international clients, PIXE is open to discussing alternative dispute resolution mechanisms.
          </p>
        </div>

        <div className="legal-section" id="ts-16">
          <h2><span className="sec-num">16</span> Changes to These Terms</h2>
          <p>
            PIXE reserves the right to update these Terms of Service at any time. The updated version
            will be posted on this page with a revised "Last Updated" date. Continued use of the
            Website or services after such changes constitutes acceptance of the updated Terms.
          </p>
          <p>
            For active project engagements, changes to these Terms will not apply retroactively.
          </p>
        </div>

        <div className="legal-section" id="ts-17">
          <h2><span className="sec-num">17</span> Contact</h2>
          <p>For any questions regarding these Terms of Service, please contact:</p>
          <div className="legal-contact-card glass">
            <div className="legal-contact-icon">⚖️</div>
            <div>
              <h4>PIXE — Legal Enquiries</h4>
              <p>
                Email: <a href="mailto:hello@pixe.dev">hello@pixe.dev</a><br />
                We will respond to all legal queries within <strong>5 business days</strong>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
