"use client";
import React from "react";
import CategoryButton from "./Catagory";
import { NewsCard } from "./NewsCard";
import { useTheme } from "@/context/ThemeContext";

interface Article {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

interface NewsApiResponse {
  articles: Article[];
}

const NewsCardClient: React.FC<NewsApiResponse> = ({ articles }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`transition-all duration-300 ${theme === "dark" ? "bg-stone-950 text-white" : "bg-white text-black"}`}
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 flex justify-center ">
        <CategoryButton />
      </div>
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <NewsCard data={articles} />
      </div>
    </div>
  );
};

export default NewsCardClient;
