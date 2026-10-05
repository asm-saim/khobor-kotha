import Image from "next/image";
interface INews {
  imageUrl: string;
  category: string;
  title: string;
  description: string;
}

const NewsCard = ({ cardNews }: { cardNews: INews }) => {
  return (
    <div className="card w-full overflow-hidden bg-base-100 shadow-sm">
      <div className="relative h-[150px] w-full">
        <Image src={cardNews.imageUrl} alt={cardNews.title} fill className="object-cover" />
      </div>

      <div className="card-body px-3 pb-3">
        <p className="text-[10px] font-semibold text-red-700">{cardNews.category}</p>

        <h2 className="card-title  text-base font-extrabold">{cardNews.title}</h2>

        <p className="line-clamp-3 text-xs">{cardNews.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
