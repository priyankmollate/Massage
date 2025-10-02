const PricesClaims = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-[#f6f1e7] via-[#f8f4f0] to-[#f0ebe5]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2CAC76]/10 to-[#cbb89d]/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-[#662E26] mb-6">
              Prices & Claims
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transparent pricing and hassle-free insurance billing. We work with major insurance companies to make your wellness journey as smooth as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Direct Billing Benefits */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-light text-[#662E26] mb-6">Direct Billing Benefits</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We work with major insurance companies to offer direct billing for massage therapy treatments, so you can skip the upfront payment and let us handle the paperwork. Our direct billing massage therapy services are designed to help you feel better while enjoying a smooth, hassle-free insurance experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2CAC76] to-[#228B5A] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#662E26] mb-3">No Upfront Payment</h3>
              <p className="text-gray-600">Skip the upfront payment and let us handle the billing directly with your insurance.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2CAC76] to-[#228B5A] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#662E26] mb-3">We Handle Paperwork</h3>
              <p className="text-gray-600">Our team takes care of all the insurance paperwork and claim submissions for you.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2CAC76] to-[#228B5A] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#662E26] mb-3">Faster Processing</h3>
              <p className="text-gray-600">Direct billing means faster claim processing and quicker reimbursement.</p>
            </div>
          </div>
        </div>

        {/* How to Apply Insurance */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-light text-[#662E26] mb-6">How to Apply Insurance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Follow these simple steps to use your insurance benefits for massage therapy</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Steps 1-3 */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#f6f1e7] to-[#e8ddd4] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2CAC76] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-2xl font-serif text-[#662E26] mb-4">Check Your Insurance Card</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Look for details such as your policy number, certificate/member ID, and coverage type (e.g., massage therapy, acupuncture, osteopathy). These numbers are required to process direct billing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#f6f1e7] to-[#e8ddd4] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2CAC76] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-2xl font-serif text-[#662E26] mb-4">Confirm Your Coverage</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Not all plans cover every service or allow direct billing. Call your insurance provider or check your plan details to confirm coverage amounts, session limits, and if a doctor's note is required.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#f6f1e7] to-[#e8ddd4] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2CAC76] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-2xl font-serif text-[#662E26] mb-4">Fill Out Health Intake Form</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Complete your intake form before your appointment. This saves time at the clinic and ensures your therapist has your health history and insurance information ready for billing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps 4-5 */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#f6f1e7] to-[#e8ddd4] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2CAC76] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-2xl font-serif text-[#662E26] mb-4">Bring Insurance Card and ID</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Present your insurance card and a valid piece of ID at the front desk. If you're on a family plan, make sure the cardholder's information is also available.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#f6f1e7] to-[#e8ddd4] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2CAC76] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">5</div>
                  <div>
                    <h3 className="text-2xl font-serif text-[#662E26] mb-4">Relax, We Handle the Claim</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      If your plan supports direct billing, we'll submit the claim for you and you only pay the difference if any. If direct billing is not available for your plan, we'll provide an official invoice so you can submit it to your insurance company for reimbursement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#2CAC76] to-[#228B5A] rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-serif font-light mb-4">Ready to Use Your Insurance?</h2>
            <p className="text-xl mb-8 opacity-90">Contact us to verify your coverage and book your appointment</p>
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

export default PricesClaims;
