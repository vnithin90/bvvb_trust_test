'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <div className="legal-header">
        <Link href="/" className="legal-back-btn">← Back to Home</Link>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last Updated: March 15, 2026</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            Brahmashri Valiveru VenkataRama Bhotulu Trust ("the Trust", "we", "us", or "our") is committed to
            protecting the privacy and personal information of our donors, volunteers, beneficiaries, and website
            visitors. This Privacy Policy explains how we collect, use, store, and protect your personal information
            when you interact with our website and services.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Information</h3>
          <p>We may collect the following personal information when you voluntarily provide it:</p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Postal address</li>
            <li>Donation amounts and payment details</li>
            <li>Messages or inquiries submitted through our contact form</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website address</li>
            <li>Device information (desktop, mobile, tablet)</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information collected for the following purposes:</p>
          <ul>
            <li>Processing and acknowledging donations</li>
            <li>Issuing 80G tax exemption certificates</li>
            <li>Communicating about Trust activities, events, and programs</li>
            <li>Responding to your inquiries and messages</li>
            <li>Managing volunteer registrations</li>
            <li>Sending newsletters (only with your consent)</li>
            <li>Improving our website and services</li>
            <li>Complying with legal and regulatory requirements</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Data Protection & Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul>
            <li>Secure payment gateways for online donations</li>
            <li>Restricted access to personal data on a need-to-know basis</li>
            <li>Regular review of data collection, storage, and processing practices</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Sharing of Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your
            information only in the following circumstances:
          </p>
          <ul>
            <li>With payment processors to complete donation transactions</li>
            <li>With government authorities as required by law (e.g., Income Tax filings, FCRA compliance)</li>
            <li>With service providers who assist in operating our website, subject to confidentiality agreements</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. Cookies are small text files stored
            on your device. You can choose to disable cookies through your browser settings, though some features
            of the website may not function properly without them.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete data</li>
            <li>Request deletion of your personal data (subject to legal obligations)</li>
            <li>Opt out of receiving newsletters or promotional communications</li>
            <li>Withdraw consent for data processing at any time</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>8. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined
            in this policy or as required by applicable laws. Donation records are maintained as per the
            requirements of the Income Tax Act, 1961 and other applicable regulations.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to external websites. We are not responsible for the privacy practices
            or content of third-party sites. We encourage you to review the privacy policies of any external
            websites you visit.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Children's Privacy</h2>
          <p>
            Our website is not directed at children under the age of 18. We do not knowingly collect personal
            information from minors. If we become aware that a child has provided us with personal information,
            we will take steps to delete such information.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with
            an updated revision date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
          <div className="legal-contact">
            <p><strong>Brahmashri Valiveru VenkataRama Bhotulu Trust</strong></p>
            <p>Door No. 14/65, Kamala Nagar, Beside Raghuveera Towers,</p>
            <p>Ananthapuramu, Andhra Pradesh - 515001</p>
            <p>Email: bvvb.trust@outlook.com</p>
            <p>Phone: +91 93913 33770</p>
          </div>
        </section>
      </div>
    </main>
  );
}
