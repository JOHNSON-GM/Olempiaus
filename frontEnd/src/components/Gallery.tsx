import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Elegant lobby",
      category: "Interior"
    },
    {
      src: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Luxury suite",
      category: "Rooms"
    },
    {
      src: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Hotel exterior",
      category: "Exterior"
    },
    {
      src: "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Deluxe room",
      category: "Rooms"
    },
    {
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Executive suite",
      category: "Rooms"
    },
    {
      src: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Fine dining",
      category: "Dining"
    },
    {
      src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Swimming pool",
      category: "Amenities"
    },
    {
      src: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Spa wellness",
      category: "Spa"
    }
  ];

  const categories = ['All', ...Array.from(new Set(images.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const maxIndex = filteredImages.length - 1;
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? maxIndex : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === maxIndex ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-gray-50">
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
            Gallery
          </h1>
          {/* <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            A Visual Journey
          </h3> */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our beautiful spaces and discover the luxury that awaits you 
            at every corner of our establishment.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brand-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-brand-green-50 hover:text-brand-green-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square bg-gray-200 rounded-xl overflow-hidden cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <h5 className="font-semibold text-gray-900 text-sm">{image.alt}</h5>
                  <p className="text-xs text-brand-emerald-600 font-medium">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-center">
                  <h5 className="font-semibold text-gray-900">{filteredImages[selectedImage].alt}</h5>
                  <p className="text-sm text-brand-emerald-600 font-medium">{filteredImages[selectedImage].category}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;