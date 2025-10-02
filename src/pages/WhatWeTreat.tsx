const WhatWeTreat = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-[#f6f1e7] via-[#f8f4f0] to-[#f0ebe5]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2CAC76]/10 to-[#cbb89d]/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-[#662E26] mb-6">
              What We Treat
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive massage therapy treatments for pain relief, wellness, and healing. 
              We address a wide range of conditions to help you find your path to better health.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Pain Types Overview */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-light text-[#662E26] mb-6">Understanding Pain Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pain is generally categorized into two main types—acute pain and chronic pain. 
              Understanding the difference helps us provide the most effective treatment for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#f6f1e7] to-[#e8ddd4] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#2CAC76] text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">A</div>
                <h3 className="text-3xl font-serif text-[#662E26]">Acute Pain</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                This type of pain often arises suddenly due to inflammation, tissue damage, injury, illness, or surgery. 
                It is typically short-term, lasting a few days to a couple of weeks, and usually resolves once the 
                underlying cause has been treated or healed.
              </p>
              <div className="mt-6 p-4 bg-white/50 rounded-lg">
                <p className="text-sm text-gray-600 font-medium">Examples: Cuts, sprains, broken bones, post-surgical pain</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#f6f1e7] to-[#e8ddd4] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#2CAC76] text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">C</div>
                <h3 className="text-3xl font-serif text-[#662E26]">Chronic Pain</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Unlike acute pain, chronic pain persists for three months or longer. It can continue even after the 
                original injury or illness has healed—or, in some cases, appear without a clear cause. Chronic pain 
                can significantly impact quality of life.
              </p>
              <div className="mt-6 p-4 bg-white/50 rounded-lg">
                <p className="text-sm text-gray-600 font-medium">Examples: Fibromyalgia, arthritis, ongoing back pain, migraines</p>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Pain & Discomfort */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2CAC76] to-[#228B5A] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif text-[#662E26] mb-4">Pain & Discomfort</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-[#f6f1e7] to-[#e8ddd4] rounded-xl p-4">
                <h4 className="text-lg font-semibold text-[#662E26] mb-2">Chronic Muscle Pain</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Fibromyalgia</li>
                  <li>• Low Back Pain</li>
                  <li>• Neck Pain</li>
                  <li>• Arm Pain</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-[#f6f1e7] to-[#e8ddd4] rounded-xl p-4">
                <h4 className="text-lg font-semibold text-[#662E26] mb-2">Headaches</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Tension Headaches</li>
                  <li>• Migraines</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-[#f6f1e7] to-[#e8ddd4] rounded-xl p-4">
                <h4 className="text-lg font-semibold text-[#662E26] mb-2">Tendinitis</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Tennis Elbow</li>
                  <li>• Golfer's Elbow</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-[#f6f1e7] to-[#e8ddd4] rounded-xl p-4">
                <h4 className="text-lg font-semibold text-[#662E26] mb-2">Other Conditions</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Muscle Ache & Tension</li>
                  <li>• Nerve Pain (Sciatica)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Wellness & Immunity */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2CAC76] to-[#228B5A] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif text-[#662E26] mb-4">Wellness & Immunity</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-[#f6f1e7] to-[#e8ddd4] rounded-xl p-4">
                <h4 className="text-lg font-semibold text-[#662E26] mb-2">Immune Support</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Sinusitis relief</li>
                  <li>• Rhinitis treatment</li>
                  <li>• Common cold recovery</li>
                  <li>• Detoxification support</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-[#f6f1e7] to-[#e8ddd4] rounded-xl p-4">
                <h4 className="text-lg font-semibold text-[#662E26] mb-2">Digestive Health</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Bloating relief</li>
                  <li>• Constipation support</li>
                  <li>• Digestive balance</li>
                  <li>• Energy restoration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Specialized Care */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-light text-[#662E26] mb-6">Specialized Care</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Tailored treatments for specific life stages and needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#2CAC76] to-[#228B5A] rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold mr-4">W</div>
                <h3 className="text-2xl font-serif">Women's Health</h3>
              </div>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Pre and post-natal discomfort
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Menstrual cramps relief
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  PMS symptoms management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Menopausal support
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#cbb89d] to-[#b8a082] rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold mr-4">C</div>
                <h3 className="text-2xl font-serif">Children's Care</h3>
              </div>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Gentle pediatric massage
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Growth-related discomfort
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Stress and anxiety relief
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Sleep improvement
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#2CAC76] to-[#228B5A] rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-serif font-light mb-4">Ready to Start Your Healing Journey?</h2>
            <p className="text-xl mb-8 opacity-90">Let us help you find relief and restore your well-being</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:437-535-6888"
                className="bg-white text-[#2CAC76] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Us: 437-535-6888
              </a>
              <a 
                href="mailto:ayanahealth7300@gmail.com"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#2CAC76] transition-colors"
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

export default WhatWeTreat;
