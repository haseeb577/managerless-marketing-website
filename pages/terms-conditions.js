import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TermsConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Managerless</title>
        <meta name="description" content="Terms and Conditions for Managerless - Read our terms of service." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      
      <div style={{ background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)', padding: '3rem 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Terms of Service</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>The rules and guidelines for using Managerless</p>
        </div>
      </div>

      <section className="legal-page">
        <div className="container">
          <div className="legal-content">
            <h1>Managerless Terms of Service</h1>
            <p className="last-updated">Last updated: January 2026</p>

            <p>
              Welcome to Managerless. By accessing or using our website or services, you agree to these Terms of Service. Please read them carefully.
            </p>

            <h2>1. Overview</h2>
            <p>
              Managerless is an AI powered creator tool that helps users manage brand emails, pitches, analytics, and general creator workflow tasks.
            </p>

            <h2>2. Eligibility</h2>
            <p>
              You must be at least 13 years old to use Managerless. If you are under the legal age in your region, you must have permission from a parent or guardian.
            </p>

            <h2>3. Use of the Service</h2>
            <p>
              You agree not to misuse Managerless including attempting to access systems without authorization, reverse engineering, scraping, or interfering with service functionality.
            </p>

            <h2>4. User Content</h2>
            <p>
              You are responsible for any content or data you submit including emails, brand names, account analytics, and custom inputs. By submitting data, you grant Managerless permission to process it for the purpose of providing the service.
            </p>

            <h2>5. AI Generated Outputs</h2>
            <p>
              Managerless provides AI generated suggestions. These outputs are not guaranteed to be accurate or legally binding, and users should review all content before use.
            </p>

            <h2>6. Privacy</h2>
            <p>
              Please review our Privacy Policy to understand how your information is collected and used.
            </p>

            <h2>7. Payments and Subscriptions</h2>
            <p>
              If you subscribe to a paid plan, you authorize Managerless to charge your payment method. Subscriptions renew automatically unless canceled.
            </p>

            <h2>8. Termination</h2>
            <p>
              We may suspend or terminate your account if you violate these terms or misuse the platform.
            </p>

            <h2>9. Disclaimer</h2>
            <p>
              Managerless is provided &quot;as is&quot; without warranties of any kind. We are not responsible for financial loss, missed opportunities, or any damages resulting from use of the platform.
            </p>

            <h2>10. Changes</h2>
            <p>
              We may update these Terms occasionally. Continued use of the platform indicates acceptance of the updated terms.
            </p>

            <h2>11. Contact</h2>
            <p>
              For questions about these Terms, contact us at:
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

