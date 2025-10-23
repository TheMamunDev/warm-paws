import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import PetCard from './PetCard';

const PopularServices = () => {
  const { pets } = useLoaderData();
  const serviceData = pets.slice(0, 6);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 bg-background">
      <div
        className="text-center mb-12"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <h2 className="inline-block text-4xl font-extrabold text-secondary mb-3 pb-2 border-b-3 border-[#F4A261] hover:border-[#E76F51] transition-colors duration-200">
          Popular Winter Care Services
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Top-rated services to ensure warmth and well-being for your companion
          this season.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceData.map((service, index) => (
          <PetCard key={index} service={service} index={index}></PetCard>
        ))}
      </div>
      <div
        className="text-center mt-12"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <NavLink
          to="/services"
          className="btn btn-outline border-secondary text-secondary hover:bg-secondary hover:text-white transition duration-300 py-3 px-8 text-lg font-medium"
        >
          View All Winter Services →
        </NavLink>
      </div>
    </section>
  );
};

export default PopularServices;
