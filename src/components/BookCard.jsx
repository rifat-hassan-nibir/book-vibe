/* eslint-disable react/prop-types */
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { id, tags, image, bookName, author, category, rating } = book;
  return (
    <Link to={`/book-details/${id}`}>
      <div className="p-[16px] lg:p-[24px] border border-[#13131326] rounded-2xl space-y-5">
        <div className="bg-[#F3F3F3] py-[24px] rounded-2xl hi">
          <img className="w-[134px] h-[164px] mx-auto" src={image} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
          {tags.map((tag, index) => (
            <p className="py-2 px-4 rounded-full font-medium bg-[#23be0a0d] text-[#23BE0A]" key={index}>
              {tag}
            </p>
          ))}
        </div>
        <h1 className="text-[24px] font-bold text-[#131313]">{bookName}</h1>
        <p className="text-[16px] text-[#131313cc] font-medium">By: {author}</p>
        <hr className="border-dashed bg-[#13131326]" />
        <div className="flex justify-between items-center">
          <p className="text-[16px] font-medium text-[#131313cc]">{category}</p>
          <div className="flex items-center gap-2">
            <p className="text-[16px] font-medium text-[#131313cc]">{rating}</p>
            <CiStar className="text-[24px] text-[#131313cc]" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
