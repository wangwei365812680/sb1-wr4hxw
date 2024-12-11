import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { getBannerList } from '@/api'


export const Carousel: React.FC = () => {


  const [list,useList] = useState([])

   useEffect(  ()=>{
    getBannerList().then(res=>{
      useList(res.banner_list) 

      console.log(2143,res)
    })
    

   },[])
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="h-[500px] w-full"
    >
      {list.map((item) => (
        <SwiperSlide key={item.image.ru}>
          <div className="relative w-full h-full group">
            <img
              src={'http://dg.zhxdrl.com/'+item.image.ru}
         
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
              {/* <h2 className="text-5xl font-bold mb-4 transform transition-transform group-hover:scale-105">
                {item.title}
              </h2>
              <p className="text-xl mb-8">{item.subtitle}</p> */}
              {/* <Link
                to={item.link}
                className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors transform hover:-translate-y-1"
              >
                {item.buttonText}
              </Link> */}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};