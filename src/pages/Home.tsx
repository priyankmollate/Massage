import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

// Unsplash images similar to the reference
const HERO_BG = 'https://cdn.pixabay.com/photo/2023/10/28/11/21/ai-generated-8347190_1280.png';
const ABOUT_IMG1 = 'https://cdn.pixabay.com/photo/2021/09/07/15/24/cupping-therapy-6604217_1280.jpg';
const ABOUT_IMG2 = 'https://cdn.pixabay.com/photo/2014/03/11/22/57/wellness-285589_1280.jpg';

const Home = () => {
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

        {/* About/Intro Section */}
        <section className="bg-[#cbb89d] py-12 sm:py-16 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-white mb-4">Beyond <span className="italic font-medium">Blissed</span></h2>
              <p className="text-white text-lg mb-4">At Ayana Life Health Clinic, we believe that physical and mental well-being go hand in hand. We don't just offer a brief escape from the daily grind; we offer a lifestyle change. When you regularly make time for yourself, your bliss can bless every part of your life with more energy and peace.</p>
              <p className="text-white text-base">Sign up now for our wide variety of fitness programs and wellness therapies!</p>
            </div>
            <div className="flex flex-col gap-4">
              <img src={ABOUT_IMG1} alt="Wellness 1" className="rounded-lg shadow-md w-full h-40 sm:h-48 object-cover" />
              <img src={ABOUT_IMG2} alt="Wellness 2" className="rounded-lg shadow-md w-full h-40 sm:h-48 object-cover" />
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