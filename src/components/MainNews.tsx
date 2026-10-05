import Image from "next/image";

interface INews {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

const MainNews = ({ news }: { news: INews[] }) => {
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
          <p className="text-red-700 font-semibold">{firstNews.category}</p>
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      {/* headlines */}
      <div className="w-1/2 rounded-lg border-gray-200 bg-gray-50">
        {others.slice(0, 4).map((other) => (
          <div className="px-3 border-b border-b-gray-200 pt-4" key={other.id}>
            <p className="text-red-700 font-semibold text-xs pb-1">{firstNews.category}</p>
            <h1 className="font-semibold pb-2 text-sm">{other.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
