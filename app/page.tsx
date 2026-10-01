import Stampy from "./components/Stampy";
import { SITE_DOMAIN, SUPPORT_EMAIL } from "./config";

const STAMPS_REQUIRED = 10;
const SAMPLE_STAMPS = 4;

function Logo({ size = 26 }: { size?: number }) {
  return (
    <a className="logo" href="#home">
      <Stampy size={size} />
      <span>stamplift</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav className="nav">
            <a href="#how">How it works</a>
            <a href="#shops">For shops</a>
            <a href="#about">About</a>
          </nav>
          <a className="btn btn-primary btn-sm" href="#contact">
            Get Stamplift
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Tap. Stamp. Done.</p>
              <h1>The loyalty card that never goes through the wash.</h1>
              <p className="lede">
                Stamplift turns a single NFC tap into a full stamp card on Apple
                Wallet and Google Wallet. No app to install, no plastic card to
                lose, no &ldquo;sorry, it&apos;s in my other jacket.&rdquo;
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#contact">
                  Get Stamplift
                </a>
                <a className="btn btn-ghost" href="#how">
                  See how it works
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="stampy-press">
                <Stampy size={132} pose="happy" />
              </div>
              <div className="pass-mock">
                <div className="pass-top">
                  <span className="pass-logo">N</span>
                  <span>
                    <strong>Northline Coffee</strong>
                    <small>Coffee card</small>
                  </span>
                  <span className="pass-count">
                    <small>Collected</small>
                    {SAMPLE_STAMPS}/{STAMPS_REQUIRED}
                  </span>
                </div>
                <div className="pass-dots">
                  {Array.from({ length: STAMPS_REQUIRED }, (_, i) => (
                    <i
                      key={i}
                      className={
                        i < SAMPLE_STAMPS - 1 ? "on" : i === SAMPLE_STAMPS - 1 ? "on new" : ""
                      }
                    />
                  ))}
                </div>
                <p className="pass-note">
                  {STAMPS_REQUIRED - SAMPLE_STAMPS} more for a free latte
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="section">
          <div className="container">
            <p className="eyebrow">How it works</p>
            <h2>Three steps. Zero apps.</h2>
            <ol className="steps">
              <li className="step">
                <Stampy size={56} pose="wave" />
                <span className="step-num">1</span>
                <h3>Tap</h3>
                <p>
                  A customer taps their phone on your NFC tag — at the counter,
                  on a table, anywhere.
                </p>
              </li>
              <li className="step">
                <Stampy size={56} />
                <span className="step-num">2</span>
                <h3>Add to Wallet</h3>
                <p>
                  A short one-time form adds their stamp card to Apple Wallet or
                  Google Wallet.
                </p>
              </li>
              <li className="step">
                <Stampy size={56} pose="happy" />
                <span className="step-num">3</span>
                <h3>Collect</h3>
                <p>
                  Every later tap updates their stamp count instantly, right on
                  the pass already in their wallet.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section id="shops" className="section alt">
          <div className="container split">
            <div>
              <p className="eyebrow">For shops</p>
              <h2>Your card, your colours. We just do the stamping.</h2>
              <p>
                Your logo, your colours and your reward go on the card. Stamplift
                handles Apple and Google behind the scenes, and shows you who
                keeps coming back.
              </p>
              <ul className="ticks">
                <li>Customers never download anything</li>
                <li>Cards update the second a stamp lands</li>
                <li>See customers, stamps and rewards at a glance</li>
              </ul>
            </div>

            <figure className="portal-mock" aria-label="Example of the merchant portal">
              <div className="portal-top">
                <span className="logo-sm">
                  <Stampy size={18} />
                  stamplift
                </span>
                <span className="dim">Northline Coffee ▾</span>
              </div>
              <div className="portal-body">
                <h3>Morning, Northline.</h3>
                <p>38 regulars came back this week. Stampy is doing a little dance.</p>
                <div className="tiles">
                  <div className="tile tile-sunny">
                    <small>Customers</small>
                    <b>214</b>
                    <em>+18 this week</em>
                  </div>
                  <div className="tile">
                    <small>Stamps</small>
                    <b>1,092</b>
                    <em>all time</em>
                  </div>
                  <div className="tile">
                    <small>Rewards given</small>
                    <b>87</b>
                    <em>completed cards</em>
                  </div>
                </div>
              </div>
              <figcaption>Example numbers</figcaption>
            </figure>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container narrow">
            <p className="eyebrow">About us</p>
            <h2>A loyalty platform built for the region, not adapted for it.</h2>
            <p>
              Most digital loyalty tools are built elsewhere and translated as an
              afterthought. Stamplift starts from the opposite direction: local
              pricing, Arabic-ready from day one, and onboarding that&apos;s
              hands-on rather than a self-serve form buried in a help center.
            </p>
            <p>
              The product stays deliberately simple: tap an NFC tag, add a pass to
              Apple Wallet or Google Wallet, and every visit after that just works
              — no login, no app, no friction.
            </p>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container contact-inner">
            <Stampy size={112} pose="wave" />
            <div>
              <h2>Stampy&apos;s ready when you are.</h2>
              <p>
                Tell us about your business and we&apos;ll set up your first
                program.
              </p>
              <a className="btn btn-sunny" href={`mailto:${SUPPORT_EMAIL}`}>
                {SUPPORT_EMAIL}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <Logo size={22} />
          <span>
            © 2026 Stamplift · {SITE_DOMAIN}
          </span>
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </div>
      </footer>
    </>
  );
}
