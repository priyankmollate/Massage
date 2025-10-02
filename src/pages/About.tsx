// High-quality images for massage therapy and posture improvement
const AYANA_MEANING_IMG = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80';
const POSTURE_THERAPY_IMG = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80';
const MASSAGE_TECHNIQUES_IMG = 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=80';
const CAREER_IMG = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80';
const HOLISTIC_APPROACH_IMG = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80';

const About = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center bg-[#f6f1e7]">
      <div className="max-w-6xl w-full flex flex-col gap-12 py-12 sm:py-16 px-4">
        
        {/* Ayana Meaning Section */}
        <section className="bg-gradient-to-r from-[#cbb89d] to-[#b8a082] rounded-lg shadow-lg p-8 sm:p-12">
          <div className="text-center mb-8">
            <h1 className="text-5xl sm:text-6xl font-serif font-light text-white mb-6">What is Ayana?</h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-white text-xl mb-6 leading-relaxed">
                Ayana Health Clinic takes its name from the word <strong>"Ayana,"</strong> meaning <em>"a route or path."</em> 
                We believe health is a journey, not a destination, and our mission is to guide every individual 
                along their unique path toward wellness.
              </p>
              <p className="text-white text-lg mb-6 leading-relaxed">
                With compassionate care, modern expertise, and holistic approaches, Ayana helps the community 
                restore balance, find relief from pain, and embrace healthier living.
              </p>
              <div className="bg-white/20 rounded-lg p-6">
                <h3 className="text-white text-2xl font-serif mb-4">Our Philosophy</h3>
                <p className="text-white text-lg">
                  Every person's wellness journey is unique. We provide personalized guidance, 
                  evidence-based treatments, and compassionate support to help you find your path to optimal health.
                </p>
              </div>
            </div>
            <img src={AYANA_MEANING_IMG} alt="Ayana - The Path to Wellness" className="rounded-lg shadow-md w-full h-80 object-cover" />
          </div>
        </section>

        {/* Posture and Pain Relief Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#662E26] mb-6">
              How Ayana Massage Therapy Improves Posture and Reduces Pain
            </h2>
            <div className="w-24 h-1 bg-[#2CAC76] mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            <div>
              <h3 className="text-2xl font-serif text-[#662E26] mb-6">Understanding Posture & Health</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-[#2CAC76] text-2xl mr-3">•</span>
                  <span>What defines good posture and common causes of imbalance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CAC76] text-2xl mr-3">•</span>
                  <span>How poor posture leads to pain and health issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CAC76] text-2xl mr-3">•</span>
                  <span>Massage benefits for muscles, fascia, flexibility, and circulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CAC76] text-2xl mr-3">•</span>
                  <span>The mind-body connection and stress reduction in postural health</span>
                </li>
              </ul>
            </div>
            <img src={POSTURE_THERAPY_IMG} alt="Posture Therapy and Pain Relief" className="rounded-lg shadow-md w-full h-80 object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <img src={MASSAGE_TECHNIQUES_IMG} alt="Massage Techniques" className="rounded-lg shadow-md w-full h-80 object-cover" />
            <div>
              <h3 className="text-2xl font-serif text-[#662E26] mb-6">Our Specialized Techniques</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-[#2CAC76] text-2xl mr-3">•</span>
                  <span><strong>Swedish Massage:</strong> Gentle, flowing strokes for relaxation and circulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CAC76] text-2xl mr-3">•</span>
                  <span><strong>Deep Tissue:</strong> Targeted pressure to release chronic muscle tension</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CAC76] text-2xl mr-3">•</span>
                  <span><strong>Myofascial Release:</strong> Gentle sustained pressure to release fascial restrictions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2CAC76] text-2xl mr-3">•</span>
                  <span><strong>Trigger Point Therapy:</strong> Focused pressure on specific muscle knots</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-gradient-to-r from-[#f6f1e7] to-[#e8ddd4] rounded-lg p-8">
            <h3 className="text-2xl font-serif text-[#662E26] mb-6 text-center">Long-term Benefits & Holistic Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-serif text-[#662E26] mb-4">Combined Approach</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Regular massage therapy sessions</li>
                  <li>• Targeted exercise and stretching</li>
                  <li>• Ergonomic workplace adjustments</li>
                  <li>• Mindful movement practices</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-serif text-[#662E26] mb-4">What to Expect</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Comprehensive posture assessment</li>
                  <li>• Personalized treatment plan</li>
                  <li>• Education on self-care techniques</li>
                  <li>• Ongoing support and guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Career Section */}
        <section className="bg-gradient-to-r from-[#2CAC76] to-[#228B5A] rounded-lg shadow-lg p-8 sm:p-12 text-white">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-white mb-6">Career Opportunities</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-serif font-light text-white mb-6">
                Embrace a New Paradigm in RMT Careers
              </h3>
              <p className="text-white text-xl mb-6 leading-relaxed">
                Ayana Health Clinic is a beacon for those pursuing RMT careers, offering more than just employment. 
                Here, your work as a massage therapist becomes a true calling—an <strong>Ayana</strong>, a path to both 
                personal and professional growth.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/20 rounded-lg p-6">
                  <h4 className="text-xl font-serif text-white mb-3">Why Choose Ayana?</h4>
                  <ul className="space-y-2 text-white">
                    <li>• Supportive, collaborative work environment</li>
                    <li>• Continuous professional development opportunities</li>
                    <li>• Competitive compensation and benefits</li>
                    <li>• State-of-the-art facilities and equipment</li>
                    <li>• Focus on work-life balance and wellness</li>
                  </ul>
                </div>
                
                <div className="bg-white/20 rounded-lg p-6">
                  <h4 className="text-xl font-serif text-white mb-3">Join Our Mission</h4>
                  <p className="text-white text-lg mb-6">
                    Be part of a team that's dedicated to helping others find their path to wellness. 
                    Your expertise and compassion can make a real difference in people's lives.
                  </p>
                  <div className="text-center">
                    <a 
                      href="mailto:ayanahealth7300@gmail.com?subject=RMT Career Application&body=Hello, I am interested in applying for an RMT position at Ayana Health Clinic. Please find my resume attached."
                      className="inline-block bg-white text-[#2CAC76] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img src={CAREER_IMG} alt="RMT Career Opportunities" className="rounded-lg shadow-md w-full h-96 object-cover" />
          </div>
        </section>

        {/* Holistic Approach Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#662E26] mb-6">Our Holistic Approach</h2>
            <div className="w-24 h-1 bg-[#2CAC76] mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <img src={HOLISTIC_APPROACH_IMG} alt="Holistic Wellness Approach" className="rounded-lg shadow-md w-full h-80 object-cover" />
            <div>
              <h3 className="text-2xl font-serif text-[#662E26] mb-6">Comprehensive Wellness Care</h3>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                At Ayana, we believe in treating the whole person, not just symptoms. Our holistic approach 
                combines traditional massage therapy with modern wellness practices to address the root causes 
                of pain and discomfort.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#2CAC76] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="text-lg font-serif text-[#662E26] mb-2">Assessment & Diagnosis</h4>
                    <p className="text-gray-700">Comprehensive evaluation of posture, movement patterns, and pain points</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#2CAC76] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="text-lg font-serif text-[#662E26] mb-2">Personalized Treatment</h4>
                    <p className="text-gray-700">Customized therapy plan based on individual needs and goals</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#2CAC76] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="text-lg font-serif text-[#662E26] mb-2">Education & Prevention</h4>
                    <p className="text-gray-700">Teaching self-care techniques and lifestyle modifications for lasting results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 