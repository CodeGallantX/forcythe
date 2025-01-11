import { useState } from "react";

const Testimonials = () => {
    const companies = [
        { name: "Starks", logo: "/images/starks.svg", testimonial: "Starks testimonial goes here.", author: "John Doe, CEO" },
        { name: "ExecutivePros", logo: "/images/ExecutivePros Logo.svg", testimonial: "ExecutivePros testimonial goes here.", author: "Jane Smith, Founder" },
        { name: "Stac AI", logo: "/images/stacai.svg", testimonial: "Stac AI testimonial goes here.", author: "Alex Kim, CTO" },
        { name: "Iwaria", logo: "/images/iwaria.svg", testimonial: "Iwaria testimonial goes here.", author: "Chris Johnson, COO" },
        { name: "Beaupreneur", logo: "/images/Beaupreneur.svg", testimonial: "Beaupreneur testimonial goes here.", author: "Christiana, Founder" },
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-16 px-4 bg-bg">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    Discover the transformative stories of startups that scaled new heights with us
                </h2>
            </div>

            {/* Tabs */}
            <div className="w-full overflow-x-auto hide-scrollbar mb-8">
                <div className="flex space-x-4 min-w-[750px] border border-blue-700 rounded-full bg-bg">
                    {companies.map((company, index) => (
                        <button
                            key={company.name}
                            onClick={() => setActiveTab(index)}
                            className={`flex items-center px-6 py-3 text-sm font-medium rounded-full transition ${
                                activeTab === index
                                    ? "bg-blue-700 text-white"
                                    : "hover:bg-blue-100 text-gray-800"
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

            {/* Testimonial Card */}
            <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-blue-700 text-white rounded-2xl flex flex-col sm:flex-row">
                {/* Text */}
                <div className="sm:w-3/5 mb-6 sm:mb-0 sm:pr-6">
                    <p className="text-base sm:text-lg font-semibold mb-4">{companies[activeTab].name}</p>
                    <p className="text-sm sm:text-base leading-6">{companies[activeTab].testimonial}</p>
                    <p className="mt-4 text-sm font-medium">{companies[activeTab].author}</p>
                </div>

                {/* Image */}
                <div className="sm:w-2/5 relative">
                    <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-xl animate-pulse"></div>
                    <img
                        src="/images/christina.svg" // Example image; replace dynamically if needed.
                        alt="Author"
                        className="relative w-full h-64 sm:h-auto object-cover rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
