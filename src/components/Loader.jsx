import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader({ onDone }) {
  const [phase, setPhase] = useState('enter'); // enter → hold → exit

  useEffect(() => {
    // After letters finish drawing (1.4s), hold briefly, then exit
    const hold = setTimeout(() => setPhase('exit'), 2200);
    return () => clearTimeout(hold);
  }, []);

  const handleAnimEnd = () => {
    if (phase === 'exit') onDone();
  };

  return (
    <div className={`loader-wrap ${phase}`} onAnimationEnd={handleAnimEnd}>
      {/* Background grid */}
      <div className="loader-grid" />

      {/* Glowing orbs behind */}
      <div className="loader-orb loader-orb-1" />
      <div className="loader-orb loader-orb-2" />

      {/* Logo */}
      <div className="loader-logo-wrap">
        <div className="loader-logo">
          {'PIXE'.split('').map((char, i) => (
            <span key={i} className="loader-char" style={{ animationDelay: `${i * 0.15}s` }}>
              {char}
            </span>
          ))}
          <span className="loader-dot">.</span>
        </div>
        <p className="loader-tagline">Engineering tomorrow. Delivering today.</p>

        {/* Progress bar */}
        <div className="loader-bar-wrap">
          <div className="loader-bar" />
        </div>
      </div>

      {/* Corner decoration */}
      <div className="loader-corner top-left" />
      <div className="loader-corner top-right" />
      <div className="loader-corner bottom-left" />
      <div className="loader-corner bottom-right" />
    </div>
  );
}
