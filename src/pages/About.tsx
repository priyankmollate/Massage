import React from 'react';

const ABOUT_IMG1 = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80';
const ABOUT_IMG2 = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80';
const HISTORY_IMG = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80';

const About = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center bg-[#f6f1e7]">
      <div className="max-w-5xl w-full flex flex-col gap-12 py-12 sm:py-16 px-4">
        {/* Mission Section */}
        <section className="bg-[#cbb89d] rounded-lg shadow p-8 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-serif font-light text-white mb-6">Our Mission</h1>
            <p className="text-white text-lg mb-4">At Ayana Life Health, our mission is to provide exceptional wellness and massage services that improve the quality of life for our clients. We are committed to delivering personalized, compassionate care while maintaining the highest standards of excellence.</p>
            <p className="text-white text-base">We believe in a holistic approach to wellness, focusing not only on relaxation but also on prevention and self-care. Our team of experienced professionals works together to ensure that each client receives comprehensive, coordinated care tailored to their individual needs.</p>
          </div>
          <img src={ABOUT_IMG1} alt="Our Mission" className="rounded-lg shadow-md w-full h-48 sm:h-64 object-cover" />
        </section>

        {/* Values Section */}
        <section className="bg-white rounded-lg shadow p-8 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <img src={ABOUT_IMG2} alt="Our Values" className="rounded-lg shadow-md w-full h-48 sm:h-64 object-cover order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#662E26] mb-4">Our Values</h2>
            <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
              <li>Compassionate, client-centered care</li>
              <li>Holistic wellness and prevention</li>
              <li>Continuous learning and improvement</li>
              <li>Integrity and professionalism</li>
              <li>Community and connection</li>
            </ul>
          </div>
        </section>

        {/* History Section */}
        <section className="bg-[#cbb89d] rounded-lg shadow p-8 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-white mb-4">Our History</h2>
            <p className="text-white text-lg mb-4">Founded in 2008, Ayana Life Health has grown from a small practice to a comprehensive wellness clinic serving our community. Our journey has been marked by continuous growth, innovation, and an unwavering commitment to excellence in client care.</p>
            <p className="text-white text-base">Over the years, we have expanded our services, incorporated new wellness techniques, and assembled a team of highly skilled professionals. Despite our growth, we have maintained our core values and commitment to providing personalized, compassionate care to each client.</p>
          </div>
          <img src={HISTORY_IMG} alt="Our History" className="rounded-lg shadow-md w-full h-48 sm:h-64 object-cover" />
        </section>
      </div>
    </div>
  );
};

export default About; 