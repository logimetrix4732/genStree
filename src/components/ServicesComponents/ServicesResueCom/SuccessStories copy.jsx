import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SuccessStories = () => {
  const blogData = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfrYKAoQfCr-5LL4I3CfBC13cf_wgnlj4yQqQ&usqp=CAU",
      category: "News",
      title: "Expanding agricultural industry needs better solutions.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWmZrdsaGZVADw0xAF52SYMTUmm1Fb1QxSA&usqp=CAU",
      category: "Technology",
      title: "New smart farming techniques improving yields.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPU6SEZsWxnXh68A7-mcLaQspFCkFVJVVwwA&usqp=CAU",
      category: "Innovation",
      title: "AI and machine learning transforming agriculture.",
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Success Stories
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <span className="text-sm text-indigo-500 font-semibold uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800 mt-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SuccessStories;
