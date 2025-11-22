import { useEffect, useRef } from 'react';

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            // Play video when section is in view
            videoRef.current.play().catch((error) => {
              console.log('Video autoplay prevented:', error);
            });
          } else if (videoRef.current) {
            // Pause video when section is out of view
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-24 bg-raizing-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 bg-raizing-maroon-50 border border-raizing-maroon-200 rounded-full">
            <span className="text-raizing-maroon-600 text-xs sm:text-sm font-semibold">Watch & Learn</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-raizing-teal-900 mb-3 sm:mb-4 px-4">
            Experience the Future of AI
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-raizing-teal-900 max-w-3xl mx-auto px-4">
            Discover how AI is transforming businesses and creating new possibilities
          </p>
        </div>

        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-raizing-teal-900 animate-on-scroll opacity-0">
          <div className="absolute inset-0 bg-gradient-to-br from-raizing-teal-900/10 to-raizing-maroon-500/10 z-10 pointer-events-none"></div>
          <video
            ref={videoRef}
            className="w-full h-auto"
            loop
            muted
            playsInline
            preload="metadata"
            poster="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

