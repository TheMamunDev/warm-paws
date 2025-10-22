import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NavLink, useLoaderData } from 'react-router';


const HeroSlider = () => {
  const { sliders } = useLoaderData();
  const sliderData = sliders;
  return (
    <div className="w-full relative h-[600px] md:h-[700px] lg:h-[80vh] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {sliderData.map(slide => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-[#264653]/60 flex items-center justify-center">
                <div
                  className="text-center text-white max-w-4xl p-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
                    The{' '}
                    <span className="text-[#F4A261] drop-shadow-lg">
                      Warmest Winter
                    </span>{' '}
                    for Your Best Friend.
                  </h1>
                  <p className="text-lg md:text-xl font-light mb-8 text-gray-100">
                    {slide.subtitle}
                  </p>

                  <NavLink
                    to={'/'}
                    className="btn btn-lg bg-[#F4A261] hover:bg-[#E76F51] text-white text-sm md:text-2xl font-bold py-3 px-3 md:px-10 rounded-full border-none shadow-xl transition duration-300 transform hover:scale-[1.03]"
                  >
                    Book Now
                  </NavLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
