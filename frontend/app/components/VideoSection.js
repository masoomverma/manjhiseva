'use client';

import { useState, useEffect } from 'react';

export default function VideoSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Video data
  const videoItems = [
    {
      title: 'Platform Demo Video',
      description: 'Complete walkthrough of ManjhiSeva platform features and capabilities',
      thumbnail: '/placeholder-video1.jpg',
      videoUrl: '#',
      duration: '3:45',
      category: 'Demo'
    },
    {
      title: 'Telemedicine Feature',
      description: 'Video consultation capabilities and real-time communication features',
      thumbnail: '/placeholder-video2.jpg',
      videoUrl: '#',
      duration: '2:30',
      category: 'Features'
    },
    {
      title: 'Patient Journey',
      description: 'End-to-end patient experience showcase from registration to treatment',
      thumbnail: '/placeholder-video3.jpg',
      videoUrl: '#',
      duration: '4:12',
      category: 'Journey'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videoItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, videoItems.length]);

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
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videoItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videoItems.length) % videoItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl transition-colors duration-300">
      {/* Main Carousel Container */}
      <div 
        className="relative h-[400px] sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[650px] overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Slides */}
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {videoItems.map((video, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative group">
              {/* Video Slide */}
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                {/* Video Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/30 to-purple-600/30"></div>
                  <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-lg"></div>
                  <div className="absolute top-20 right-16 w-16 h-16 border border-white/20 rounded-lg"></div>
                  <div className="absolute bottom-16 left-20 w-12 h-12 border border-white/20 rounded-lg"></div>
                  <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/20 rounded-lg"></div>
                </div>
                
                <div className="relative z-10 text-center px-4 sm:px-6 py-8 sm:py-12">
                  {/* Play Button */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-8 hover:bg-white/25 cursor-pointer group-hover:scale-110 transition-all duration-500 shadow-2xl border border-white/20">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Category Tag */}
                  <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-blue-500/20 dark:bg-blue-400/20 backdrop-blur-sm rounded-full text-blue-200 dark:text-blue-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-blue-400/30 dark:border-blue-500/40 transition-colors duration-300">
                    {video.category}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">{video.title}</h3>
                  <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">{video.description}</p>
                  
                  {/* Duration and Action */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold border border-white/20 text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {video.duration}
                    </div>
                    <button className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Watch Demo
                    </button>
                  </div>
                </div>
                
                {/* Slide Number */}
                <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-black/50 backdrop-blur-sm text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  {index + 1} / {videoItems.length}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group shadow-xl border border-white/20"
          aria-label="Previous video"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group shadow-xl border border-white/20"
          aria-label="Next video"
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
      <div className="relative bg-gray-800/80 dark:bg-gray-900/80 backdrop-blur-sm transition-colors duration-300">
        {/* Dots Navigation */}
        <div className="flex justify-center items-center py-6 space-x-3">
          {videoItems.map((video, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 h-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-full shadow-lg'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/70 rounded-full hover:scale-125'
              }`}
              aria-label={`Go to video ${index + 1}: ${video.title}`}
            >
              <span className="sr-only">Go to video {index + 1}</span>
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
          <div 
            className="h-full bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-700 ease-out"
            style={{ width: `${((currentSlide + 1) / videoItems.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}