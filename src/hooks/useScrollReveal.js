import { useEffect } from 'react';

/**
 * Hook to apply scroll in/out animations dynamically using IntersectionObserver
 */
export default function useScrollReveal(dependency) {
  useEffect(() => {
    const selector = '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-zoom-in, .kb-card, .proof-card, .kb-engagement-card, .kb-case-card, .kb-process-card, .kb-service-card';
    
    const elements = document.querySelectorAll(selector);
    if (!elements || elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            // Scroll out animation effect
            entry.target.classList.remove('is-visible');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    elements.forEach((el) => {
      // Add default scroll-reveal class if not explicitly declared
      if (
        !el.classList.contains('scroll-reveal') &&
        !el.classList.contains('scroll-reveal-left') &&
        !el.classList.contains('scroll-reveal-right') &&
        !el.classList.contains('scroll-zoom-in')
      ) {
        el.classList.add('scroll-reveal');
      }
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [dependency]);
}
