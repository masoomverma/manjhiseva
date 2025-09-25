import Image from "next/image";
import MobileMenu from './components/MobileMenu';
import ImageCarousel from './components/ImageCarousel';
import VideoSection from './components/VideoSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg z-50 border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center group cursor-pointer">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300 relative">
                  ManjhiSeva
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500"></div>
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#about" className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#features" className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group">
                  Features
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#demo" className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group">
                  Demo
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#contact" className="relative bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 group overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-1">
                    <span>Contact</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
              </div>
            </div>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 transition-colors duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent dark:from-black/30 dark:to-transparent"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-float blur-xl"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full animate-float delay-100 blur-xl"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-400/20 rounded-full animate-float delay-200 blur-xl"></div>
          <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-pink-400/20 rounded-full animate-float delay-300 blur-xl"></div>
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-repeat" style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fillOpacity=\"0.15\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
            }}></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight transition-colors duration-300">
              <span className="block animate-fade-in-up">Digital Healthcare</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent animate-fade-in-up delay-200">
                Revolution
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up delay-300">
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
              Connecting patients with quality healthcare services through 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> innovative technology</span> and 
              <span className="text-purple-600 dark:text-purple-400 font-semibold"> compassionate care</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-500">
            <a href="https://manjhiseva.vercel.app/" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
          </div>
        </div>

        {/* Enhanced Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up delay-1000">
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 animate-pulse transition-colors duration-300">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center transition-colors duration-300">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-bounce transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/50 dark:bg-blue-900/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 transition-colors duration-300"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/50 dark:bg-purple-900/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 transition-colors duration-300"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">ManjhiSeva</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div className="group">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                  ManjhiSeva is a revolutionary digital healthcare platform designed to bridge the gap between patients and quality medical services. Our mission is to make healthcare accessible, affordable, and efficient for everyone, regardless of their location or economic status.
                </p>
              </div>
              
              <div className="group">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                  Built with cutting-edge technology and driven by compassionate care, we provide a comprehensive ecosystem that connects patients, healthcare providers, and medical professionals in a seamless digital environment.
                </p>
              </div>
              
              <div className="group">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                  Our platform leverages artificial intelligence, machine learning, and intuitive user interfaces to deliver personalized healthcare experiences that prioritize patient outcomes and satisfaction.
                </p>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-3xl p-6 sm:p-8 text-white shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 flex-shrink-0 mx-auto sm:mx-0">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div className="text-center sm:text-left flex-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">Our Vision</h3>
                      <p className="text-blue-100 text-base sm:text-lg lg:text-xl leading-relaxed">Healthcare for all, powered by cutting-edge technology and compassionate innovation</p>
                    </div>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 flex-shrink-0 mx-auto sm:mx-0">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div className="text-center sm:text-left flex-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent">Our Mission</h3>
                      <p className="text-blue-100 text-base sm:text-lg lg:text-xl leading-relaxed">Delivering compassionate, accessible healthcare through innovative digital solutions and community empowerment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden transition-colors duration-300">
        {/* Background decorations */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl transition-colors duration-300"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-100/30 dark:bg-purple-900/20 rounded-full blur-3xl transition-colors duration-300"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              Platform <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
              Discover the powerful features that make ManjhiSeva the preferred choice for modern healthcare delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-500 p-8 group hover-lift animate-fade-in-up delay-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Patient Management</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                Comprehensive patient profiles with medical history, appointments, and personalized care plans all in one place.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-500 p-8 group hover-lift animate-fade-in-up delay-200">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">AI Diagnosis Support</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                Advanced AI algorithms assist healthcare providers with accurate diagnosis and treatment recommendations.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-500 p-8 group hover-lift animate-fade-in-up delay-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Mobile Access</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                Full-featured mobile application ensuring healthcare access anytime, anywhere, from any device.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-500 p-8 group hover-lift animate-fade-in-up delay-400">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">Telemedicine</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                High-quality video consultations with healthcare providers, breaking geographical barriers to care.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-500 p-8 group hover-lift animate-fade-in-up delay-500">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">Quality Assurance</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                Rigorous quality control measures ensuring the highest standards of healthcare delivery and patient safety.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-500 p-8 group hover-lift animate-fade-in-up delay-600">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">Real-time Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                Powerful dashboard with real-time insights and analytics to optimize healthcare operations and outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo/Media Section */}
      <section id="demo" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              See <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">ManjhiSeva</span> in Action
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
              Experience our platform through interactive demos and visual showcases
            </p>
          </div>

          {/* Image Gallery Section */}
          <div className="mb-16 animate-fade-in-up delay-200">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-300">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Interface Gallery</span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
                Explore our beautifully designed interfaces and user experiences
              </p>
            </div>
            <ImageCarousel />
          </div>

          {/* Video Demos Section */}
          <div className="animate-fade-in-up delay-300">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-300">
                <span className="bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-400 dark:to-pink-400 bg-clip-text text-transparent">Video Demonstrations</span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 dark:from-red-400 dark:to-pink-400 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
                Watch comprehensive demos and feature walkthroughs
              </p>
            </div>
            <VideoSection />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2 animate-fade-in-up">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ManjhiSeva</h3>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
                Revolutionizing healthcare through innovative technology and compassionate care. 
                Making quality healthcare accessible to everyone, everywhere.
              </p>
              <div className="flex space-x-6">
                <a href="https://manjhiseva.vercel.app" className="bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 p-4 rounded-xl transition-all duration-300 hover:scale-110 group" title="Patient App">
                  <svg className="w-6 h-6 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z" />
                    <circle cx="12" cy="12" r="1" fill="currentColor"/>
                  </svg>
                </a>
                <a href="https://github.com/horus-bot/patient-app" className="bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 p-4 rounded-xl transition-all duration-300 hover:scale-110 group" title="Source Code">
                  <svg className="w-6 h-6 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-up delay-300">
              <h4 className="text-xl font-bold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group hover:bg-gray-800/50 hover:shadow-lg hover:shadow-blue-500/10 rounded-xl p-4 -m-4 transition-all duration-300 hover:scale-105">
                  <a href="mailto:sakshamxdevs@gmail.com" className="flex items-center space-x-4 group-hover:text-white transition-colors w-full">
                    <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-400 group-hover:text-white transition-colors">sakshamxdevs@gmail.com</span>
                  </a>
                </div>
                <div className="flex items-center space-x-4 group hover:bg-gray-800/50 hover:shadow-lg hover:shadow-green-500/10 rounded-xl p-4 -m-4 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <a href="tel:+910000000000" className="flex items-center space-x-4 group-hover:text-white transition-colors w-full">
                    <svg className="w-6 h-6 text-green-400 group-hover:text-green-300 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-400 group-hover:text-white transition-colors">+91 0000000000</span>
                  </a>
                </div>
                <div className="flex items-start space-x-4 group hover:bg-gray-800/50 hover:shadow-lg hover:shadow-purple-500/10 rounded-xl p-4 -m-4 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <svg className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-all duration-300 flex-shrink-0 mt-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400 group-hover:text-white transition-colors leading-relaxed">5, 28, Bajanai Kovil St, Andavar Nagar, Ramapuram, Chennai, Tamil Nadu 600089</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 animate-fade-in-up delay-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0 text-center md:text-left">
                © 2025 ManjhiSeva. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}