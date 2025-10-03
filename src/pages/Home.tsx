import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

// Import massage images
import massage1 from '../assets/5月27日(4).jpg';
import massage2 from '../assets/5月27日(9).jpg';
import massage3 from '../assets/5月27日(15).jpg';
import massage4 from '../assets/5月27日(17).jpg';
import massage5 from '../assets/5月27日(27).jpg';
import massage6 from '../assets/5月27日(28).jpg';

const HERO_BG = 'https://cdn.pixabay.com/photo/2023/10/28/11/21/ai-generated-8347190_1280.png';

// Massage images array for carousel
const massageImages = [massage1, massage2, massage3, massage4, massage5, massage6];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === massageImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen min-h-screen flex justify-center bg-[#f6f1e7]">
      <div className="max-w-5xl w-full font-sans">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-4 py-20 sm:py-28 overflow-hidden">
          <img src={HERO_BG} alt="Massage background" className="absolute inset-0 w-full h-full object-cover object-center z-0" style={{ minHeight: '100%', minWidth: '100%' }} />
          <div className="absolute inset-0 bg-black/40 z-0" />
          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
            <img src={logo} alt="Ayana Life Health Clinic Logo" className="h-16 w-16 mb-8 rounded-full border-2 border-white shadow-lg" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-white mb-6 tracking-wide drop-shadow-lg">Find your <span className="italic font-medium">bliss</span></h1>
            <Link to="/contact" className="mt-2 px-8 py-3 border border-white text-white text-lg rounded-full font-serif tracking-wide bg-transparent hover:bg-white hover:text-[#2CAC76] transition-all duration-200">BOOK YOUR ESCAPE</Link>
          </div>
        </section>

        {/* About/Intro Section with Carousel - Redesigned */}
        <section className="bg-gradient-to-br from-[#cbb89d] via-[#d4c4a8] to-[#b8a082] py-16 sm:py-20 px-4 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Content Column */}
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="inline-block">
                    <span className="text-white/80 text-sm font-medium tracking-wider uppercase">Wellness Journey</span>
                    <div className="w-12 h-0.5 bg-white/60 mt-2"></div>
                  </div>
                  
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white leading-tight">
                    Beyond <span className="italic font-medium text-[#f8f6f0]">Blissed</span>
                  </h2>
                  
                  <p className="text-white/90 text-lg sm:text-xl leading-relaxed max-w-lg">
                    At Ayana Life Health Clinic, we believe that physical and mental well-being go hand in hand. We don't just offer a brief escape from the daily grind; we offer a lifestyle change.
                  </p>
                  
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-lg">
                    When you regularly make time for yourself, your bliss can bless every part of your life with more energy and peace.
                  </p>
                </div>
                
                {/* Call to Action */}
                <div className="pt-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#8b7355] font-medium rounded-full hover:bg-[#f8f6f0] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Book Consultation
                  </Link>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex items-center space-x-6 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-white/70 text-sm">Happy Clients</div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">5+</div>
                    <div className="text-white/70 text-sm">Years Experience</div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-white/70 text-sm">Therapies</div>
                  </div>
                </div>
              </div>
              
              {/* Carousel Column */}
              <div className="order-1 lg:order-2">
                <div className="relative group">
                  {/* Main Carousel Container */}
                  <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
                    {massageImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Massage therapy ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ${
                          index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                      />
                    ))}
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    
                    {/* Carousel Controls */}
                    <div className="absolute top-6 right-6 flex flex-col space-y-3">
                      {massageImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`group relative w-4 h-4 rounded-full transition-all duration-500 ease-out ${
                            index === currentImageIndex 
                              ? 'bg-white shadow-lg scale-110' 
                              : 'bg-white/40 hover:bg-white/70 border border-white/60 hover:scale-105'
                          }`}
                        >
                          {/* Active indicator ring */}
                          {index === currentImageIndex && (
                            <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse scale-150"></div>
                          )}
                          
                          {/* Hover effect */}
                          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
                          
                          {/* Tooltip */}
                          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                            Image {index + 1}
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-sm font-medium">
                        {currentImageIndex + 1} / {massageImages.length}
                      </span>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                </div>
                
                {/* Feature Highlights */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="text-white font-medium mb-2">Therapeutic Massage</h4>
                    <p className="text-white/70 text-sm">Professional healing touch</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="text-white font-medium mb-2">Hot Stone Therapy</h4>
                    <p className="text-white/70 text-sm">Deep relaxation & warmth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section className="py-16 bg-[#f6f1e7]">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#662E26] text-center mb-8 sm:mb-12">Get in Touch</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <p className="text-gray-700 text-lg mb-4">
                  Ready to experience the healing power of massage? Contact us to schedule your appointment or learn more about our services.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  <strong>Address:</strong> 7300 Warden Ave. Suite 110A, Markham, Ontario L3R 9Z6
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  <strong>Phone:</strong> (555) 123-4567
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  <strong>Email:</strong> info@ayanalifehealth.com
                </p>
              </div>
              <div className="flex-1 h-64 md:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.567890123456!2d-79.3275396!3d43.8280124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882d3e2e0b123456%3A0xabcdef1234567890!2s7300%20Warden%20Ave%2C%20Markham%2C%20ON%20L3R%209Z6%2C%20Canada!5e0!3m2!1sen!2sca!4v169"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ayana Life Health Clinic Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home; 