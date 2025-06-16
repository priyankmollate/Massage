const TEAM = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Massage Therapist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Specializes in deep tissue and Swedish massage. Passionate about holistic wellness and client care.'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Reflexologist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Expert in reflexology and aromatherapy. Dedicated to helping clients achieve balance and relaxation.'
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Wellness Coach',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Guides clients through personalized wellness programs and mindfulness practices.'
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Spa Specialist',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Focuses on spa treatments and skin therapies for total rejuvenation.'
  },
];

const Team = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center bg-[#f6f1e7]">
      <div className="max-w-5xl w-full py-12 sm:py-16 px-4">
        <h1 className="text-4xl sm:text-5xl font-serif font-light text-[#662E26] text-center mb-8 sm:mb-12">Meet Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {TEAM.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow p-8 flex flex-col items-center text-center">
              <img src={member.image} alt={member.name} className="h-32 w-32 rounded-full object-cover mb-4 border-4 border-[#2CAC76] shadow-md" />
              <h2 className="text-2xl font-serif font-medium text-[#662E26] mb-1">{member.name}</h2>
              <div className="text-[#2CAC76] font-semibold mb-2">{member.role}</div>
              <p className="text-gray-700 text-base mb-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team; 