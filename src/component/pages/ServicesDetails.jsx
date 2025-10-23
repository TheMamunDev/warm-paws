import React, { useState, useEffect } from 'react';

import {
  DollarSign,
  Clock,
  User,
  Calendar,
  AlertTriangle,
  Star,
} from 'lucide-react';
import { NavLink, useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';

const ServicesDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const allServicesData = useLoaderData();
  const service = allServicesData.find(s => s.serviceId === Number(id));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

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

  if (!service) {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[#FAF9F6]">
      <div className="mb-6 text-sm text-gray-500">
        <NavLink
          to="/services"
          className="hover:text-[#F4A261] transition duration-200"
        >
          ← Back to All Services
        </NavLink>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white p-8 rounded-xl shadow-2xl">
        <div className="lg:col-span-2">
          <figure className="h-96 overflow-hidden rounded-xl shadow-lg mb-8">
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-full object-cover"
            />
          </figure>

          <h1 className="text-4xl font-extrabold text-[#264653] mb-3">
            {service.serviceName}
          </h1>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 ">
              <div className="badge badge-lg bg-[#264653] text-white font-medium border-none">
                {service.category}
              </div>
              <div className="flex items-center text-[#F4A261] font-semibold">
                <Star
                  size={20}
                  fill="#F4A261"
                  strokeWidth={0}
                  className="mr-1"
                />
                <span className="text-lg">
                  {service.rating} ({service.provider} customers)
                </span>
              </div>
            </div>
            <div className="flex items-center text-[#264653] font-extrabold">
              <span className="text-xl"> $ ({service.price} )</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#264653] mb-3 border-b pb-2">
            About This Service
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {service?.description}
          </p>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-[#264653]">
            <p className="font-semibold text-[#264653]">Provided by:</p>
            <p className="text-gray-700">{service.providerName}</p>
          </div>
        </div>

        <div className="lg:col-span-1 p-6 bg-gray-50 rounded-xl shadow-lg border-t-4 border-[#F4A261] h-fit top-20">
          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label pt-0">
                <span className="label-text text-[#264653]">Your Name</span>
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
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
