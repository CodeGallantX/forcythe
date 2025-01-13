import { useEffect, useRef } from "react";

const ProjectSlider = () => {
  const images = [
    "/stac.svg",
    "/activity.svg",
    "/africaFund.svg",
    "/starks_project.svg",
    "/phone.svg",
    "/exec-pro.svg",
  ];

  const sliderTopRef = useRef(null);
  const sliderBottomRef = useRef(null);

  useEffect(() => {
    const topAnimation = sliderTopRef.current;
    const bottomAnimation = sliderBottomRef.current;

    if (topAnimation && bottomAnimation) {
      topAnimation.style.animationPlayState = "running";
      bottomAnimation.style.animationPlayState = "running";
    }

    return () => {
      if (topAnimation && bottomAnimation) {
        topAnimation.style.animationPlayState = "paused";
        bottomAnimation.style.animationPlayState = "paused";
      }
    };
  }, []);

  return (
    <div className="py-0 bg-gradient-to-b from-transparent to-gray-900">
      <div className="min-h-[60px] text-center mb-8">
        <p className="text-[2rem] sm:text-[2.2rem] lg:text-[2.6rem] leading-[2.5rem] lg:leading-[3rem] max-w-[90%] mx-auto">
          <span className="text-gray-100">Success in </span>
          <span className="text-[#60a6e7]">Motion</span> – Our clients’ journey
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={sliderTopRef}
          className="grid grid-cols-10 animate-scroll-left whitespace-nowrap"
        >
          {[...images, ...images].map((src, index) => (
            <div
              key={`top-${index}`}
              className="inline-block w-[300px] h-auto mx-2"
            >
              <img
                alt={`project-image-top-${index}`}
                className="w-full h-auto object-cover"
                src={src}
              />
            </div>
          ))}
        </div>

        <div
          ref={sliderBottomRef}
          className="animate-scroll-right whitespace-nowrap mt-6"
        >
          {[...images, ...images].map((src, index) => (
            <div
              key={`bottom-${index}`}
              className="inline-block w-[150px] lg:w-[250px] mx-2"
            >
              <img
                alt={`project-image-bottom-${index}`}
                className="w-full h-auto object-cover"
                src={src}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
