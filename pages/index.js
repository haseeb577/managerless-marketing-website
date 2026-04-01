import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  const [email, setEmail] = useState('')
  const featureRefs = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.feature-card, .step, .pricing-card')
    elements.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you! We'll be in touch soon at ${email}`)
    setEmail('')
  }

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <Head>
        <title>Managerless - Run Your Creator Business Without a Manager</title>
        <meta name="description" content="The platform that helps creators lock deals, negotiate rates, and grow their business. No manager, no middleman, just you." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Your Creator Homebase.
                <span className="highlight"> All in One Place.</span>
              </h1>
              <p className="hero-subtitle">
                Everything you need, all in one place. The business side of creating, handled. 
                Because your creativity deserves a real system.
              </p>
              <div className="hero-buttons">
                <a
                  href="https://www.managerlesscreator.app/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Free Trial
                </a>
                <a href="#how-it-works" className="btn btn-secondary" onClick={(e) => handleSmoothScroll(e, '#how-it-works')}>
                  See How It Works
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">$0</span>
                  <span className="stat-label">Manager Fees</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Your Control</span>
                </div>
                <div className="stat">
                  <span className="stat-number">Smart</span>
                  <span className="stat-label">Tools Built For You</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <div className="ai-glow"></div>
                <div className="hero-image-container">
                  <Image 
                    src="/assets/mm7R3WDmw6eB0ThhTWli8ka3QuA.avif" 
                    alt="Managerless Dashboard" 
                    width={600}
                    height={400}
                    className="hero-dashboard-image"
                    priority
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Create More. Manage Less.</h2>
            <p className="section-subtitle">Everything you need, all in one place. The business side of creating, handled.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Image src="/assets/email.png" alt="Email" width={80} height={80} unoptimized />
              </div>
              <h3 className="feature-title">All Your Emails in One Place</h3>
              <p className="feature-description">Stop switching between inboxes. See every brand email, partnership offer, and collaboration request in one spot.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Image src="/assets/Track Deal.png" alt="Track Deal" width={80} height={80} unoptimized />
              </div>
              <h3 className="feature-title">Track Every Deal</h3>
              <p className="feature-description">From that first DM to getting paid. See where every partnership stands and what needs your attention.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Image src="/assets/ai pitch.png" alt="Pitch Builder" width={80} height={80} unoptimized />
              </div>
              <h3 className="feature-title">Pitch Builder</h3>
              <p className="feature-description">Get help writing pitches that actually work. We suggest rates based on your actual engagement, not random numbers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Image src="/assets/negotiation.png" alt="Negotiation" width={80} height={80} unoptimized />
              </div>
              <h3 className="feature-title">Negotiation Help</h3>
              <p className="feature-description">Get suggestions on how to ask for more. Because you deserve to get paid what you're worth.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Image src="/assets/analytics-icon.png" alt="Analytics" width={80} height={80} unoptimized />
              </div>
              <h3 className="feature-title">See Your Numbers</h3>
              <p className="feature-description">All your analytics in one dashboard. Know what's working so you can do more of it.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Image src="/assets/never miss the deadline.png" alt="Deadline" width={80} height={80} unoptimized />
              </div>
              <h3 className="feature-title">Never Miss a Deadline</h3>
              <p className="feature-description">Keep track of what's due when. Set priorities and actually stay on top of your commitments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Three steps to running your business like a boss</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3 className="step-title">Connect Your Stuff</h3>
                <p className="step-description">Link your email and social accounts. Takes like 2 minutes and you're set.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3 className="step-title">Get Smart Suggestions</h3>
                <p className="step-description">We look at your engagement, niche, and what you're delivering to suggest rates and help with pitches.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3 className="step-title">Close Deals and Keep Growing</h3>
                <p className="step-description">Everything in one place. Negotiate with confidence, hit your deadlines, and actually scale your thing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Pricing That Actually Makes Sense</h2>
            <p className="section-subtitle">Pick what works for where you're at right now</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3 className="pricing-name">Founders Plan</h3>
              <div className="pricing-price">
                <span className="price-amount">$16.99</span>
                <span className="price-period">/month</span>
              </div>
              <p className="pricing-description">For creators who want to get organized, streamline their inbox, and start taking brand deals seriously.</p>
              <ul className="pricing-features">
                <li>✓ Unified inbox</li>
                <li>✓ Pitch builder + negotiation suggestions</li>
                <li>✓ Basic brand outreach</li>
                <li>✓ Deal tracking + reminders</li>
                <li>✓ One connected social platform</li>
                <li>✓ Basic analytics (views, engagement, reach)</li>
                <li>✓ Invoice + payment tracking</li>
              </ul>
            </div>
            <div className="pricing-card coming-soon">
              <div className="pricing-badge coming-soon-badge">Coming Soon</div>
              <h3 className="pricing-name">Starter Plan</h3>
              <div className="pricing-price">
                <span className="price-amount">$19.99</span>
                <span className="price-period">/month</span>
              </div>
              <p className="pricing-description">For creators beginning to land consistent deals who want a system to stay organized.</p>
              <ul className="pricing-features">
                <li>✓ Two connected social accounts</li>
                <li>✓ Auto-drafted emails</li>
                <li>✓ Creator rate estimator (based on niche + analytics)</li>
                <li>✓ More outreach actions per month</li>
                <li>✓ More AI-assisted responses</li>
                <li>✓ Deliverable management (due dates, uploads, checklists)</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-badge popular">Most Popular</div>
              <h3 className="pricing-name">Creator Plan</h3>
              <div className="pricing-price">
                <span className="price-amount">$24.99</span>
                <span className="price-period">/month</span>
              </div>
              <p className="pricing-description">For creators who post consistently, negotiate regularly, and treat content creation like a real business.</p>
              <ul className="pricing-features">
                <li>✓ Unlimited social platform connections</li>
                <li>✓ Multi-platform analytics (IG + TikTok + YouTube)</li>
                <li>✓ Deep analytics (conversion insights, CPM trends)</li>
                <li>✓ Price optimization engine</li>
                <li>✓ Unlimited pitch drafts</li>
                <li>✓ Unlimited deal tracking</li>
                <li>✓ Follow-up automations</li>
                <li>✓ Priority AI actions (faster + more accurate responses)</li>
              </ul>
            </div>
            <div className="pricing-card coming-soon">
              <div className="pricing-badge coming-soon-badge">Coming Soon</div>
              <h3 className="pricing-name">Pro Plan</h3>
              <div className="pricing-price">
                <span className="price-amount">$49.99</span>
                <span className="price-period">/month</span>
              </div>
              <p className="pricing-description">For full-time creators with higher volume, multiple income streams, or who want everything running automatically.</p>
              <ul className="pricing-features">
                <li>✓ High-volume outreach + negotiations</li>
                <li>✓ Higher AI action limits</li>
                <li>✓ Revenue + earnings tracking</li>
                <li>✓ Tax estimation tools</li>
                <li>✓ Long-term analytics reports</li>
                <li>✓ Advanced reminders + workflow automation</li>
                <li>✓ More storage for contracts, briefs, screenshots, invoices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Because Your Creativity Deserves a Real System</h2>
            <p className="cta-subtitle">Create more. Manage less. Your creator homebase, all in one place.</p>
            <form className="cta-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <a
                href="https://www.managerlesscreator.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial
              </a>
            </form>
            <p className="cta-note">5-day free trial • Credit card required</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

