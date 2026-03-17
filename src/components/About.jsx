function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-container">
        <div className="about-left" data-aos="fade-right">
          <div className="about-avatar">
            <img src="/assets/images/emoji.png" alt="Vision KC Emoji" />
          </div>
          <div className="about-bio">
            <span className="badge">About Me</span>
            <h3>Cyber Security Enthusiast</h3>
            <p>I am a Computer Science student with a strong focus on cybersecurity, specializing in offensive
              security and building security-aware tools that address real-world digital threats. I combine my
              passion for ethical hacking and secure development to create solutions that expose
              vulnerabilities before attackers do.</p>
            <p>Alongside my cybersecurity work, I actively engage in General AI research, exploring how
              artificial intelligence can strengthen security systems and solve complex problems. I am
              committed to bridging the gap between AI innovation and offensive security, driving meaningful
              impact at the intersection of both fields.</p>
          </div>
        </div>

        <div className="about-right" data-aos="fade-left">
          <div className="about-section-block">
            <h3>Skills</h3>
            <div className="skill-tags-grid">
              <span className="skill-pill">Networking</span>
              <span className="skill-pill">SEO &amp; Content Strategy</span>
              <span className="skill-pill">Linux (Debian)</span>
              <span className="skill-pill">Security Tool Development</span>
              <span className="skill-pill">AI Security Research</span>
              <span className="skill-pill">Python</span>
              <span className="skill-pill">Teamwok</span>
              <span className="skill-pill">Git &amp; Github</span>
              <span className="skill-pill">Communication</span>
              <span className="skill-pill">Creativity</span>
            </div>
          </div>

          <div className="about-section-block">
            <h3>Education</h3>
            <div className="education-list">
              <div className="edu-item">
                <div className="edu-info">
                  <a href="https://iimscollege.edu.np/" target="_blank" rel="noreferrer">
                    <h4>Bcs (Hons) Cybersecurity</h4>
                  </a>
                </div>
                <span className="edu-year">2026-Present</span>
              </div>
              <div className="edu-item">
                <div className="edu-info">
                  <a href="https://xaviercollege.edu.np/" target="_blank" rel="noreferrer">
                    <h4>10+2 (Science)</h4>
                  </a>
                </div>
                <span className="edu-year">2022-2024</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <a href="/assets/visionkc-resume.pdf" download className="btn btn-primary">Download CV <i
              className="fas fa-download" style={{ marginLeft: '8px' }}></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

