import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";

const ProjectSlider = () => {
  const images = [
    "/stac.svg",
    "/activity.svg",
    "/africaFund.svg",
    "/starks_project.svg",
    "/exec-pro.svg",
    "/phone.svg",
  ];

  return (
    <div className="py-10 bg-gradient-to-b from-transparent to-bg">
       <div className="min-h-[60px] text-center mb-8">
         <p className="text-[2rem] sm:text-[2.2rem] lg:text-[2.6rem] leading-[2.5rem] lg:leading-[3rem] max-w-[90%] mx-auto">
           <span className="text-gray-100">Success in </span>
           <span className="text-[#60a6e7]">Motion</span> – Our clients’ journey
         </p>
       </div>

       <Swiper
        spaceBetween={30}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false, 
        }}
        speed={6000} 
        modules={[Autoplay]}
        className="w-full h-auto"
      >
        {[...images, ...images].map((src, index) => (
          <SwiperSlide key={`top-${index}`} className="w-full">
            <img
              alt={`project-image-top-${index}`}
              src={src}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

    {/*   <Swiper
    //     spaceBetween={30}
    //     slidesPerView="auto"
    //     loop={true}
    //     autoplay={{
    //       delay: 0,
    //       disableOnInteraction: false,
    //       reverseDirection: true,
    //     }}
    //     speed={6000} 
    //     modules={[Autoplay]}
    //     className="w-full h-auto mt-8"
    //   >
    //     {[...images, ...images].map((src, index) => (
    //       <SwiperSlide key={`bottom-${index}`} className="w-full">
    //         <img
    //           alt={`project-image-bottom-${index}`}
    //           src={src}
    //           className="w-full h-auto object-cover"
    //         />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper> */}
    </div>
  );
};

export default ProjectSlider;