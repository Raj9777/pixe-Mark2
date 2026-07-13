import './Portfolio.css';

const projects = [
  {
    img: '/assets/project1.png',
    tag: 'Web App',
    title: 'Aeon Cloud Infrastructure',
    desc: 'Real-time spatial visualization for global server nodes with streaming telemetry and event alerts.',
  },
  {
    img: '/assets/project2.png',
    tag: 'UI/UX Design',
    title: 'Aether Audio',
    desc: 'Spatial design system for next-gen media playback engineered around listener immersion.',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <p>A showcase of futuristic interfaces and high-performance systems.</p>
      </div>
      <div className="portfolio-grid">
        {projects.map((p) => (
          <div key={p.title} className="portfolio-card glass">
            <div className="portfolio-img-wrap">
              <img src={p.img} alt={p.title} loading="lazy" />
              <div className="portfolio-overlay">
                <span className="portfolio-overlay-text">✦ View Project</span>
              </div>
            </div>
            <div className="portfolio-info">
              <span className="portfolio-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
