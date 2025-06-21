import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import img1 from './assets/image/pexels-pixabay-207691.jpg'
import img2 from './assets/image/pexels-yaroslav-shuraev-6279991.jpg'

const Interface = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 text-white">
      
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[500px] pt-10 "
      >
        <SwiperSlide>
          <img
            src={img1}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="young-man-writing-notebook-study-session.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="catalog-online-courses-isometric-icon-online-education-internet-learning_39422-1021.avif"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
      <h1 className="text-gray-300 py-12 text-xl md:text-2xl font-bold  text-center  px-6 pt-10 max-w-3xl mx-auto ">
        Self-study is one of the most powerful paths to personal development and long-term success. In a world full of distractions and constant changes, relying solely on traditional education is no longer enough. Self-study empowers individuals to take control of their learning journey, discover their strengths, and overcome their weaknesses. It builds independence, sharpens the mind, and opens the door to endless opportunities.
      </h1>
      <h2 className="py-8 mx-auto text-center text-2xl font-medium bg-gradient-to-b from-purple-700 to-pink-600 text-transparent bg-clip-text w-fit">
        Here begins your journey to uncover hidden talents, face new challenges
        daily,
      </h2>
      <h2 className="mt-1 mx-auto text-center text-2xl font-medium bg-gradient-to-b from-purple-700 to-pink-600 text-transparent bg-clip-text w-fit">
        and craft a story of pride and achievement for your future.
      </h2>
      <div className="flex justify-center gap-20 my-20 text-white">
        <button
          className="bg-purple-700 px-12 py-3 rounded-sm text-2xl font-sans"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="bg-purple-700 px-12 py-3 rounded-sm text-2xl font-sans"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Interface;
