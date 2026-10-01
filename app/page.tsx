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
              <p className="eyebrow">Scan. Stamp. Reward.</p>
              <h1>The loyalty card that never goes through the wash.</h1>
              <p className="lede">
                Stamplift turns a simple QR scan into a digital loyalty card in
                Apple Wallet or Google Wallet. Customers scan to get their card,
                then merchants scan the customer&rsquo;s card after each purchase
                to add a stamp. No app to install, no plastic card to lose.
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
                <h3>Scan to Join</h3>
                <p>
                  A customer scans your QR code at the counter, on a table, or
                  anywhere you choose to start their loyalty card.
                </p>
              </li>
              <li className="step">
                <Stampy size={56} />
                <span className="step-num">2</span>
                <h3>Add to Wallet</h3>
                <p>
                  A short one-time form adds their loyalty card to Apple Wallet
                  or Google Wallet. No app download needed.
                </p>
              </li>
              <li className="step">
                <Stampy size={56} pose="happy" />
                <span className="step-num">3</span>
                <h3>Scan to Stamp</h3>
                <p>
                  After each purchase, you scan the customer&rsquo;s loyalty card
                  to add a stamp. Their stamp count updates instantly in their
                  wallet.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section id="shops" className="section alt">
          <div className="container split">
            <div>
              <p className="eyebrow">For shops</p>
              <h2>Your brand. Your rewards. We handle the rest.</h2>
              <p>
                Your logo, your colours and your rewards stay front and centre.
                Stamplift handles the digital wallet experience, while your team
                simply scans a customer&rsquo;s card after each purchase to add a
                stamp.
              </p>
              <ul className="ticks">
                <li>Customers join by scanning a QR code — no app download</li>
                <li>Scan a customer&rsquo;s wallet card to add a stamp instantly</li>
                <li>Track customers, stamps and rewards from one dashboard</li>
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
                <p>38 customers came back this week. Your loyalty program is keeping them engaged.</p>
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
            <h2>Built in Canada. Growing loyalty around the world.</h2>
            <p>
              Stamplift is a Canadian technology startup building simple digital
              loyalty solutions for businesses in Canada, the United States and
              markets around the world. Our goal is to help restaurants, cafés,
              retailers and local businesses build stronger relationships with
              their customers without complicated apps, expensive hardware or
              outdated plastic cards.
            </p>
            <p>
              We believe loyalty should be effortless for both the business and
              the customer. Customers can scan a QR code to add their loyalty card
              directly to Apple Wallet or Google Wallet. Merchants can then scan
              the customer&rsquo;s card after each purchase to add stamps and
              reward repeat visits.
            </p>
            <p>
              Our vision is to make digital loyalty simple, accessible and
              effective for businesses of every size. We are building Stamplift to
              become a trusted global loyalty platform that helps businesses
              understand their customers, encourage repeat visits and create
              better customer experiences through simple technology.
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
