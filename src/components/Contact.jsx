import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/meopywnb', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })
      if (res.ok) {
        setSubmitted(true)
        form.reset()
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <footer id="contact" className="footer">
      <div className="contact-section">
        <div className="container contact-container">

          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <span className="section-subtitle">Contact Me</span>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>Get In Touch</h2>
            </div>
            {submitted ? (
              <div className="form-success">
                <i className="material-icons" style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>check_circle</i>
                <p>Thank you! Your message has been sent.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            )}
          </motion.div>

          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h3>Let's Connect</h3>
            <p>Feel free to reach out if you're looking for a developer, have a question, or just want to
              connect.</p>
            <div className="contact-icons-row">
              <a href="https://www.linkedin.com/in/visionkc" target="_blank" rel="noopener noreferrer"
                className="contact-icon-link" aria-label="LinkedIn">
                <img src="/assets/images/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://www.github.com/visionxstack" target="_blank" rel="noopener noreferrer"
                className="contact-icon-link" aria-label="GitHub">
                <img src="/assets/images/github.png" alt="GitHub" />
              </a>
              <a href="mailto:info.visionn7@gmail.com"
                className="contact-icon-link" aria-label="Email">
                <img src="/assets/images/mail.png" alt="Mail" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </footer>
  )
}

