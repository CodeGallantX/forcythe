import { FaCaretRight } from "react-icons/fa6";


const Blog = () => {
    const posts = [
        {
            title: "Will AI take over Art?",
            category: "Blog",
            author: "The Reformist",
            date: "May 29th, 2024",
            img: "ai-over-art.webp"
        }
    ]
    return (
        <div className="py-10 px-6 lg:px-16 xl:px-28">
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-4xl">Read our articles, news and product blog</h1>
                <a href="#" className="relative group">
                    <button className="bg-white px-5 py-3 rounded-full group-hover:bg-[#064386] text-bg font-semibold group-hover:text-white transition-all duration-300 ease">Visit Blog <FaCaretRight className="inline-block ml-0.5 text-lg -translate-y-0.5 group-hover:hidden" /></button>
                    <span className="absolute w-full h-full top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386] transition-all duration-300 ease"></span>
                </a>
            </div>
            <div>
                <div>
                    {posts.map((post, index) => (
                        <div key={index} className="rounded-2xl">
                            <a href="#">
                                <div className="bg-[#070e21] max-w-md h-auto">
                                    <img src={post.img} alt={post.title} loading="lazy" className="w-full object-cover" />
                                </div>
                                <div>
                                    <h5>{post.category}</h5>
                                    <div>
                                        <span>{post.author}</span>
                                        <span className="w-10 h-10 rounded-full bg-white"></span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h3>{post.title}</h3>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Blog;
