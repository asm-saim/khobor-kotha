import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headings = data.data;
  console.log(headings);
  return (
    <div className="bg-red-700 text-white">
      <div className="flex max-w-7xl mx-auto">
        <div className="bg-red-800 font-bold py-1 px-5 my-auto">সর্বশেষ</div>
        <MarqueeText className="py-1" direction="right" duration={15}>
          {headings.map((h, i) => (
            <span key={i}>
              <span>{h.title}</span>
              <span className="mx-5">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
