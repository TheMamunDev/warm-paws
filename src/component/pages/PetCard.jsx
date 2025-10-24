import { Star } from 'lucide-react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router';

const PetCard = ({ service, index }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewBtn = serviceId => {
    // console.log('clicked');
    navigate(`/services-details/${serviceId}`, {
      state: { from: location },
    });
  };

  return (
    <div>
      <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 flex flex-col h-full">
        <figure className="aspect-4/3 overflow-hidden">
          <img
            src={service.image}
            alt={service.serviceName}
            className="w-full h-full object-cover transition duration-500 hover:scale-110"
          />
        </figure>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-secondary hover:text-primary transition-colors duration-300 line-clamp-2">
            {service.serviceName}
          </h3>
          <h3 className="text-sm text-gray-500 mb-5">{service.providerName}</h3>

          <div className="flex justify-between items-center mt-auto border-t border-b border-accent py-2">
            <div className="flex items-center text-[#F4A261] font-semibold">
              <Star size={16} fill="#F4A261" strokeWidth={0} className="mr-1" />
              <span className="text-lg">{service.rating}</span>
            </div>
            <span className="text-2xl font-extrabold text-secondary">
              ${service.price}
            </span>
          </div>
        </div>

        <div className="p-6 pt-0">
          <button
            onClick={() => handleViewBtn(service.serviceId)}
            className="btn bg-[#F4A261] hover:bg-[#E76F51] text-white font-semibold border-none shadow-md transition duration-300 w-full"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
