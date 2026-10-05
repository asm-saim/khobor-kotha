import Image from "next/image";

const NewsCard = ({ cardNews }) => {
  return (
    <div className="card w-full overflow-hidden bg-base-100 shadow-sm">
      <div className="relative h-[150px] w-full">
        <Image src={cardNews.imageUrl} alt={cardNews.title} fill className="object-cover" />
      </div>

      <div className="card-body">
        <p className="text-[10px] font-semibold text-red-700">{cardNews.category}</p>

        <h2 className="card-title  text-sm font-extrabold">{cardNews.title}</h2>

        <p className="line-clamp-3 text-xs">{cardNews.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
