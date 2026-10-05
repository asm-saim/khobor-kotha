import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

interface IOtherSections {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}

const Home = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sectionsData = data.data;
  const mainNews = sectionsData[0].articles;
  // console.log("all", sectionsData);

  const otherSections: IOtherSections[] = sectionsData.slice(1);

  return (
    <div className="">
      <Marquee></Marquee>
      <div className="grid grid-cols-3 gap-5 mt-5 max-w-7xl mx-auto px-4">
        {/* main news */}
        <div className="col-span-2 ">
          <MainNews news={mainNews}></MainNews>

          {/* others news */}
          <div>
            {otherSections.map((ot) => (
              <div key={ot.curationId}>
                <h1 className="mt-10 font-semibold border-b-2 border-red-700">{ot.title}</h1>
                <div className="grid grid-cols-3 gap-5 mt-5">
                  {ot.articles.map((news) => (
                    <NewsCard key={news.id} cardNews={news}></NewsCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*Most read  */}
        <div className="col-span-1 ">
          <MostRead></MostRead>
        </div>
      </div>
    </div>
  );
};

export default Home;
