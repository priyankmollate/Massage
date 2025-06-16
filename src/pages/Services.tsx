import React from 'react';

const SERVICES = [
  {
    name: 'Foot & Body Massage',
    description: 'Relax and rejuvenate with our signature foot and body massage, tailored to your needs.',
    image: 'https://cdn.pixabay.com/photo/2014/03/11/22/57/wellness-285589_1280.jpg',
  },
  {
    name: 'Reflexology Foot Massage',
    description: 'Targeted pressure points for total body wellness and relaxation.',
    image: 'https://cdn.pixabay.com/photo/2023/04/25/05/51/therapy-7949513_1280.jpg',
  },
  {
    name: 'Aromatherapy Massage',
    description: 'Soothing scents and gentle touch to calm your mind and body.',
    image: 'https://cdn.pixabay.com/photo/2024/07/30/13/41/ai-generated-8932301_1280.jpg',
  },
  {
    name: 'Swedish Massage',
    description: 'Classic technique for deep relaxation and stress relief.',
    image: 'https://cdn.pixabay.com/photo/2021/09/07/15/24/cupping-therapy-6604217_1280.jpg',
  },
  {
    name: 'Deep Tissue Massage',
    description: 'Release chronic tension and pain with focused deep tissue work.',
    image: 'https://cdn.pixabay.com/photo/2024/07/30/13/41/ai-generated-8932301_1280.jpg',
  },
  {
    name: 'Hot Stone Massage',
    description: 'Warm stones melt away stress and promote deep muscle relaxation.',
    image: 'https://cdn.pixabay.com/photo/2014/07/11/09/03/massage-389727_1280.jpg',
  },
];

const Services = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center bg-[#f6f1e7]">
      <div className="max-w-5xl w-full py-12 sm:py-16 px-4">
        <h1 className="text-4xl sm:text-5xl font-serif font-light text-[#662E26] text-center mb-8 sm:mb-12">Our Massage Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="relative rounded-lg shadow-lg overflow-hidden h-64 flex items-end"
              style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 p-6 w-full">
                <h2 className="text-2xl font-serif font-semibold text-white mb-2 drop-shadow-lg">{service.name}</h2>
                <p className="text-white text-base drop-shadow-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 