const CategoryPage = async ({ params }) => {
  const { id } = await params;
  // console.log("ggg", id);
  const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`);
  const data = await res.json();

  console.log("cate", data);

  return (
    <div>
      <h1>category</h1>
    </div>
  );
};

export default CategoryPage;
