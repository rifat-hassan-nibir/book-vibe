import { useLoaderData } from "react-router-dom";
import Blog from "../components/BlogCard";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <div>
      <div className="w-full bg-[#1313130d] text-center py-[16px] lg:py-[33px] rounded-2xl mb-[20px] lg:mb-[50px]">
        <h2 className="text-[18px] lg:text-[20px] font-bold">Blogs</h2>
      </div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-[50px] lg:mb-[100px]">
        {blogs.map((blog, index) => (
          <Blog blog={blog} key={index}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
