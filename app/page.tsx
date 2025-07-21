"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Post from "@/components/Post";
import InputForm from "@/components/InputForm";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!apiBaseUrl) {
        console.error("API base URL is not defined");
        return;
      }
      const response = await fetch(apiBaseUrl);
      const data = await response.json();
      setPosts(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-6 py-12">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>

      <InputForm />
    </div>
  );
}
