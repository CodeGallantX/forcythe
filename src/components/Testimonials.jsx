import { useState } from "react";

const Testimonials = () => {
    const companies = [
        { name: "Starks Associates", logo: "/starks.svg", src:"/john.svg", testimonial: "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.", author: "John Doe, CEO" },
        { name: "ExecutivePros", logo: "/ExecutivePros_Logo.svg", src:"/testimony.svg", testimonial: "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!", author: "Testimony, Co-founder" },
        { name: "Stac AI", logo: "/stacai.svg", src:"/edwin.svg", testimonial: "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.", author: "Edwin, Former CTO" },
        { name: "Iwaria", logo: "/iwaria.svg", src:"/iwaria-founder.svg", testimonial: "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.", author: "Iwaria, Founder" },
        { name: "Beaupreneur", logo: "/Beaupreneur.svg", src:"/christina.svg", testimonial: "I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.", author: "Christiana, Founder" },
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-16 px-6 md:px-10 xl:px-28 bg-bg">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-[2.7rem] leading-relaxed text-white">
                    Discover the <span className="text-primary">transformative stories</span> of startups that scaled new heights with us
                </h2>
            </div>

            <div className="w-full overflow-x-auto mb-8">
                <div className="flex flex-row items-center justify-between w-full border border-blue-700 rounded-full bg-bg gap-0">
                    {companies.map((company, index) => (
                        <button
                            key={company.logo}
                            onClick={() => setActiveTab(index)}
                            className={`flex items-center text-white px-20 py-3 text-sm font-medium transition ${
                                activeTab === index
                                    ? `bg-[#0c2745] text-white ${
                                        index === 0
                                            ? "rounded-l-full"
                                            : index === companies.length - 1
                                            ? "rounded-r-full"
                                            : "rounded-none"
                                    }`
                                    : "text-gray-800"
                            }`}
                        >
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="w-10 h-10 sm:w-64 sm:h-auto object-contain mr-2"
                            />
                            {index === 0 && company.name && (
                                <span className="text-base font-semibold">{company.name}</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <div
                className="relative max-w-3xl mx-auto p-6 sm:p-8 bg-[#0c2745] text-white rounded-2xl flex flex-col sm:flex-row"
                style={{
                    marginLeft: `calc(${activeTab * 20}% - ${activeTab * 10}px)`,
                }}
            >
                <div className="sm:w-3/5 mb-6 sm:mb-0 sm:pr-6">
                    <p className="text-base sm:text-lg font-semibold mb-4">{companies[activeTab].name || "Company"}</p>
                    <p className="text-sm sm:text-base leading-6">{companies[activeTab].testimonial}</p>
                    <p className="mt-4 text-sm font-medium">{companies[activeTab].author}</p>
                </div>

                <div className="sm:w-2/5 relative">
                    <div className="absolute inset-0 bg-[#0c2745] opacity-10 animate-pulse"></div>
                    <img
                        src="christina.svg"
                        alt="Author"
                        className="relative w-full h-64 sm:h-auto object-cover rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
