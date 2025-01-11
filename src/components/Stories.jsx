import { useState } from "react";

const Testimonials = () => {
    const companies = [
        { name: "Starks", logo: "/starks.svg", testimonial: "Starks testimonial goes here.", author: "John Doe, CEO" },
        { name: "ExecutivePros", logo: "/ExecutivePros Logo.svg", testimonial: "ExecutivePros testimonial goes here.", author: "Jane Smith, Founder" },
        { name: "Stac AI", logo: "/stacai.svg", testimonial: "Stac AI testimonial goes here.", author: "Alex Kim, CTO" },
        { name: "Iwaria", logo: "/iwaria.svg", testimonial: "Iwaria testimonial goes here.", author: "Chris Johnson, COO" },
        { name: "Beaupreneur", logo: "/Beaupreneur.svg", testimonial: "Beaupreneur testimonial goes here.", author: "Christiana, Founder" },
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-16 px-6 md:px-10 xl:px-28 bg-bg">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    Discover the transformative stories of startups that scaled new heights with us
                </h2>
            </div>

            <div className="w-full overflow-x-auto mb-8">
                <div className="flex flex-row items-center justify-between w-full border border-blue-700 rounded-full bg-bg gap-0">
                    {companies.map((company, index) => (
                        <button
                            key={company.name}
                            onClick={() => setActiveTab(index)}
                            className={`flex flex-row items-center px-8 py-3 text-sm font-medium transition ${
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
                                className="w-6 h-6 mr-2"
                            />
                            {company.name}
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
                    <p className="text-base sm:text-lg font-semibold mb-4">{companies[activeTab].name}</p>
                    <p className="text-sm sm:text-base leading-6">{companies[activeTab].testimonial}</p>
                    <p className="mt-4 text-sm font-medium">{companies[activeTab].author}</p>
                </div>

                <div className="sm:w-2/5 relative">
                    <div className="absolute inset-0 bg-[#0c2745] opacity-10 animate-pulse"></div>
                    <img
                        src="/images/christina.svg"
                        alt="Author"
                        className="relative w-full h-64 sm:h-auto object-cover rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
