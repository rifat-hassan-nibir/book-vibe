/* eslint-disable react/prop-types */
const Blog = ({ blog }) => {
  const { title, author, image, date, views } = blog;
  return (
    <article className="flex flex-col dark:bg-gray-50 p-4 rounded-2xl border">
      <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500 rounded-lg" src={image} />
      </a>
      <div className="flex flex-col flex-1 py-6">
        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">
          {author}
        </a>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{title}</h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
          <span>{date}</span>
          <span>{views} views</span>
        </div>
      </div>
    </article>
  );
};

export default Blog;
