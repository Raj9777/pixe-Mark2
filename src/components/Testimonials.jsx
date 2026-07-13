import './Testimonials.css';

const testimonials = [
  {
    quote: '"Absolutely incredible speed and precision. The final product was not only functionally flawless — the design aesthetic completely elevated our brand."',
    name: 'Alex Render',
    role: 'Creative Director, Studio Vex',
    avatar: '/assets/avatar1.png',
    initials: 'AR',
  },
  {
    quote: '"Delivered our entire e-commerce platform in 3 days. Most agencies quoted 3 months. The quality was miles ahead of what we expected at this price."',
    name: 'Priya Sharma',
    role: 'Founder, NeonCart',
    avatar: null,
    initials: 'PS',
  },
  {
    quote: '"The attention to micro-interactions and animation detail is just chef\'s kiss. My clients are obsessed with the final result."',
    name: 'Carlos M.',
    role: 'Product Lead, Aura Labs',
    avatar: null,
    initials: 'CM',
  },
  {
    quote: '"Best investment for our SaaS dashboard. The developer knew exactly what we needed before we could even articulate it clearly."',
    name: 'Yuki Tanaka',
    role: 'CTO, DataPulse',
    avatar: null,
    initials: 'YT',
  },
  {
    quote: '"Reasonable price, unreasonable quality. I don\'t say that lightly — I\'ve worked with agencies charging 10x who didn\'t deliver half as much."',
    name: 'Sophie Leclaire',
    role: 'Brand Strategist, Leclaire Co.',
    avatar: null,
    initials: 'SL',
  },
  {
    quote: '"Communication was impeccable throughout the project. Delivered early, within budget, with zero corners cut. Will hire again without question."',
    name: 'Marcus Webb',
    role: 'Startup Founder',
    avatar: null,
    initials: 'MW',
  },
];

// Duplicate for seamless marquee loop
const doubled = [...testimonials, ...testimonials];

function TCard({ t }) {
  return (
    <div className="tcard glass">
      <div className="tcard-stars">{'★'.repeat(5)}</div>
      <p className="tcard-quote">{t.quote}</p>
      <div className="tcard-author">
        {t.avatar ? (
          <img src={t.avatar} alt={t.name} className="tcard-avatar" />
        ) : (
          <div className="tcard-avatar-placeholder">{t.initials}</div>
        )}
        <div className="tcard-info">
          <h4>{t.name}</h4>
          <span>{t.role}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-inner">
        <div className="section-header">
          <div className="section-pill">Testimonials</div>
          <h2>What Clients Say</h2>
          <p>Trusted by designers, founders and builders worldwide.</p>
        </div>
        <div className="testimonials-track-wrap">
          <div className="testimonials-track">
            {doubled.map((t, i) => (
              <TCard key={i} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
