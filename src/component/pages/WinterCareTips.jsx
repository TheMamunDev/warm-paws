import React from 'react';
import { winterTipsData } from '../../utilis/Data/careTipsData';

const WinterCareTips = () => {
  const data = winterTipsData;
  return (
    <section className="bg-[#FAF9F6] py-20">
      {' '}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h2 className="inline-block text-4xl font-extrabold text-secondary mb-3 pb-2 border-b-3 border-[#F4A261] hover:border-[#E76F51] transition-colors duration-200">
            Essential Winter Care Tips 💡
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Quick, actionable advice from our experts to ensure your pet's
            winter safety and comfort.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((tip, index) => (
            <div
              key={tip.id}
              className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#F4A261] transform hover:shadow-xl transition duration-300 h-full flex flex-col justify-start"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="1000"
            >
              <div className="flex items-center mb-4">
                <tip.Icon
                  size={32}
                  className={`${tip.iconColor} mr-3 flex-shrink-0`}
                />
                <h3 className="text-xl font-bold text-[#264653]">
                  {tip.title}
                </h3>
              </div>

              <p className="text-gray-600 text-base font-light">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinterCareTips;
