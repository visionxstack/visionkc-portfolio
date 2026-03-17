const projects = [
  {
    href: 'https://github.com/vision-dev1/Pixelhide',
    img: '/assets/images/pixelhide.png',
    alt: 'PixelHide',
    title: 'PixelHide',
    desc: 'Advanced image steganography tool.'
  },
  {
    href: 'https://github.com/vision-dev1/PhishX',
    img: '/assets/images/PhishX.png',
    alt: 'PhishX',
    title: 'PhishX',
    desc: 'Advanced phishing simulation toolkit.'
  },
  {
    href: 'https://github.com/vision-dev1/FileGuard-FIM',
    img: '/assets/images/fileguard.png',
    alt: 'FileGuard',
    title: 'FileGuard',
    desc: 'Cross-platform File Integrity Monitoring.'
  },
  {
    href: 'https://dev-buddy-five.vercel.app',
    img: '/assets/images/DevBuddy.png',
    alt: 'DevBuddy',
    title: 'DevBuddy',
    desc: 'AI-powered developer assistant tool.'
  },
  {
    href: 'https://github.com/vision-dev1/Brutesim',
    img: '/assets/images/brutesim.png',
    alt: 'BruteSim',
    title: 'BruteSim',
    desc: 'High-performance brute-force attack simulator.'
  },
  {
    href: 'https://websentry-j3is.onrender.com',
    img: '/assets/images/websentry.png',
    alt: 'WebSentry',
    title: 'WebSentry',
    desc: 'Real-time web vulnerability monitoring system.'
  },
  {
    href: 'https://github.com/vision-dev1/DeepTrace',
    img: '/assets/images/deeptrace.png',
    alt: 'DeepTrace',
    title: 'DeepTrace',
    desc: 'AI-powered deepfake detection system.'
  },
  {
    href: 'https://github.com/vision-dev1/IoTGuard',
    img: '/assets/images/IoTGuard.png',
    alt: 'IoTGuard',
    title: 'IoTGuard',
    desc: 'IoT device security monitoring system.'
  }
]

function Portfolio() {
  return (
    <section id="portfolio" className="section bg-light">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">Homemade projects to become the best</h2>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="portfolio-item group"
              data-aos="fade-up"
            >
              <img src={project.img} alt={project.alt} />
              <div className="overlay">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="portfolio-footer">
          I have completed 25+ Projects throught now <a href="https://github.com/vision-dev1">view all in
            GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

