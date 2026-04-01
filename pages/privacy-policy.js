import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Managerless</title>
        <meta name="description" content="Privacy Policy for Managerless - Learn how we protect and handle your data." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      
      <div style={{ background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)', padding: '3rem 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Privacy Policy</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>How we protect and handle your information</p>
        </div>
      </div>

      <section className="legal-page">
        <div className="container">
          <div className="legal-content">
            <h1>Privacy Policy</h1>
            <p className="last-updated">Effective date: January 20, 2026</p>

            <p>
              Managerless respects your privacy. This policy explains what information we collect, how it is used, and the choices you have.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect information you choose to provide, including:</p>
            <ul>
              <li>Your name and email address</li>
              <li>Account details you submit when signing up</li>
              <li>Messages, brand communications, and deal-related information you connect to the platform</li>
              <li>Analytics and usage data related to how you use Managerless</li>
            </ul>
            <p>
              We also collect limited technical information such as device type, browser, and usage patterns to improve performance and reliability.
            </p>

            <h2>How We Use Your Information</h2>
            <p>Your information is used to:</p>
            <ul>
              <li>Operate and improve the Managerless platform</li>
              <li>Manage emails, deals, tasks, pitches, and analytics on your behalf</li>
              <li>Provide customer support and account communication</li>
              <li>Maintain platform security and performance</li>
            </ul>
            <p>We do not sell your personal information.</p>

            <h2>Email and Third-Party Integrations</h2>
            <p>
              If you connect third-party services such as email or analytics tools, Managerless only accesses the information required to provide the requested functionality.
            </p>
            <p>
              Access is limited, scoped, and used solely to deliver the service you enable.
            </p>

            <h2>Data Storage and Security</h2>
            <p>
              We take reasonable measures to protect your information using industry-standard security practices.
            </p>
            <p>
              While no system is entirely risk-free, we design Managerless with privacy and discretion as core principles.
            </p>

            <h2>Data Sharing</h2>
            <p>We do not share your personal data with third parties except when:</p>
            <ul>
              <li>Required to operate essential services (such as hosting or analytics providers)</li>
              <li>Necessary to comply with legal obligations</li>
              <li>You explicitly authorize access</li>
            </ul>
            <p>Any service providers we use are required to protect your data.</p>

            <h2>Your Choices</h2>
            <p>You may:</p>
            <ul>
              <li>Access or update your account information</li>
              <li>Disconnect integrations at any time</li>
              <li>Request deletion of your account and associated data</li>
            </ul>
            <p>Requests can be made by contacting us at the email below.</p>

            <h2>Cookies</h2>
            <p>
              Managerless may use minimal cookies or similar technologies to support functionality and understand usage patterns. These are used for performance and experience, not advertising.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this policy as Managerless evolves. Any changes will be reflected on this page with an updated effective date.
            </p>

            <h2>Contact</h2>
            <p>
              If you have questions about this policy or your data, contact us at:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:hello@managerless.app">hello@managerless.app</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

