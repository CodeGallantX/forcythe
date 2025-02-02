import { FiLayers } from "react-icons/fi";

const Features = () => {
  const features = [
    {
      title: "Experience",
      description:
        "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
    },
    {
      title: "Quick Support",
      description:
        "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
    },
    {
      title: "Cost Savings",
      description:
        "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
    },
  ];

  return (
    <section
      className="py-24 px-6 md:px-10 xl:px-28 bg-gradient-to-b from-[#030416] to-[#0c2645] z-10"
    >
      <div className="text-center mb-5">
        <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] text-[#b3d0f2]">
          Your best call for <span className="capitalize">B2B/B2C</span> product innovation
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-start gap-7 md:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-left rounded-2xl p-px w-fit h-min overflow-visible border-0 card-animation"
          >
            <div className="bg-[#030516] w-full rounded-2xl p-8 sm:p-10 hover:shadow-lg relative">
              <div className="w-fit p-2 bg-primary bg-opacity-60 rounded-md mb-5">
                <FiLayers className="text-2xl" />
              </div>
              <h4 className="text-2xl font-medium mb-5">{feature.title}</h4>
              <p className="text-[17.5px] text-gray-300 mb-0">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
