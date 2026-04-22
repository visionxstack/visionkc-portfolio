import { motion } from 'framer-motion'

const fadeRight = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

const fadeLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

const floatAnimation = {
  y: [-8, 8, -8],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut'
  }
}

export default function Hero() {
  return (
    <header className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-text"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1>Cyber Security <br className="hide-mobile" /><span className="highlight">Student</span></h1>
          <p>Hi, I am Vision KC, a Cybersecurity undergraduate specializing in offensive security, AI research,
            and building security-aware tools.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/visionkc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/assets/images/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="mailto:info.visionn7@gmail.com" aria-label="Email">
              <img src="/assets/images/mail.png" alt="Mail" />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="hero-image"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="blob-bg"></div>
          <motion.img
            src="/assets/images/profile-pic.png"
            alt="Vision KC Portrait"
            animate={floatAnimation}
          />
        </motion.div>
      </div>
    </header>
  )
}
