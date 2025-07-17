"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryButton() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "general";

  const handleClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", category); // updates or adds category
    router.push(`/?${params.toString()}`);
  };

  const categories = [
    "general",
    "world",
    "nation",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
  ];

  return (
    <div className="flex flex-wrap gap-2 p-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium border hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${
            currentCategory === category
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-black border-gray-300"
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}
