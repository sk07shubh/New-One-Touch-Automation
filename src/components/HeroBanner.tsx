import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const slides = [
  {
    id: 1,
    image: heroBanner,
    title: 'Premium Automation Solutions',
    subtitle: '2 in 1 Machine',
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);

  return (
    <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-secondary">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map(slide => (
          <div key={slide.id} className="min-w-full h-full relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
              <div className="p-6 text-primary-foreground max-w-[60%]">
                <span className="inline-block bg-primary-foreground text-primary text-xs font-semibold px-2 py-1 rounded mb-2">
                  NEW ONETOUCH
                </span>
                <h2 className="text-xl font-bold leading-tight">{slide.title}</h2>
                <p className="text-sm mt-1 opacity-90">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-card/80 rounded-full flex items-center justify-center hover:bg-card transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-card/80 rounded-full flex items-center justify-center hover:bg-card transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-card w-4' : 'bg-card/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HeroBanner;
