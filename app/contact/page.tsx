"use client";

import { Linkedin, FileText } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ContactPage() {
  const { theme } = useTheme();
  return (
    <main
      className={`min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 transition-all duration-300 ${
        theme === "dark" ? "bg-stone-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center space-y-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">Let's Connect</h1>

        <p className="text-gray-700 text-lg">
          Hi, I'm{" "}
          <span className="font-semibold text-black">Yogesh Bhagwani</span>, a
          passionate{" "}
          <span className="text-blue-600 font-medium">
            Next.js Web Developer
          </span>
          . I'm open to exciting opportunities and collaborations.
        </p>

        <div className="flex flex-col gap-4 items-center">
          <a
            href="https://www.linkedin.com/in/yogesh-bhagwani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
          >
            <Linkedin size={20} />
            Connect on LinkedIn
          </a>

          <a
            href="https://example.com/Yogesh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 font-medium hover:underline"
          >
            <FileText size={20} />
            View My Resume
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Feel free to reach out via LinkedIn or download my resume above.
        </p>
      </div>
    </main>
  );
}
