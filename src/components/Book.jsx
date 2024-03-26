import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
  const { tags, image, bookName, author, category, rating } = book;
  return (
    <div>
      <div className="p-[10px] lg:p-[24px] border rounded-2xl space-y-5">
        <div className="bg-[#F3F3F3] py-[24px] rounded-2xl hi">
          <img className="w-[134px] h-[164px] mx-auto" src={image} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
          {tags.map((tag, index) => (
            <p className="py-2 px-4 border rounded-full" key={index}>
              {tag}
            </p>
          ))}
        </div>
        <h1 className="text-[24px] font-bold text-[#131313]">{bookName}</h1>
        <p className="text-[16px]">By: {author}</p>
        <hr />
        <div className="flex justify-between items-center">
          <p className="text-[16px]">{category}</p>
          <div className="flex items-center gap-2">
            <p className="text-[16px]">{rating}</p>
            <CiStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
