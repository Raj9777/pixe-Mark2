import './Services.css';

const services = [
  {
    icon: '💻',
    title: 'Custom Software',
    desc: 'End-to-end bespoke applications tailored precisely to your business logic and operational needs.',
    tag: 'Full Stack',
  },
  {
    icon: '🌐',
    title: 'High-Fidelity Websites',
    desc: 'Stunning, interactive web experiences optimised for conversion and built with modern tech stacks.',
    tag: 'Web Design',
  },
  {
    icon: '⚡',
    title: 'Fast Delivery',
    desc: 'Agile development cycles meaning you go to market significantly faster than traditional agencies.',
    tag: 'Agile',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile applications that feel native on every device for seamless user experiences.',
    tag: 'React Native',
  },
  {
    icon: '🔌',
    title: 'API Integrations',
    desc: 'Robust backend services and third-party API integrations that power your digital products.',
    tag: 'Backend',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Premium interface design grounded in user psychology with prototype-to-production delivery.',
    tag: 'Design Systems',
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="section-header">
        <h2>Capabilities</h2>
        <p>Everything you need to ship a world-class digital product.</p>
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
