import './Services.css';

const services = [
  {
    icon: '💻',
    title: 'Custom Software Development',
    desc: 'End-to-end bespoke web and cloud applications tailored precisely for businesses in USA, Canada, and India.',
    tag: 'Full Stack',
  },
  {
    icon: '🌐',
    title: 'Website Development Agency',
    desc: 'Stunning, interactive React & Vite web applications optimized for conversion, SEO ranking, and rapid speed.',
    tag: 'Web Design',
  },
  {
    icon: '⚡',
    title: 'Fast Agile Delivery',
    desc: 'Rapid development sprints delivering production software 3× faster than traditional agencies.',
    tag: 'Agile',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile applications for iOS & Android with native responsiveness and crisp UI/UX.',
    tag: 'React Native',
  },
  {
    icon: '🔌',
    title: 'API & Backend Integration',
    desc: 'Robust REST/GraphQL microservices, cloud databases, and third-party APIs that power scalable products.',
    tag: 'Backend',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design Studio',
    desc: 'Premium design systems and user-centered interfaces grounded in conversion strategy.',
    tag: 'Design Systems',
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="section-header">
        <h2>Custom Software & Website Development Services</h2>
        <p>Everything your business needs to ship world-class software across India, USA, and Canada.</p>
      </div>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.title} className="service-card glass">
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <span className="service-tag">{s.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
