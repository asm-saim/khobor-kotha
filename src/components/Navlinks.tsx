import Link from "next/link";

interface Navs {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const Navlinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: Navs[] = data.data;
  const filterNavs = navs.filter((n) => n.scrapable);

  return (
    <div className="flex gap-5 justify-center text-sm">
      <Link href="/">হোম</Link>
      {filterNavs.map((n, i) => (
        <Link key={i} href={n.slug}>
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
