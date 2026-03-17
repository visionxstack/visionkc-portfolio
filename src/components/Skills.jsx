const skills = [
  { name: 'Social Engineering', percent: 90, level: 'Professional', years: '5 years experience' },
  { name: 'Network Mapper', percent: 60, level: 'Intermediate', years: '2 years experience' },
  { name: 'Linux (Debian)', percent: 50, level: 'Intermediate', years: '2 years experience' },
  { name: 'Brute Force Attacks', percent: 60, level: 'Intermediate', years: '3 years experience' },
  { name: 'DDoS Attacks', percent: 50, level: 'Intermediate', years: '2 years experience' },
  { name: 'Burp Suite', percent: 40, level: 'Beginner', years: '1 years experience' }
]

const centerSkill = { name: 'Injection Attacks', percent: 30, level: 'Beginner', years: '1 years experience' }

function SkillItem({ skill, aosAttr }) {
  return (
    <div className="skill-item" {...(aosAttr ? { 'data-aos': 'fade-right' } : {})}>
      <div className="skill-info"><span>{skill.name}</span><span>{skill.percent}%</span></div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${skill.percent}%` }}></div>
      </div>
      <div className="skill-tags"><span>{skill.level}</span><span>{skill.years}</span></div>
    </div>
  )
}
