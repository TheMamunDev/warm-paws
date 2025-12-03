import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Heart, Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router';

const ReletedService = ({ relatedServices }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
      >
        {relatedServices.map(item => (
          <SwiperSlide key={item.id} className="!h-auto">
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer h-full flex flex-col">
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.serviceName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm hover:text-red-500 transition-colors">
                  <Heart size={16} />
                </div>
                <span className="absolute top-3 left-3 bg-[#264653] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <Link to={`/services-details/${item.serviceId}`}>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-[#F4A261] transition-colors">
                      {item.serviceName}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-1">
                    {item.providerName}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">
                        {item.rating}
                      </span>
                    </div>
                    <div className="text-lg font-bold text-[#264653]">
                      ${item.price}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReletedService;
