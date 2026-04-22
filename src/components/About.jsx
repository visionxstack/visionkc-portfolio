import { motion } from 'framer-motion'

const fadeRight = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

const fadeLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

const skillPills = [
  'Malware Analysis', 'Security Awareness', 'AI Automation',
  'Digital Forensics', 'AI Security Research', 'Security Strategy',
  'Python Programming', 'Prompt Engineering', 'Security Tools Development',
  'Linux (Debian)', 'Leadership', 'Creativity'
]

const education = [
  {
    title: 'Bcs (Hons) Cybersecurity',
    link: 'https://iimscollege.edu.np/',
    year: '2026-Present'
  },
  {
    title: '10+2 (Science)',
    link: 'https://xaviercollege.edu.np/',
    year: '2022-2024'
  }
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-container">
        <motion.div
          className="about-left"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="about-avatar">
            <img src="/assets/images/emoji.png" alt="Vision KC Emoji" />
          </div>
          <div className="about-bio">
            <span className="badge">About Me</span>
            <h3>Cyber Security Enthusiast</h3>
            <p>I am a Computer Science student with a strong focus on cybersecurity, specializing in offensive
              security and the development of cybersecurity tools and web applications that address real-world
              digital threats. I combine my passion for ethical hacking and secure development to create
              solutions that expose vulnerabilities before attackers do.</p>
            <p>Beyond tool development, I actively research emerging trends in cybersecurity, staying ahead of
              evolving attack techniques, threat landscapes, and defensive innovations. I am also engaged in
              General AI research, exploring how artificial intelligence can strengthen security systems and
              power the next generation of offensive and defensive strategies. I am committed to bridging the
              gap between AI innovation and cybersecurity, driving meaningful impact at the intersection of
              both fields.</p>
          </div>
        </motion.div>

        <motion.div
          className="about-right"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="about-section-block">
            <h3>Skills</h3>
            <div className="skill-tags-grid">
              {skillPills.map(skill => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>

          <div className="about-section-block">
            <h3>Education</h3>
            <div className="education-list">
              {education.map(edu => (
                <div key={edu.title} className="edu-item">
                  <div className="edu-info">
                    <a href={edu.link} target="_blank" rel="noopener noreferrer">
                      <h4>{edu.title}</h4>
                    </a>
                  </div>
                  <span className="edu-year">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <a href="/assets/visionkc-resume.pdf" download className="btn btn-primary">
              Download CV <i className="fas fa-download" style={{ marginLeft: '8px' }}></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

