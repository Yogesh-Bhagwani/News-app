"use client";

import React from "react";
import Image from "next/image";

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

interface NewsCardProps {
  data: Article[];
}

export const NewsCard: React.FC<NewsCardProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6 lg:px-8 py-6">
      {data?.map((article, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
        >
          {article.image ? (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
              No Image Available
            </div>
          )}

          <div className="p-5 flex flex-col justify-between h-full">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {article.title}
              </h2>
              <p className="text-sm text-gray-700 line-clamp-3">
                {article.description}
              </p>

              <p className="text-xs text-gray-500 mb-2">
                  📰 {article.source.name}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline font-medium"
                >
                  Read more →
                </a>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};
