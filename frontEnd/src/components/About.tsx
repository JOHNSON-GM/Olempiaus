import React from 'react';
import { Award, Users, MapPin, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-brand-emerald-500" />,
      title: "Award-Winning Service",
      description: "Recognized for excellence in hospitality and guest satisfaction worldwide."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-emerald-500" />,
      title: "Personalized Experience",
      description: "Every guest receives tailored service designed around their unique preferences."
    },
    {
      icon: <MapPin className="w-8 h-8 text-brand-emerald-500" />,
      title: "Prime Location",
      description: "Situated in the heart of the city with easy access to major attractions."
    },
    {
      icon: <Star className="w-8 h-8 text-brand-emerald-500" />,
      title: "Luxury Amenities",
      description: "World-class facilities and amenities to enhance your comfort and enjoyment."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Logo */}
        <div className="flex justify-center mb-16">
          <img 
            src="/src/assets/images/logo_no_bg.png" 
            alt="Olempiaus Gardens Hotel Logo" 
            className="rounded-full object-cover"
            style={{ width: '7rem', height: '7rem' }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
             
              <h2 className="text-sm font-semibold text-brand-green-600 uppercase tracking-wider mb-4">
                About Olempiaus
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Where Elegance Meets 
                <span className="text-brand-bronze-600"> Comfort</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                For over two decades, Paxman has been synonymous with refined luxury and 
                impeccable service. Our commitment to excellence has earned us recognition 
                as one of the world's premier hospitality destinations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every corner of our establishment tells a story of craftsmanship, attention 
                to detail, and a passion for creating moments that last a lifetime.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-brand-green-600 mb-2">25+</div>
                <div className="text-sm text-gray-600 font-medium">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-brand-green-600 mb-2">50K+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Guests</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-brand-green-600 mb-2">98%</div>
                <div className="text-sm text-gray-600 font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop"
                alt="Elegant hotel interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-gold-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-brand-gold-600 fill-current" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">5-Star Rating</div>
                  <div className="text-xs text-gray-600">Consistently rated excellent</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => (
            <div key={index} className="group text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-brand-emerald-50 rounded-full flex items-center justify-center group-hover:bg-brand-emerald-100 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;