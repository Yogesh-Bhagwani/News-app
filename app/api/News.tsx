import React from "react";
import Image from "next/image";
import NewsCardClient from "@/components/NewsCardClient";

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
  status: string;
  totalResults: number;
  articles: Article[];
}

interface NewsProps {
  category: String;
}

export const News = async ({ category }: NewsProps) => {
  let url = `https://gnews.io/api/v4/top-headlines?country=in&category=${category}&lang=en&&apikey=${process.env.NEWS_API}`;
  const data = await fetch(url);
  const alldata: NewsApiResponse = await data.json();

  return <NewsCardClient articles={alldata.articles} />;
};
