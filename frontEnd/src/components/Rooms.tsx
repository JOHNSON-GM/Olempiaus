import React from 'react';
import { Wifi, Tv, Car, Coffee, Users, Bed } from 'lucide-react';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Executive Suite",
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      price: "From $299",
      occupancy: "2-3 Guests",
      size: "65 sqm",
      amenities: [
        { icon: <Wifi className="w-4 h-4" />, name: "Free WiFi" },
        { icon: <Tv className="w-4 h-4" />, name: "Smart TV" },
        { icon: <Coffee className="w-4 h-4" />, name: "Mini Bar" },
        { icon: <Car className="w-4 h-4" />, name: "Parking" }
      ],
      features: ["King-size bed", "City view", "Work desk", "Marble bathroom"]
    },
    {
      id: 2,
      name: "Presidential Suite",
      image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      price: "From $599",
      occupancy: "4-5 Guests",
      size: "120 sqm",
      amenities: [
        { icon: <Wifi className="w-4 h-4" />, name: "Free WiFi" },
        { icon: <Tv className="w-4 h-4" />, name: "Smart TV" },
        { icon: <Coffee className="w-4 h-4" />, name: "Premium Bar" },
        { icon: <Car className="w-4 h-4" />, name: "Valet Parking" }
      ],
      features: ["Separate living area", "Panoramic view", "Butler service", "Jacuzzi"]
    },
    {
      id: 3,
      name: "Deluxe Room",
      image: "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      price: "From $199",
      occupancy: "2 Guests",
      size: "45 sqm",
      amenities: [
        { icon: <Wifi className="w-4 h-4" />, name: "Free WiFi" },
        { icon: <Tv className="w-4 h-4" />, name: "Cable TV" },
        { icon: <Coffee className="w-4 h-4" />, name: "Coffee Maker" },
        { icon: <Car className="w-4 h-4" />, name: "Parking" }
      ],
      features: ["Queen bed", "Garden view", "Modern amenities", "Rain shower"]
    }
  ];

  return (
    <section id="rooms" className="py-20 lg:py-32 bg-white">
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
          <h1 className="text-3xl lg:text-4xl font-semibold text-brand-green-600 uppercase tracking-wider mb-4">
            Our Rooms
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Each room is thoughtfully designed to provide the ultimate in comfort and style, 
            featuring premium amenities and elegant furnishings.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-gray-900">{room.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{room.occupancy}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bed className="w-4 h-4" />
                      <span>{room.size}</span>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-2">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="text-brand-emerald-500">{amenity.icon}</div>
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Features</h5>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-brand-green-50 text-brand-green-700 text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button className="w-full bg-brand-bronze-500 text-white font-semibold py-3 rounded-lg hover:bg-brand-bronze-600 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-green-50 to-brand-emerald-50 rounded-2xl p-8 lg:p-12">
            <h4 className="text-3xl font-bold text-gray-900 mb-4">
              Can't decide? Let us help you choose
            </h4>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our expert concierge team is available 24/7 to help you select the perfect 
              accommodation for your stay.
            </p>
            <button className="bg-brand-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-green-700 transition-colors duration-300 hover:shadow-lg">
              Contact Concierge
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;