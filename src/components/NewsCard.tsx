import Image from "next/image";

interface INews {
  imageUrl: string;
  category: string;
  title: string;
  description: string;
}

const NewsCard = ({ cardNews }: { cardNews: INews }) => {
  return (
    <div className="card h-full w-full overflow-hidden bg-base-100 shadow-sm">
      <div className="relative h-[150px] w-full shrink-0">
        <Image
          src={cardNews.imageUrl}
          alt={cardNews.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="card-body flex-1 gap-0 p-4">
        {/* Category */}
        <p className="mb-1 text-[10px] font-semibold leading-4 text-red-700">
          {cardNews.category}
        </p>

        {/* Full title, no clamp */}
        <h2 className="mb-2 text-sm font-extrabold leading-[20px]">
          {cardNews.title}
        </h2>

        {/* Description: max 3 lines, pushed to the bottom */}
        <div className="mt-auto h-[54px] overflow-hidden">
          <p className="line-clamp-3 text-xs leading-[18px] text-slate-600">
            {cardNews.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;