function Hero() {
  return (
    <header className="hero">
      <div className="container hero-container">
        <div className="hero-text" data-aos="fade-right">
          <h1>Cyber Security <br className="hide-mobile" /><span className="highlight">Student</span></h1>
          <p>Hi, I am Vision KC, a Cybersecurity undergraduate specializing in offensive security, AI research,
            and building security-aware tools.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/visionkc" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src="/assets/images/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="mailto:info.visionn7@gmail.com" aria-label="Email">
              <img src="/assets/images/mail.png" alt="Mail" />
            </a>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left">
          <div className="blob-bg"></div>
          <img src="/assets/images/profile-pic.png" alt="Portrait of Raif Kaya" />
        </div>
      </div>
    </header>
  )
}

export default Hero

