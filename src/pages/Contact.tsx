const contactInfo = {
  address: '7300 Warden Ave. Suite 110A, Markham, Ontario L3R 9Z6',
  phone: '437-535-6888',
  email: 'ayanahealth7300@gmail.com',
  wechat: 'AyanaHealth7300',
  whatsapp: '437-535-6888',
  instagram: 'https://instagram.com/ayanahealth7300',
};

import locationImg from '../assets/location.jpg';

export default function Contact() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-[#f6f1e7] via-[#f8f4f0] to-[#f0ebe5]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2CAC76]/10 to-[#cbb89d]/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-[#662E26] mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to start your wellness journey? We're here to help you find your path to better health.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Phone Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2CAC76] to-[#228B5A] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-[#662E26] mb-4">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak directly with our team</p>
            <a 
              href={`tel:${contactInfo.phone}`} 
              className="text-2xl font-bold text-[#2CAC76] hover:text-[#228B5A] transition-colors"
            >
              {contactInfo.phone}
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2CAC76] to-[#228B5A] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-[#662E26] mb-4">Email Us</h3>
            <p className="text-gray-600 mb-4">Send us a message anytime</p>
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="text-lg font-medium text-[#2CAC76] hover:text-[#228B5A] transition-colors break-all"
            >
              {contactInfo.email}
            </a>
          </div>

          {/* Social Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2CAC76] to-[#228B5A] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-[#662E26] mb-4">Connect</h3>
            <p className="text-gray-600 mb-4">Follow us on social media</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-[#2CAC76] text-lg">💬</span>
                <span className="text-gray-700">WeChat: {contactInfo.wechat}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#2CAC76] text-lg">📱</span>
                <a 
                  href={`https://wa.me/1${contactInfo.whatsapp.replace(/\D/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#2CAC76] hover:text-[#228B5A] transition-colors"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#2CAC76] text-lg">📷</span>
                <a 
                  href={contactInfo.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#2CAC76] hover:text-[#228B5A] transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-8">
          <h2 className="text-4xl font-serif font-light text-[#662E26] mb-6">Visit Our Clinic</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#2CAC76]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#2CAC76]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#662E26] mb-2">Address</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#f6f1e7] to-[#e8ddd4] rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-[#662E26] mb-3">Why Choose Our Location?</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-[#2CAC76]">✓</span>
                  Easy access from major highways
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2CAC76]">✓</span>
                  Free parking available
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2CAC76]">✓</span>
                  Public transit accessible
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2CAC76]">✓</span>
                  Wheelchair accessible entrance
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Map and Image Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Location Image */}
            <div className="relative flex items-center justify-center bg-white min-h-[400px]">
              <img 
                src={locationImg} 
                alt="Ayana Life Health Clinic Location" 
                className="max-w-full max-h-full object-contain"
                style={{ maxHeight: '400px', height: 'auto' }}
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Interactive Map */}
            <div className="p-6 lg:p-8">
              <h3 className="text-2xl font-serif text-[#662E26] mb-6">Find Us on the Map</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.123456789!2d-79.3275396!3d43.8280124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882d3e2e0b123456%3A0xabcdef1234567890!2s7300%20Warden%20Ave%2C%20Markham%2C%20ON%20L3R%209Z6%2C%20Canada!5e0!3m2!1sen!2sca!4v169"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ayana Life Health Clinic Location Map"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#2CAC76] to-[#228B5A] rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-serif font-light mb-4">Ready to Book Your Appointment?</h2>
            <p className="text-xl mb-8 opacity-90">Start your wellness journey today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="bg-white text-[#2CAC76] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now
              </a>
              <a 
                href={`https://wa.me/1${contactInfo.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#2CAC76] transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 