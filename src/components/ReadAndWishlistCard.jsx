/* eslint-disable react/prop-types */
import { CiCalendarDate } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ReadAndWishlistCard = ({ book }) => {
  const { id, image, bookName, author, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
  return (
    <div className="p-[12px] lg:p-[24px] border rounded-2xl ">
      <div className="flex flex-col lg:flex-row lg:items-center gap-[12px] lg:gap-[24px]">
        <div className="px-[25px] lg:px-[50px] py-[18px] lg:py-[28px] bg-[#1313130d] rounded-2xl">
          <img src={image} className="max-w-[130px] mx-auto" alt="" />
        </div>

        {/* Texts */}
        <div className="space-y-[12px]">
          <h1 className="text-[18px] lg:text-[24px] font-bold text-[#131313]">{bookName}</h1>
          <p className="text-[14px] lg:text-[16px] text-[#131313cc] font-medium">By : {author}</p>
          <div className="flex flex-col lg:flex-row lg:items-center gap-[16px]">
            <div className="flex items-center gap-[12px]">
              <p className="font-bold text-[#131313]">Tag</p>
              {tags.map((tag, index) => (
                <p key={index} className="text-[14px] lg:text-[16px] py-2 px-4 border rounded-full text-[#131313b3]">
                  #{tag}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-[8px]">
              <CiCalendarDate className="text-[24px]" />
              <p>Year of Publishing: {yearOfPublishing}</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-[16px]">
            <div className="flex items-center gap-[8px] text-[#13131399]">
              <IoPeopleSharp className="text-[24px]" />
              <p>Publisher: {publisher}</p>
            </div>
            <div className="flex items-center gap-[8px] text-[#13131399]">
              <IoBookOutline className="text-[24px]" />
              <p>Total Pages: {totalPages}</p>
            </div>
          </div>
          <hr />
          <div className="flex flex-col lg:flex-row lg:items-center gap-[16px]">
            <div className="flex gap-3">
              <p className="text-[14px] lg:text-[16px] py-2 px-4 border rounded-full text-[#131313b3]">Category: {category}</p>
              <p className="text-[14px] lg:text-[16px] py-2 px-4 border rounded-full text-[#131313b3]">Rating: {rating}</p>
            </div>
            <Link
              to={`/book-details/${id}`}
              className="text-[14px] lg:text-[16px] py-2 px-4 bg-[#23BE0A] text-center text-white rounded-full  text-[#131313b3]"
            >
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadAndWishlistCard;
