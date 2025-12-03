import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Star,
  CheckCircle,
  ShieldCheck,
  User,
  Heart,
  AlertTriangle,
} from 'lucide-react';
import { NavLink, useLoaderData, useParams } from 'react-router';
import usePageTitle from '../Hooks/useTitle';
import ReletedService from './ReletedService';
import { toast } from 'react-toastify';

const ServiceDetails = () => {
  const { id } = useParams();
  const allServicesData = useLoaderData();
  const service = allServicesData.find(s => s.serviceId === Number(id));

  usePageTitle(`${service?.serviceName} | WarmPaws`);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const relatedServices = allServicesData
    .filter(item => item.serviceId !== Number(id))
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  const handleBookingSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        `Booking confirmed for ${service.serviceName} for ${formData.name}!`,
        {
          style: {
            background: '#264653',
            color: '#F4A261',
            fontWeight: 'bold',
          },
          icon: '🐾',
        }
      );
      setFormData({ name: '', email: '' });
    }, 1000);
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!service || service === undefined) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center bg-[#FAF9F6] p-10">
        <AlertTriangle size={48} className="text-red-500 mb-4" />
        <h1 className="text-3xl font-bold text-[#264653]">Service Not Found</h1>
        <p className="text-gray-500 mt-2">
          The service ID {id} does not exist.
        </p>
        <NavLink to="/services" className="btn bg-[#F4A261] text-white mt-6">
          Back to Services
        </NavLink>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-sm font-semibold rounded-full mb-3">
                {service.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {service.serviceName}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-bold text-black">{service.rating}</span>
                  <span>({service.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {service.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {service.duration}
                </div>
              </div>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
              <img
                src={service.image}
                alt={service.serviceName}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                About This Service
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F4A261]" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
              <img
                src={service.providerImage}
                alt={service.providerName}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#F4A261]"
              />
              <div>
                <p className="text-sm text-gray-500">Service Provider</p>
                <h3 className="text-lg font-bold text-gray-900">
                  {service.providerName}
                </h3>
                <p className="text-sm text-teal-600 font-medium cursor-pointer hover:underline">
                  Contact Provider
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-[#264653] p-6 text-white">
                <p className="text-sm opacity-90">Service Price</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">${service.price}</span>
                  <span className="text-sm opacity-80">/ session</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-orange-600 bg-orange-50 p-2 rounded-lg border border-orange-100">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">
                    Only {service.slotsAvailable} slots left today!
                  </span>
                </div>
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="form-control">
                    <label className="label pt-0">
                      <span className="label-text text-[#264653]">
                        Your Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="input input-bordered w-full bg-white border-gray-300 focus:border-[#F4A261]"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label pt-0">
                      <span className="label-text text-[#264653]">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="input input-bordered w-full bg-white border-gray-300 focus:border-[#F4A261]"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-lg bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold border-none shadow-xl w-full mt-6 disabled:bg-gray-400"
                  >
                    {isSubmitting ? 'Processing...' : 'Book Now'}
                  </button>
                </form>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
                  <ShieldCheck className="w-4 h-4" />
                  Secure Payment & Satisfaction Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            More Services You Might Like
          </h2>
          <ReletedService relatedServices={relatedServices}></ReletedService>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
