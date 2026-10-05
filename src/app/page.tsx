import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";

const Home = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sectionsData = data.data;
  const mainNews = sectionsData[0].articles;

  return (
    <div className="">
      <Marquee></Marquee>
      <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto px-4 mt-5">
        {/* main news */}
        <div className="col-span-2 bg-red-300">
          <MainNews news={mainNews}></MainNews>
        </div>

        {/*highest read  */}
        <div className="col-span-1 bg-green-400 h-20"></div>
      </div>
    </div>
  );
};

export default Home;
