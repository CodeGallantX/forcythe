import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Stat = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3,
  });

  const wordAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
      },
    }),
  };

  return (
    <div className="relative mx-auto bg-gradient-to-b from-[#0c2645] to-bg py-4">
      {/* Background image */}
      <div>
        <img
          src="/arc.svg"
          alt=""
          className="absolute max-w-3xl w-full h-[30rem] object-cover object-top left-1/2 -translate-x-1/2"
        />
      </div>

      <div className="py-40 max-w-xl mx-auto text-center px-5">
        <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl font-medium"
            ref={ref} 
          >
            {["We", "build", "solutions", "that", "help", "businesses", "of", "all", "sizes", "to", "scale"].map(
              (word, i) => (
                <motion.span
                  key={i}
                  className={i === 5 || i === 10 ? "text-primary" : ""}
                  custom={i} 
                  variants={wordAnimation}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {word}{" "}
                </motion.span>
              )
            )}
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-evenly sm:justify-between items-center gap-6">
          {[
            { end: 50, text: "Clients" },
            { end: 120, text: "Projects" },
            { end: 10, text: "Team Leads" },
            { end: 10, text: "Glorious Years" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-3 text-left w-fit"
              ref={ref}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.end}
                    duration={4 + index * 0.5} 
                    suffix="+"
                    className="text-primary"
                  />
                )}
              </div>
              <span className="text-[15px] sm:text-base md:text-lg max-w-full">
                {stat.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stat;
