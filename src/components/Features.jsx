const Features = () => {
  const features = [
    {
      title: "Experience",
      description:
        "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
      imgSrc: "/images/layers-three.svg",
      imgAlt: "Experience",
    },
    {
      title: "Quick Support",
      description:
        "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
      imgSrc: "/images/layers-three.svg",
      imgAlt: "Quick Support",
    },
    {
      title: "Cost Savings",
      description:
        "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
      imgSrc: "/images/layers-three.svg",
      imgAlt: "Cost Savings",
    },
  ];

  return (
    <section
      className="py-14 px-6 md:px-10"
      style={{
        background: "linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 70%)",
      }}
    >
      <div className="text-center mb-10">
        <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] text-accent2">
          Your best call for <span className="capitalize">B2B/B2C</span> product innovation
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-left rounded-2xl p-px w-fit h-min transition duration-500 overflow-visible border-0"
          >
            <div className="bg-[#030516] w-full rounded-2xl p-8 sm:p-10 hover:shadow-lg">
              <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
                <img
                  src={feature.imgSrc}
                  alt={feature.imgAlt}
                  width="30"
                  height="30"
                  className="object-contain"
                />
              </div>
              <h4 className="text-2xl font-medium mb-5">{feature.title}</h4>
              <p className="text-[17.5px] text-darkGrey mb-0">{feature.description}</p>
            </div>
            <div
              className="absolute inset-0 z-0 rounded-[inherit] blur-md"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
              }}
            ></div>
            <div className="absolute inset-[2px] bg-black rounded-[inherit] z-1"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;