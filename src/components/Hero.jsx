import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCaretRight } from "react-icons/fa6";

const Hero = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const splitLetters = (text) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        className="inline-block"
        initial={{ opacity: 0, y: 0 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.08, duration: 0.2 }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  const splitWords = (text) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        className="inline-block"
        initial={{ opacity: 0, y: 0 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.2, duration: 0.1 }}
      >
        {word}
        {index < text.split(" ").length - 1 && "\u00A0"}
      </motion.span>
    ));
  };

  return (
    <div className="py-20 px-6 lg:px-16 xl:px-28 relative">
      <div>
        <img
          src="/header-background.svg"
          alt=""
          className="absolute object-cover w-full h-full md:w-11/12 left-1/3 -translate-x-1/3"
        />
      </div>
      <div className="flex flex-col items-start justify-center w-full bg-white bg-opacity-10 rounded-[2rem] sm:rounded-[3rem] px-6 py-10 md:p-10 lg:p-14 my-10 space-y-6 z-10">
        <h1
          ref={inViewRef}
          className="text-5xl xl:text-7xl w-full md:w-11/12 leading-tight"
        >
          {splitLetters("We build products that shape a better future")}
        </h1>

        <p
          ref={inViewRef}
          className="text-base lg:text-lg text-gray-400 w-full md:w-3/5"
        >
          {splitWords(
            "We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invoke sector-wide transformation."
          )}
        </p>

        <a href="#" className="relative group">
          <button className="bg-white px-5 py-3 rounded-full group-hover:bg-[#064386] text-bg font-semibold group-hover:text-white transition-all duration-300 ease">
            Book a call
            <FaCaretRight className="inline-block ml-0.5 text-lg -translate-y-0.5 group-hover:hidden" />
          </button>
          <span className="absolute w-full h-full top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386] transition-all duration-300 ease"></span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
