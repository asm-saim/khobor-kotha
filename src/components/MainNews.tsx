import Image from "next/image";
import React from "react";

const MainNews = ({ news }) => {
  const [firstNews, ...others] = news;

  //   const otherNews = firstNews.slice(1);
  //   console.log(otherNews);

  console.log(others);

  return (
    <div className="flex justify-between gap-5">
      <div className="card bg-base-100 shadow-sm w-1/2">
        <figure>
          <Image height={600} width={700} alt="first news" src={firstNews.imageUrl}></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      {/* headlines */}
      <div className="w-1/2">
        {others.slice(0, 4).map((other) => (
          <h1 key={other.id}>{other.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
