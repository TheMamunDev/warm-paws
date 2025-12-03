import React from 'react';
import {
  Heart,
  Shield,
  Users,
  Clock,
  CheckCircle,
  Award,
  Smile,
} from 'lucide-react';
import { useNavigate } from 'react-router';
import usePageTitle from '../../Hooks/useTitle';

const About = () => {
  usePageTitle('About Us | WarmPaws');
  const navigate = useNavigate();
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Miller',
      role: 'Chief Veterinarian',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      bio: 'With over 15 years of experience, Sarah leads our medical safety protocols and ensures every pet gets top-tier care.',
    },
    {
      id: 2,
      name: 'Mark Jenkins',
      role: 'Head Trainer',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Certified behaviorist specializing in positive reinforcement. Mark helps pets build confidence and good habits.',
    },
    {
      id: 3,
      name: 'Lisa Chen',
      role: 'Senior Grooming Stylist',
      image: 'https://randomuser.me/api/portraits/women/22.jpg',
      bio: 'An artist with scissors, Lisa transforms messy coats into masterpieces while keeping pets calm and comfortable.',
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Operations Manager',
      image: 'https://randomuser.me/api/portraits/men/76.jpg',
      bio: 'James ensures the booking process is smooth and that our team is always where they need to be, on time.',
    },
  ];
  const stats = [
    { label: 'Happy Pets Served', value: '5,000+', icon: Smile },
    { label: 'Verified Experts', value: '120+', icon: Users },
    { label: 'Years of Service', value: '10+', icon: Clock },
    { label: '5-Star Reviews', value: '98%', icon: StarIcon }, // Defined below
  ];

  return (
    <div className="bg-white max-w-11/12 mx-auto min-h-screen font-sans text-gray-800">
      <div className="relative bg-[#264653] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://www.transparenttextures.com/patterns/cubes.png"
            alt="pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative  text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            We Believe Every Pet Deserves{' '}
            <span className="text-[#F4A261]">Royal Treatment</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            More than just a service platform, we are a community of animal
            lovers dedicated to making pet care safer, easier, and more joyful
            for everyone.
          </p>
        </div>
      </div>
      <div className="py-20 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F4A261] rounded-full opacity-20 blur-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop"
              alt="Our Story"
              className="relative rounded-3xl shadow-2xl w-full object-cover z-10 hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-teal-100 p-3 rounded-full text-[#264653]">
                  <Award size={32} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">#1 Rated</p>
                  <p className="text-sm text-gray-500">Pet Care Platform</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-[#F4A261] font-bold tracking-wide uppercase text-sm">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#264653]">
              From a Passion Project to a Pet Care Revolution
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              It all started with a simple problem: finding reliable, loving
              care for our own furry friends was harder than it should be. We
              wanted a place where safety wasn't a concern and quality was
              guaranteed.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Today, we connect thousands of pet parents with certified
              professionals. Whether it's a winter coat fitting or a medical
              checkup, we ensure every service is performed with love and
              expertise.
            </p>

            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#F4A261] w-6 h-6" />
                <span className="font-medium text-gray-700">
                  100% Background Checked Professionals
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#F4A261] w-6 h-6" />
                <span className="font-medium text-gray-700">
                  Comprehensive Insurance Coverage
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#F4A261] w-6 h-6" />
                <span className="font-medium text-gray-700">
                  24/7 Support for Pet Parents
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-16">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-50 text-[#264653] rounded-full mb-4">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-3xl font-bold text-[#264653] mb-1">
                  {stat.value}
                </h3>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#F4A261] font-bold tracking-wide uppercase text-sm">
            Our Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#264653] mt-2">
            Meet the Minds Behind the Care
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our diverse team of veterinarians, trainers, and specialists work
            together to set the highest standards in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <div key={member.id} className="group text-center">
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-[#F4A261] rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg mx-auto grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-[#F4A261] font-medium text-sm mb-3">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed px-2">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#264653] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Heart className="w-12 h-12 text-[#F4A261] mx-auto mb-6 fill-current" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Give Your Pet the Best?
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Join thousands of happy pet parents who trust us with their best
            friends. Experience care that treats your pet like family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/services')}
              className="bg-[#F4A261] hover:bg-[#e08c4b] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
            >
              Book a Service
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#264653] text-white font-bold py-4 px-8 rounded-full transition-colors"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const StarIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#F4A261"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default About;
