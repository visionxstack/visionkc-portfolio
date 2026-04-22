import { motion } from 'framer-motion'

const projects = [
  {
    href: 'https://github.com/visionxstack/Pixelhide',
    img: '/assets/images/pixelhide.png',
    alt: 'PixelHide',
    title: 'PixelHide',
    desc: 'Advanced image steganography tool.'
  },
  {
    href: 'https://github.com/visionxstack/PhishX',
    img: '/assets/images/phishx.png',
    alt: 'PhishX',
    title: 'PhishX',
    desc: 'Advanced phishing simulation toolkit.'
  },
  {
    href: 'https://github.com/visionxstack/FileGuard-FIM',
    img: '/assets/images/fileguard.png',
    alt: 'FileGuard',
    title: 'FileGuard',
    desc: 'Cross-platform File Integrity Monitoring.'
  },
  {
    href: 'https://dev-buddy-five.vercel.app',
    img: '/assets/images/devbuddy.png',
    alt: 'DevBuddy',
    title: 'DevBuddy',
    desc: 'AI-powered developer assistant tool.'
  },
  {
    href: 'https://github.com/visionxstack/Brutesim',
    img: '/assets/images/brutesim.png',
    alt: 'BruteSim',
    title: 'BruteSim',
    desc: 'High-performance brute-force attack simulator.'
  },
  {
    href: 'https://github.com/visionxstack/WebSentry',
    img: '/assets/images/websentry.png',
    alt: 'WebSentry',
    title: 'WebSentry',
    desc: 'Real-time web vulnerability monitoring system.'
  },
  {
    href: 'https://github.com/visionxstack/DeepTrace',
    img: '/assets/images/deeptrace.png',
    alt: 'DeepTrace',
    title: 'DeepTrace',
    desc: 'AI-powered deepfake detection system.'
  },
  {
    href: 'https://github.com/visionxstack/IoTGuard',
    img: '/assets/images/iotguard.png',
    alt: 'IoTGuard',
    title: 'IoTGuard',
    desc: 'IoT device security monitoring system.'
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section bg-light">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">Projects That Speak Louder Than Words</h2>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-item group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{
                rotateX: 4,
                rotateY: -4,
                scale: 1.03,
                boxShadow: '0 25px 40px -8px rgba(37, 99, 235, 0.25)',
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <img src={project.img} alt={project.alt} />
              <div className="overlay">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="portfolio-footer">
          I have completed 25+ Projects throught now{' '}
          <a href="https://github.com/visionxstack">view all in GitHub</a>
        </div>
      </div>
    </section>
  )
}

