import { useState } from 'react';

const contactInfo = {
  address: '7300 Warden Ave. Suite 110A, Markham, Ontario L3R 9Z6',
  phone: '(555) 123-4567',
  email: 'info@ayanalifehealth.com',
  hours: [
    'Monday - Friday: 8:00 AM - 6:00 PM',
    'Saturday: 9:00 AM - 2:00 PM',
    'Sunday: Closed',
  ],
};

const CONTACT_IMG = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-screen min-h-screen flex justify-center bg-[#f6f1e7]">
      <div className="max-w-5xl w-full py-12 sm:py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Contact Info & Image */}
        <div className="flex flex-col gap-8 order-2 md:order-1">
          <img src={CONTACT_IMG} alt="Contact" className="rounded-lg shadow-md w-full h-64 object-cover mb-8 md:mb-0" />
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#662E26] mb-4">Get In Touch</h2>
            <ul className="space-y-4 text-[#662E26] text-lg">
              <li className="flex items-center gap-3"><span className="material-icons">location_on</span>{contactInfo.address}</li>
              <li className="flex items-center gap-3"><span className="material-icons">email</span>{contactInfo.email}</li>
              <li className="flex items-center gap-3"><span className="material-icons">phone</span>{contactInfo.phone}</li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-[#662E26] mb-2">Hours</h3>
              <ul className="space-y-1 text-[#662E26] text-base">
                {contactInfo.hours.map((hour) => (
                  <li key={hour}>{hour}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow p-8 order-1 md:order-2">
          <h2 className="text-2xl font-serif font-medium text-[#662E26] mb-6 text-center">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#662E26]">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2CAC76] focus:ring-[#2CAC76]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#662E26]">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2CAC76] focus:ring-[#2CAC76]"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#662E26]">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2CAC76] focus:ring-[#2CAC76]"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[#662E26]">Subject</label>
              <select
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2CAC76] focus:ring-[#2CAC76]"
              >
                <option value="">Select a subject</option>
                <option value="appointment">Schedule an Appointment</option>
                <option value="information">Request Information</option>
                <option value="feedback">Provide Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#662E26]">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2CAC76] focus:ring-[#2CAC76]"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full bg-[#2CAC76] text-white font-semibold text-lg shadow hover:bg-[#249c62] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 