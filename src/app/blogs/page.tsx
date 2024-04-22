import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";
import React from "react";

const BlogPages = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();
  console.log(blogs);
  return (
    <div className="container mx-auto my-5">
      <p className="text-center text-4xl my-5">
        All blog from <span className="text-accent">blogis</span>
      </p>
      <p className="text-center text-2xl text-gray-400 w-2/4 mx-auto">
        Get connected to get regular update from us, if you missing to subscribe
        us, hurry ! and do subscribe
      </p>

      <div className="w-[95%] mx-auto grid grid-cols-3 gap-4 my-10">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPages;
