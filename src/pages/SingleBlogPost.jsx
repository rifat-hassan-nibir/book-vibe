import { useLoaderData, useParams } from "react-router-dom";

const SingleBlogPost = () => {
  const posts = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const singlePost = posts.find((post) => post.id === idInt);
  const { author, date, image, title, post } = singlePost;
  return (
    <div className="lg:px-[200px] mb-[50px] lg:mb-[100px]">
      <div className="border rounded-2xl p-3 lg:p-6 space-y-8">
        <img src={image} className="rounded-2xl lg:h-[400px]" alt="" />
        <h1 className="text-3xl font-semibold text-center">{title}</h1>
        <div className="flex justify-between">
          <p>Author: {author}</p>
          <p>Published: {date}</p>
        </div>
        <p>{post}</p>
      </div>
    </div>
  );
};

export default SingleBlogPost;
