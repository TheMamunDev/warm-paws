import { Star } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router';

const PetCard = ({ service, index }) => {
  return (
    <div>
      <div
        className="card bg-white h-full shadow-xl rounded-xl overflow-hidden transform hover:shadow-2xl hover:scale-[1.02] transition duration-500 border border-gray-100"
        data-aos="fade-up"
        data-aos-delay={index * 150}
        data-aos-duration="1000"
      >
        <figure className="h-56 overflow-hidden">
          <img
            src={service.image}
            alt={service.serviceName}
            className="w-full h-full object-cover transition duration-500 hover:scale-110"
          />
        </figure>
        <div className="card-body p-6">
          <h3 className="card-title text-2xl font-bold text-secondary hover:text-primary transition-colors duration-300">
            {service.serviceName}
          </h3>
          <p className="text-sm text-gray-500 mb-3">{service.providerName}</p>
          <div className="flex justify-between items-center mb-4 border-t border-b border-accent py-2">
            <div className="flex items-center text-[#F4A261] font-semibold">
              <Star size={16} fill="#F4A261" strokeWidth={0} className="mr-1" />
              <span className="text-lg">{service.rating}</span>
            </div>
            <div className="text-2xl font-extrabold text-secondary">
              ${service.price}
            </div>
          </div>
          <div className="card-actions justify-end">
            <NavLink
              to={`/services-details/${service.serviceId}`}
              className="btn bg-[#F4A261] hover:bg-[#E76F51] text-white font-semibold border-none shadow-md transition duration-300 w-full"
            >
              View Details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
