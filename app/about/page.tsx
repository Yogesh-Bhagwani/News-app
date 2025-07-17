'use client';

import { useTheme } from "@/context/ThemeContext";

export default function AboutPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`h-screen w-full transition-all duration-300 ${
        isDark ? "bg-stone-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-16 flex flex-col justify-center h-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            About NewsToday
          </h2>
          <p
            className={`max-w-3xl mx-auto text-lg ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Stay informed with NewsToday — your trusted source for real-time,
            reliable, and unbiased news from around the world.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {[
            {
              title: "Our Mission",
              desc: `At NewsToday, we believe that accurate and accessible information
              empowers people. Our mission is to deliver up-to-date news across
              all categories including technology, politics, science, business,
              sports, and more — with clarity and speed.`,
            },
            {
              title: "What We Cover",
              desc: `We provide curated stories from trusted sources worldwide. Whether
              it's global affairs, national updates, tech innovations, or
              entertainment highlights — NewsToday keeps you informed and ahead of
              the curve.`,
            },
            {
              title: "Why Choose Us",
              desc: `With a clean interface, fast loading speed, and personalized
              category filtering, NewsToday is built for a modern,
              distraction-free news experience — anytime, anywhere.`,
            },
            {
              title: "Our Vision",
              desc: `We aim to become a global platform for fact-based journalism and
              encourage a more informed, critical-thinking audience in the digital
              age.`,
            },
          ].map((item, i) => (
            <div key={i}>
              <h3
                className={`text-2xl font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
