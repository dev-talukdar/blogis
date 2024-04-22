import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="container mx-auto ">
      <p className="text-center text-4xl my-5">
        latest blog from <span className="text-accent">blogis</span>
      </p>
      <p className="text-center text-2xl text-gray-400 w-2/4 mx-auto">
        Get connected to get regular update from us, if you missing to subscribe
        us, hurry ! and do subscribe
      </p>

      <div className="w-[95%] mx-auto grid grid-cols-2 gap-4 my-5">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* showing rest card  */}

      <div className="w-[95%] mx-auto grid grid-cols-3 gap-4 mt-10">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
