import { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-brand-gold' : 'text-white/20'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Testimonial */}
      <div className="text-center px-4 md:px-12">
        <div className="mb-6 flex justify-center">
          <StarRating rating={testimonials[current].rating} />
        </div>

        <blockquote className="relative">
          <svg
            className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 text-brand-gold/10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
          </svg>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-body italic mb-8 min-h-[120px]">
            "{testimonials[current].text}"
          </p>
        </blockquote>

        <div>
          <p className="font-heading text-lg uppercase tracking-wider text-brand-gold">
            {testimonials[current].name}
          </p>
          <p className="text-white/50 text-sm font-subheading">
            {testimonials[current].role}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-10 h-10 rounded-full bg-brand-surface border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-gold hover:border-brand-gold/30 transition-all duration-300"
        aria-label="Previous testimonial"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-10 h-10 rounded-full bg-brand-surface border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-gold hover:border-brand-gold/30 transition-all duration-300"
        aria-label="Next testimonial"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-brand-gold w-8'
                : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
