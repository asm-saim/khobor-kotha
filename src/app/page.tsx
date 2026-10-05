import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";

const Home = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sectionsData = data.data;
  const mainNews = sectionsData[0].articles;

  const otherSections = sectionsData.slice(1);
  console.log("all", sectionsData);
  console.log("ot", otherSections);
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
                <h1 className="mt-8 font-semibold border-b-2 border-red-700">{ot.title}</h1>
              </div>
            ))}
          </div>
        </div>

        {/*highest read  */}
        <div className="col-span-1 bg-green-400 h-20"></div>
      </div>
    </div>
  );
};

export default Home;
