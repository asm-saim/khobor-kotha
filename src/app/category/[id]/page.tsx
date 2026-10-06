import NewsCard from "@/components/NewsCard";

interface INews {
  id: string;
  imageUrl: string;
  category: string;
  title: string;
  description: string;
}

const CategoryPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  // console.log("ggg", id);
  const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`);
  const data = await res.json();
  const categorydata: INews[] = data.data;
  console.log("cate", data);

  return (
    <div>
      <h1 className=" font-bold mt-7 border-b-2 text-2xl border-red-700 ">{data.title}</h1>
      <div className="grid grid-cols-3 gap-5 mt-5  ">
        {categorydata.map((cardNews) => (
          <NewsCard key={cardNews.id} cardNews={cardNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
