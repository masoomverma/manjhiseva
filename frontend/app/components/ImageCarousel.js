'use client';

import { useState, useEffect } from 'react';

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Image data
  const imageItems = [
    {
      title: 'Dashboard Overview',
      description: 'Clean and intuitive dashboard interface for healthcare management',
      src: '/placeholder-dashboard.jpg',
      alt: 'ManjhiSeva Dashboard',
      category: 'Interface'
    },
    {
      title: 'Mobile Application',
      description: 'Responsive mobile interface design for on-the-go healthcare access',
      src: '/placeholder-mobile.jpg',
      alt: 'ManjhiSeva Mobile App',
      category: 'Mobile'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time healthcare analytics and comprehensive data insights',
      src: '/placeholder-analytics.jpg',
      alt: 'Analytics Dashboard',
      category: 'Analytics'
    },
    {
      title: 'Patient Portal',
      description: 'User-friendly patient portal for appointment booking and health records',
      src: '/placeholder-portal.jpg',
      alt: 'Patient Portal',
      category: 'Portal'
    },
    {
      title: 'Doctor Interface',
      description: 'Comprehensive doctor interface for patient management and consultations',
      src: '/placeholder-doctor.jpg',
      alt: 'Doctor Interface',
      category: 'Professional'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, imageItems.length]);

  // Touch handling for mobile swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % imageItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + imageItems.length) % imageItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl transition-colors duration-300">
      {/* Main Carousel Container */}
      <div 
        className="relative h-[400px] sm:h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Slides */}
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {imageItems.map((item, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative group">
              {/* Image Slide */}
              <div className="relative h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center overflow-hidden transition-colors duration-300">
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-3xl transform rotate-45"></div>
                    <div className="absolute top-40 right-32 w-20 h-20 bg-purple-400 rounded-2xl transform rotate-12"></div>
                    <div className="absolute bottom-32 left-40 w-24 h-24 bg-indigo-400 rounded-full"></div>
                    <div className="absolute bottom-20 right-20 w-28 h-28 bg-pink-400 rounded-3xl transform -rotate-45"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 sm:px-6 py-8 sm:py-12">
                  {/* Icon */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-8 group-hover:scale-110 transition-all duration-500 shadow-2xl">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>

                  {/* Category Tag */}
                  <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-blue-200 dark:border-blue-700 transition-colors duration-300">
                    {item.category}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4 md:mb-6 transition-colors duration-300 leading-tight">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8 transition-colors duration-300">{item.description}</p>
                  
                  <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Details
                  </button>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Slide Number */}
              <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-black/50 backdrop-blur-sm text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium">
                {index + 1} / {imageItems.length}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group shadow-xl border border-white/20"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group shadow-xl border border-white/20"
          aria-label="Next image"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Controls */}
        <div className="absolute top-4 md:top-6 left-4 md:left-6 flex items-center space-x-3">
          {/* Auto-play indicator */}
          {isAutoPlaying && (
            <div className="bg-green-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center border border-green-400/30">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              Auto
            </div>
          )}
          
          {/* Play/Pause Button */}
          <button
            onClick={toggleAutoPlay}
            className="w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 border border-white/20"
            aria-label={isAutoPlaying ? 'Pause autoplay' : 'Start autoplay'}
          >
            {isAutoPlaying ? (
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 md:w-5 md:h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-colors duration-300">
        {/* Dots Navigation */}
        <div className="flex justify-center items-center py-6 space-x-3">
          {imageItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg'
                  : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 rounded-full hover:scale-125 transition-colors duration-300'
              }`}
              aria-label={`Go to image ${index + 1}: ${item.title}`}
            >
              <span className="sr-only">Go to image {index + 1}</span>
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 transition-colors duration-300">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700 ease-out"
            style={{ width: `${((currentSlide + 1) / imageItems.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}