import { FaCaretRight } from "react-icons/fa6";

const Blog = () => {
    return (
        <div className="py-10">
            <div className="px-28 flex flex-row items-center justify-between">
                <h1 className="text-4xl">Read our articles, news and product blog</h1>
                <a href="#" className="relative group">
                    <button className="bg-white px-5 py-3 rounded-full group-hover:bg-[#064386] text-bg font-semibold group-hover:text-white transition-all duration-300 ease">Visit Blog <FaCaretRight className="inline-block ml-0.5 text-lg -translate-y-0.5 group-hover:hidden" /></button>
                    <span className="absolute w-full h-full top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386] transition-all duration-300 ease"></span>
                </a>
            </div>
            <div>
                <div>
                    <div className="bg-[#070e21]">
                        <img src="" alt="" />
                    </div>
                    <div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Blog;