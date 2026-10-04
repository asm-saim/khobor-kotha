import Link from "next/link";

const Navlinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs = data.data;
  console.log(navs);
  return (
    <div className="flex gap-5 justify-center text-sm">
      {navs.map((n, i) => (
        <Link key={i} href={n.slug}>
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
