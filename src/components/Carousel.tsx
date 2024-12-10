import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CAROUSEL_ITEMS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600',
    title: '新品上市',
    subtitle: '探索最新商品系列',
    link: '/category/new-arrivals',
    buttonText: '立即查看'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1600',
    title: '品质优选',
    subtitle: '严选优质好物',
    link: '/category/trending',
    buttonText: '精选好物'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1600',
    title: '限时特惠',
    subtitle: '折扣商品低至5折',
    link: '/category/limited-edition',
    buttonText: '马上抢购'
  },
];

export const Carousel: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="h-[500px] w-full"
    >
      {CAROUSEL_ITEMS.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="relative w-full h-full group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
              <h2 className="text-5xl font-bold mb-4 transform transition-transform group-hover:scale-105">
                {item.title}
              </h2>
              <p className="text-xl mb-8">{item.subtitle}</p>
              <Link
                to={item.link}
                className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors transform hover:-translate-y-1"
              >
                {item.buttonText}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};