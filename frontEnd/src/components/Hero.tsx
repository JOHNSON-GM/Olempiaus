import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url("/src/assets/images/home_page_1.jpg")'
        }}
      >
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in-up">
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald-400 to-brand-green-500">
              Luxury
            </span>
            Redefined
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Discover an oasis of sophistication where every detail has been crafted 
            to create unforgettable moments and extraordinary experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button className="group relative bg-brand-bronze-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-brand-bronze-600 hover:shadow-xl hover:scale-105 min-w-[200px]">
              <span className="relative z-10">Book Your Stay</span>
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-gray-900 hover:shadow-xl hover:scale-105 min-w-[200px]">
              Explore Rooms
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;