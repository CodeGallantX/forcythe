import { useState } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
    const companies = [
        {
            name: "Starks",
            logo: "/starks.svg",
            src: "/john.svg",
            testimonial:
                "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.",
            author: "John, CEO",
        },
        {
            name: "ExecutivePros",
            logo: "/ExecutivePros_Logo.svg",
            src: "/executive-pro-ceo.svg",
            testimonial:
                "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
            author: "Testimony, Co-founder",
        },
        {
            name: "Stac AI",
            logo: "/stacai.svg",
            src: "/edwin.svg",
            testimonial:
                "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.",
            author: "Edwin, Former CTO",
        },
        {
            name: "Iwaria",
            logo: "/iwaria.svg",
            src: "/iwaria-founder.svg",
            testimonial:
                "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.",
            author: "Iwaria, Founder",
        },
        {
            name: "Beaupreneur",
            logo: "/Beaupreneur.svg",
            src: "/christina.svg",
            testimonial:
                "I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.",
            author: "Christiana, Founder",
        },
    ];

    const [activeTab, setActiveTab] = useState(0);

    const splitWords = (text) =>
        text.split(" ").map((word, index) => (
            <motion.span
                key={index}
                className="inline-block mr-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
            >
                {word}
            </motion.span>
        ));

    return (
        <section className="py-16 px-6 md:px-10 xl:px-28 bg-bg">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-[2.7rem] leading-relaxed text-white">
                    {splitWords(
                        "Discover the transformative stories of startups that scaled new heights with us"
                    )}
                </h2>
            </div>

            <div className="w-full overflow-x-auto mb-8">
                <div className="grid grid-cols-5 items-center justify-center w-full border border-blue-700 rounded-full bg-bg">
                    {companies.map((company, index) => (
                        <button
                            key={company.logo}
                            onClick={() => setActiveTab(index)}
                            className={`flex items-center text-white px-5 sm:px-10 py-3 text-sm font-medium transition ${
                                activeTab === index
                                    ? "bg-[#0c2745] text-white" +
                                      (index === 0
                                          ? " rounded-l-full"
                                          : index === companies.length - 1
                                          ? " rounded-r-full"
                                          : "")
                                    : "text-bg"
                            }`}
                        >
                            <img
                                src={company.logo}
                                alt={company.name}
                                loading="lazy"
                                className="w-20 h-20 object-contain"
                            />
                            <span className="hidden sm:inline">{company.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                className="relative w-full md:max-w-2xl mx-auto space-x-4 p-6 sm:p-8 bg-[#0c2745] text-white rounded-2xl flex flex-col sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    marginLeft: `calc(${activeTab * 20}% - ${activeTab * 10}px)`,
                }}
            >
                <div className="sm:w-3/5 mb-6 sm:mb-0 sm:pr-6">
                    <motion.p
                        className="text-base sm:text-lg font-semibold mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {companies[activeTab].name || "Company"}
                    </motion.p>
                    <motion.p
                        className="text-sm sm:text-base leading-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {splitWords(companies[activeTab].testimonial)}
                    </motion.p>
                    <motion.p
                        className="mt-4 text-base font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {splitWords(companies[activeTab].author)}
                    </motion.p>
                </div>

                <div className="sm:w-2/5 relative">
                    <div className="absolute inset-0 bg-[#0c2745] opacity-10 animate-pulse"></div>
                    <img
                        src={companies[activeTab].src}
                        alt="Author"
                        className="relative w-full h-64 sm:h-auto object-cover rounded-xl"
                        loading="lazy"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Testimonials;
