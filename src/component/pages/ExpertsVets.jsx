import React from 'react';
import { Mail, Briefcase, PlusCircle } from 'lucide-react';

// --- Mock Data (As defined above) ---
const vetData = [
  {
    id: 1,
    name: 'Dr. Anya Sharma, DVM',
    title: 'Lead Winter Wellness Specialist',
    specialty: 'Small Animal Internal Medicine, Cold Weather Safety',
    image: 'https://i.ibb.co.com/b5vzk8jb/Hero-image-mobile-consultation.webp',
  },
  {
    id: 2,
    name: 'Dr. Ben Carter, VMD',
    title: 'Pediatric & Geriatric Care Advisor',
    specialty: 'Orthopedics, Senior Pet Mobility in Winter',
    image: 'https://i.ibb.co.com/SDk6KtnF/image-41557-800.jpg',
  },
  {
    id: 3,
    name: 'Dr. Lena Khan, DVM',
    title: 'Nutrition and Paw Health Expert',
    specialty: 'Dermatology, Cold-related Skin Issues',
    image: 'https://i.ibb.co.com/1G1BTJ6H/21087839741649319434.jpg',
  },
];

const ExpertsVets = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div
        className="text-center mb-16"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <h2 className="inline-block text-4xl font-extrabold text-secondary mb-3 pb-2 border-b-3 border-[#F4A261] hover:border-[#E76F51] transition-colors duration-200">
          Meet Our Expert WarmPaws Vets
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Trusted advice and care from leading veterinary specialists focused on
          winter pet health and safety.
        </p>
      </div>

      {/* Vets Profile Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vetData.map((vet, index) => (
          // Vet Card: Clean, professional, with a warm border accent
          <div
            key={vet.id}
            className="bg-white p-6 rounded-xl shadow-2xl border-b-4 border-[#F4A261] transform hover:shadow-2xl transition duration-500 h-full flex flex-col items-center text-center"
            // Staggered AOS animation
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="1000"
          >
            {/* Profile Image (Rounded and Elegant) */}
            <figure className="mb-6 w-32 h-32">
              <img
                src={vet.image}
                alt={vet.name}
                className="w-full h-full object-cover rounded-full ring-4 ring-[#264653] shadow-lg" // Dark Teal ring
              />
            </figure>

            {/* Text Content */}
            <h3 className="text-2xl font-bold text-[#264653] mt-2 mb-1">
              {vet.name}
            </h3>
            <p className="text-lg text-[#F4A261] font-semibold mb-3">
              {vet.title}
            </p>

            {/* Specialty (Subtle and Professional) */}
            <div className="flex items-center text-sm text-gray-600 mb-4 border-t border-gray-100 pt-3">
              <Briefcase size={16} className="mr-2 text-gray-500" />
              <p className="italic">{vet.specialty}</p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-auto w-full space-y-3">
              <button className="btn bg-[#F4A261] hover:bg-[#E76F51] text-white font-semibold border-none shadow-md w-full">
                <PlusCircle size={18} />
                Book Consultation
              </button>
              <button className="btn btn-outline border-[#264653] text-[#264653] hover:bg-[#264653] hover:text-white transition duration-300 w-full">
                <Mail size={18} />
                Contact Directly
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertsVets;
