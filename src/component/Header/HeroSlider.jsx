import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';
import { Heart, ShieldCheck } from 'lucide-react';

const HeroSlider = () => {
  const { sliders } = useLoaderData();
  const sliderData = sliders;

  const bookNowBtn = id => {
    const data = sliderData.find(item => item.id == id);
    // console.log(data);
    toast.success(`Booking Under Proccessing for ${data.title} !`, {
      style: {
        background: 'accent',
        color: 'secondery',
        fontWeight: 'bold',
      },
      icon: '🐾',
    });
  };

  return (
    <div className="w-full relative h-[250px] md:h-[600px] lg:h-[70vh] overflow-hidden">
      <div className="bg-[#264653] text-white py-3 shadow-lg z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-semibold text-sm sm:text-base flex items-center justify-center space-x-4">
            <span className="flex items-center">
              <ShieldCheck
                size={18}
                className="text-[#F4A261] mr-2 flex-shrink-0"
              />
              **Winter-Proof Guarantee:** Pet Safety is Our Priority
            </span>
            <span className="hidden sm:inline-flex items-center text-gray-300">
              |
            </span>
            <span className="hidden sm:inline-flex items-center">
              <Heart size={18} className="text-[#F4A261] mr-2 flex-shrink-0" />
              Booking Open for December!
            </span>
          </p>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-full "
      >
        {sliderData.map(slide => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center "
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-[#264653]/60 flex items-center justify-center">
                <div
                  className="text-center text-white max-w-4xl p-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h1 className="text-xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-xl font-light mb-3 md:mb-8 text-gray-100">
                    {slide.subtitle}
                  </p>

                  <button
                    onClick={() => bookNowBtn(slide.id)}
                    className="btn btn-sm md:btn-lg bg-[#F4A261] hover:bg-[#E76F51] text-white text-sm md:text-2xl font-bold py-3 px-3 md:px-10 rounded-full border-none shadow-xl transition duration-300 transform hover:scale-[1.03]"
                  >
                    Book Now
                  </button>
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
