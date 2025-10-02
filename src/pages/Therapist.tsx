const Therapist = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-[#f6f1e7] via-[#f8f4f0] to-[#f0ebe5]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2CAC76]/10 to-[#cbb89d]/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-[#662E26] mb-6">
              Our Therapists
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet our team of highly qualified Registered Massage Therapists (RMTs) 
              who are dedicated to your health and wellness journey.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* RMT Overview */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-[#2CAC76] to-[#228B5A] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-4xl font-serif font-light text-[#662E26] mb-6">What is an RMT?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              RMT stands for <strong>Registered Massage Therapist</strong> under CMTO regulation in Ontario. 
              RMTs are regulated health professionals trained in therapeutic massage techniques to relieve pain, 
              improve circulation, and support overall well-being.
            </p>
          </div>
        </div>


        {/* What RMTs Can Do */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-light text-[#662E26] mb-6">What RMTs Can Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our RMTs are qualified to provide comprehensive therapeutic care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#2CAC76] to-[#228B5A] rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Pain Relief</h3>
              <p className="text-white/90">Targeted treatment for acute and chronic pain conditions</p>
            </div>

            <div className="bg-gradient-to-br from-[#cbb89d] to-[#b8a082] rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Circulation</h3>
              <p className="text-white/90">Improve blood flow and lymphatic drainage</p>
            </div>

            <div className="bg-gradient-to-br from-[#2CAC76] to-[#228B5A] rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Stress Reduction</h3>
              <p className="text-white/90">Relaxation techniques and tension release</p>
            </div>

            <div className="bg-gradient-to-br from-[#cbb89d] to-[#b8a082] rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Assessment</h3>
              <p className="text-white/90">Professional evaluation and treatment planning</p>
            </div>

            <div className="bg-gradient-to-br from-[#2CAC76] to-[#228B5A] rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Rehabilitation</h3>
              <p className="text-white/90">Support recovery from injuries and surgeries</p>
            </div>

            <div className="bg-gradient-to-br from-[#cbb89d] to-[#b8a082] rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Wellness</h3>
              <p className="text-white/90">Preventive care and overall health maintenance</p>
            </div>
          </div>
        </div>

        {/* Why Choose Our RMTs */}
        <div className="bg-gradient-to-r from-[#2CAC76] to-[#228B5A] rounded-3xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-light mb-6">Why Choose Our RMTs?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">Experience the difference that professional, regulated care makes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Licensed</h3>
              <p className="text-white/90">All therapists are registered with CMTO</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced</h3>
              <p className="text-white/90">Years of clinical practice and expertise</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Compassionate</h3>
              <p className="text-white/90">Caring approach to your health and comfort</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional</h3>
              <p className="text-white/90">Maintains highest standards of practice</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <h2 className="text-4xl font-serif font-light text-[#662E26] mb-4">Ready to Experience Professional Care?</h2>
            <p className="text-xl text-gray-600 mb-8">Book your appointment with one of our qualified RMTs today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:437-535-6888"
                className="bg-gradient-to-r from-[#2CAC76] to-[#228B5A] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all"
              >
                Call Us: 437-535-6888
              </a>
              <a 
                href="mailto:ayanahealth7300@gmail.com"
                className="border-2 border-[#2CAC76] text-[#2CAC76] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2CAC76] hover:text-white transition-all"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapist;