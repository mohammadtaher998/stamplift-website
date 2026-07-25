export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#home">
            Stamplift
          </a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container">
            <p className="eyebrow">Tap. Stamp. Done.</p>
            <h1>Your loyalty card, one tap away — right in their wallet.</h1>
            <p>
              Stamplift turns a single NFC tap into a full stamp card on Apple
              Wallet and Google Wallet. No app to install, no plastic card to
              lose.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#contact">
                Get Stamplift
              </a>
              <a className="btn btn-ghost" href="#about">
                About us
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="eyebrow">How it works</p>
            <div className="grid">
              <div className="card">
                <h3>1. Tap</h3>
                <p>
                  A customer taps their phone on your NFC tag — at the
                  counter, on a table, anywhere.
                </p>
              </div>
              <div className="card">
                <h3>2. Add to Wallet</h3>
                <p>
                  A short one-time form adds their stamp card to Apple Wallet
                  or Google Wallet.
                </p>
              </div>
              <div className="card">
                <h3>3. Collect</h3>
                <p>
                  Every later tap updates their stamp count instantly, right
                  on the pass already in their wallet.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section alt">
          <div className="container">
            <p className="eyebrow">About Us</p>
            <h2>A loyalty platform built for the region, not adapted for it.</h2>
            <p>
              Most digital loyalty tools are built elsewhere and translated as
              an afterthought. Stamplift starts from the opposite direction:
              local pricing, Arabic-ready from day one, and onboarding that&apos;s
              hands-on rather than a self-serve form buried in a help center.
            </p>
            <p>
              The product stays deliberately simple: tap an NFC tag, add a
              pass to Apple Wallet or Google Wallet, and every visit after
              that just works — no login, no app, no friction.
            </p>
          </div>
        </section>

        <section id="contact" className="section center">
          <div className="container">
            <p className="eyebrow">Get in touch</p>
            <h2>Bring your loyalty program to Apple &amp; Google Wallet.</h2>
            <p>
              Tell us about your business and we&apos;ll set up your first
              program.
            </p>
            <a className="btn btn-primary" href="mailto:support@stamplift.online">
              support@stamplift.online
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="logo">Stamplift</span>
          <span>© 2026 Stamplift · stamplift.online</span>
          <a href="mailto:support@stamplift.online">support@stamplift.online</a>
        </div>
      </footer>
    </>
  );
}
