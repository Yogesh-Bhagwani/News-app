# 📰 News App

A modern and responsive News App built using **Next.js**, **TypeScript**, and the **GNews API**. It fetches and displays the latest news articles with search and category filtering.

## 🚀 Features

- 🔍 Search for news articles
- 📂 Browse by categories (e.g., Technology, Sports, Business)
- 🌐 Powered by [GNews API](https://gnews.io)
- 🌙 Light & Dark mode support
- ⚡ Fast and responsive UI with App Router (Next.js 14)

## 🛠 Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS + DaisyUI
- GNews API

## 📁 Project Structure

/news-app
├── app/ # Pages and layout (App Router)
├── components/ # Reusable components
├── context/ # Theme context (dark mode)
├── lib/ # API utilities
├── public/ # Static assets
├── styles/ # Global styles
├── types/ # TypeScript types
└── .env.local # API keys and environment variables


## 🔐 Environment Variables

Create a `.env.local` file and add:

```env
GNEWS_API_KEY=your_gnews_api_key_here
```
Get your API key from https://gnews.io.

## 📦 Getting Started

# Clone the repository
git clone https://github.com/Yogesh-Bhagwani/News-app.git

# Navigate into the project
cd news-app

# Install dependencies
npm install

# Run the development server
npm run dev
