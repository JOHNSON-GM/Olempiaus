import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Business Executive",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      content: "Absolutely exceptional service from start to finish. Every detail was perfect, and the staff went above and beyond to ensure our comfort. The rooms are beautifully appointed and the location is ideal.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Travel Blogger",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      content: "I've stayed at luxury hotels around the world, and Paxman truly stands out. The attention to detail is remarkable, and the personalized service made our anniversary celebration unforgettable.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Corporate Lawyer",
      avatar: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      content: "Perfect for business travelers. The executive suites are spacious and well-equipped for work, while the amenities help you unwind after a long day. The concierge service is top-notch.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-brand-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Logo */}
        <div className="flex justify-center mb-4">
          <img 
            src="/src/assets/images/logo_no_bg.png" 
            alt="Olempiaus Gardens Hotel Logo" 
            className="rounded-full object-cover"
            style={{ width: '7rem', height: '7rem' }}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-green-600 uppercase tracking-wider mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued guests have to say 
            about their experiences with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-brand-emerald-500 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white fill-current" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-gold-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h4 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Happy Guests
            </h4>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the luxury and service that has earned us countless five-star reviews. 
              Book your stay today and create your own unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-bronze-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-bronze-600 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                Book Your Experience
              </button>
              <button className="bg-transparent border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-brand-green-500 hover:text-brand-green-600 transition-all duration-300">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;