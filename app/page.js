import React from "react";
import BlogListing from "@/components/blogs/blogListing";
import { getPostList } from "@/lib/posts";


async function getData(params) {
  const allPosts = await getPostList();
  return { allPosts: allPosts };
}

export default async function Home() {
  const posts = await getData();
  return (
    <div>
      <div className="py-12">
                <BlogListing 
                posts={posts?.allPosts.nodes}
                />
            </div>
    </div>
  );
}
