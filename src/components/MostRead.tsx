import Link from "next/link";

interface IMostRead {
  id: string;
  title: string;
}

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const mostReads: IMostRead[] = data.data;
  console.log("m", mostReads);
  return (
    <div className="bg-gray-50 p-3 shadow-lg rounded-lg">
      <p className="font-semibold text-neutral-900 my-3">সর্বাধিক পঠিত</p>
      {mostReads.map((mostRead, i) => (
        <Link key={mostRead.id} href={`/newsDetails/${mostRead.id}`}>
          <div className="flex gap-3 mb-6" key={mostRead.id}>
            <span className="text-red-700 font-semibold">{i + 1}</span>
            <h1 className="font-semibold text-sm">{mostRead.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MostRead;
