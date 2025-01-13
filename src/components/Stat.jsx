import CountUp from "react-countup";

const Stat = () => {
  return (
    <div className="relative mx-auto bg-gradient-to-b from-[#0c2645] to-bg py-4">
      <div>
        <img src="/arc.svg" alt="" className="absolute max-w-3xl w-full h-[30rem] object-cover object-top left-1/2 -translate-x-1/2" />
      </div>
      <div className="py-40 max-w-xl mx-auto text-center px-5">
        <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium">
            <span>We </span>
            <span>build </span>
            <span>solutions </span>
            <span>that </span>
            <span>help </span>
            <span className="text-primary">businesses </span>
            <span>of </span>
            <span>all </span>
            <span>sizes </span>
            <span>to </span>
            <span className="text-primary">scale</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-evenly sm:justify-between items-center gap-6">
          <div className="flex flex-col gap-3 text-left w-fit">
            <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
              <CountUp start={0} end={50} duration={4} suffix="+" className="text-primary" />
            </div>
            <span className="text-[15px] sm:text-base md:text-lg max-w-full overflow-hidden">
              Clients
            </span>
          </div>
          <div className="flex flex-col gap-3 text-left w-fit">
            <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
              <CountUp start={0} end={120} duration={4.5} suffix="+" className="text-primary" />
            </div>
            <span className="text-[15px] sm:text-base md:text-lg max-w-full">
              Projects
            </span>
          </div>
          <div className="flex flex-col gap-3 text-left w-fit">
            <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
              <CountUp start={0} end={10} duration={4.5} suffix="+" className="text-primary" />
            </div>
            <span className="text-[15px] sm:text-base md:text-lg max-w-full">
              Team Leads
            </span>
          </div>
          <div className="flex flex-col gap-3 text-left w-fit">
            <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
              <CountUp start={0} end={10} duration={4.5} suffix="+" className="text-primary" />
            </div>
            <span className="text-[15px] sm:text-base md:text-lg max-w-full">
              Glorious Years
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
