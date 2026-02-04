import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <img src="/assets/logo.png" alt="Managerless Logo" width={40} height={40} />
              <span>Managerless</span>
            </Link>
            <p className="footer-tagline">Helping creators run their business, their way.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Product</h4>
              <ul>
                <li><a href="/#features">Features</a></li>
                <li><a href="/#pricing">Pricing</a></li>
                <li><a href="/#how-it-works">How It Works</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">Company</h4>
              <ul>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">Connect</h4>
              <ul>
                <li><a href="https://www.instagram.com/managerlessapp?igsh=c2t0bzFsYWgweXlr&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.tiktok.com/@managerlessapp?_r=1&_t=ZP-93cvGKfNkMx" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Managerless. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

