import Image from "next/image";
import React from "react";

const NewsDetailPage = async ({ params }: { params: { newsDetails: string } }) => {
  const { newsDetails } = await params;
  const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsDetails}`);
  const data = await res.json();
  const news = data.data;
  console.log("helo data", news);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-3 mt-7">{news.title}</h1>
      <Image width={700} height={400} src={news.imageUrl} alt="image"></Image>
      <p className="mt-3 text-gray-700">{news.text}</p>
    </div>
  );
};

export default NewsDetailPage;
