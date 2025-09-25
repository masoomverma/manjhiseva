'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <div className="w-20 h-20 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Text Animation */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white animate-pulse">
            ManjhiSeva
          </h1>
          <p className="text-white/80 text-lg animate-fade-in-up delay-500">
            Loading your healthcare experience...
          </p>
          
          {/* Progress Bar */}
          <div className="w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-white rounded-full animate-shimmer"></div>
          </div>
        </div>
      </div>
      
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-1/2 -right-10 w-32 h-32 bg-white/10 rounded-full animate-float delay-200 blur-xl"></div>
        <div className="absolute -bottom-10 left-1/3 w-36 h-36 bg-white/10 rounded-full animate-float delay-300 blur-xl"></div>
      </div>
    </div>
  );
}