import { FaCaretRight } from "react-icons/fa6";


const Blog = () => {
    const posts = [
        {
            title: "Will AI take over Art?",
            category: "Blog",
            author: "The Reformist",
            date: "May 29th, 2024",
            img: "/ai-over-art.webp"
        },
        {
            title: "Cryptocurrency VS tokens",
            category: "Blog",
            author: "The Reformist",
            date: "May 29th, 2024",
            img: "/cryptocurrency-vs-tokens.webp"
        },
        {
            title: "Cryptocurrency and Crypto assets",
            category: "Blog",
            author: "The Reformist",
            date: "May 29th, 2024",
            img: "/cryptocurrency-and-crypto-asset.webp"
        }
    ]
    return (
        <div className="py-4 px-6 lg:px-16 xl:px-28">
            <div className="flex flex-col md:flex-row items-start space-y-6 md:items-center justify-between">
                <h1 className="text-4xl">Read our articles, news and product blog</h1>
                <a href="#" className="relative group">
                    <button className="bg-white px-5 py-3 rounded-full group-hover:bg-[#064386] text-bg font-semibold group-hover:text-white transition-all duration-300 ease">Visit Blog <FaCaretRight className="inline-block ml-0.5 text-lg -translate-y-0.5 group-hover:hidden" /></button>
                    <span className="absolute w-full h-full top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386] transition-all duration-300 ease"></span>
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 items-start">
                {posts.map((post, index) => (
                    <a key={index} href="#" className="w-full flex flex-col items-start justify-center rounded-2xl group  hover:border-b-2 hover:border-b-[#b3d0f2] hover:border-x hover:border-x-primary transition-all duration-300 ease-in-out">
                        <div className="bg-[#070e21] max-w-2xl h-auto">
                            <img src={post.img} alt={post.title} loading="lazy" className="w-full object-cover rounded-xl" />
                        </div>
                        <div className="flex flex-col items-start justify-center py-6 group-hover:px-3 transition-all duration-300 ease-in-out">
                            <div className="p-3 border-l border-l-white transition-all duration-300 ease-in-out">
                                <h5 className="font-medium text-xl">{post.category}</h5>
                                <div className="flex flex-row items-center justify-start space-x-2 text-gray-400">
                                    <span>{post.author}</span>
                                    <span className="w-3 h-3 rounded-full bg-white"></span>
                                    <span>{post.date}</span>
                                </div>
                                <h3 className="text-3xl font-semibold mt-3">{post.title}</h3>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Blog;
