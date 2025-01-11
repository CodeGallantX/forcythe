import React from "react";
import CountUp from "react-countup";

const Stat = () => {
  return (
    <div className="max-w-[52rem] mx-auto bg-[url('/images/arc.svg')] lg:bg-[url('/images/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
      <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
        {/* Title Section */}
        <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium">
            <span>We </span>
            <span>build </span>
            <span>solutions </span>
            <span>that </span>
            <span>help </span>
            <span className="text-[#60a6e7]">businesses </span>
            <span>of </span>
            <span>all </span>
            <span>sizes </span>
            <span>to </span>
            <span className="text-[#60a6e7]">scale</span>
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-evenly sm:justify-between items-center gap-6">
          {/* Clients */}
          <div className="flex flex-col gap-3 text-left w-fit">
            <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
              <CountUp start={0} end={50} duration={2} suffix="+" />
            </div>
            <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
              Clients
            </span>
          </div>
          {/* Projects */}
          <div className="flex flex-col gap-3 text-left w-fit">
            <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
              <CountUp start={0} end={120} duration={2.5} suffix="+" />
            </div>
            <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
              Projects
            </span>
          </div>
          {/* Team Leads */}
          <div className="flex flex-col gap-3 text-left w-fit">
            <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
              <CountUp start={0} end={10} duration={1.5} suffix="+" />
            </div>
            <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
              Team Leads
            </span>
          </div>
          {/* Glorious Years */}
          <div className="flex flex-col gap-3 text-left w-fit">
            <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
              <CountUp start={0} end={10} duration={1.5} suffix="+" />
            </div>
            <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
              Glorious Years
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
