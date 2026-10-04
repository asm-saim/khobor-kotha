const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headings = data.data;
  console.log(headings);
  return (
    <div>
      {headings.map((h, i) => (
        <span key={i}>
          <span>{h.title}</span>
          <span className="mx-5">•</span>
        </span>
      ))}
    </div>
  );
};

export default Marquee;
