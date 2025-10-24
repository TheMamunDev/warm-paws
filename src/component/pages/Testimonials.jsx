import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useLoaderData } from 'react-router';

const Testimonials = () => {
  const { testimonials } = useLoaderData();
  return (
    <section className="bg-[#FAF9F6] py-20">
      {' '}
      <div className="max-w-11/12 mx-auto ">
        <div
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h2 className="heading-h2">What Our Clients Say</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Real experiences from pet owners who trust WarmPaws with their
            companion's winter well-being.
          </p>
        </div>

        <div className="relative h-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet bg-gray-300',
              bulletActiveClass: 'bg-[#F4A261]',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="pb-12"
          >
            {testimonials.map(testimonial => (
              <SwiperSlide key={testimonial.id}>
                <div className="card-body border-b-4 flex flex-col h-full ">
                  <div className="flex justify-between items-center mb-4">
                    <Quote size={40} className="text-[#264653] opacity-20" />
                    <div className="flex items-center">
                      {Array(testimonial.rating)
                        .fill()
                        .map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            fill="#F4A261"
                            strokeWidth={0}
                            className="text-[#F4A261]"
                          />
                        ))}
                    </div>
                  </div>
                  <p className="text-gray-600 italic text-lg mb-6 flex-grow line-clamp-5">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-bold text-[#264653]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#F4A261] font-semibold">
                      {testimonial.pet}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
