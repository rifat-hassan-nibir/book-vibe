import { useState } from "react";
import ReadAndWishlistCard from "./ReadAndWishlistCard";
import { IoIosArrowDown } from "react-icons/io";

const WishListedBooks = () => {
  const savedBooks = JSON.parse(localStorage.getItem("wishlistBooks"));
  const unsortedBooks = JSON.parse(localStorage.getItem("wishlistBooks"));
  const [sortedBooks, setSortedBooks] = useState(unsortedBooks);

  const handleSorting = (sortingText) => {
    if (sortingText === "Rating") {
      const sorted = savedBooks.sort((a, b) => b.rating - a.rating);
      setSortedBooks(sorted);
    } else if (sortingText === "Pages") {
      const sorted = savedBooks.sort((a, b) => b.totalPages - a.totalPages);
      setSortedBooks(sorted);
    } else if (sortingText === "Published") {
      const sorted = savedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setSortedBooks(sorted);
    }
  };

  return (
    <div>
      {/* Sort */}
      <div className="dropdown mb-5 flex justify-center">
        <div tabIndex={0} role="button" className="btn bg-[#23BE0A] hover:bg-[#49AA5F] text-white">
          Sort by <IoIosArrowDown />
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a onClick={() => handleSorting("Rating")}>Rating</a>
          </li>
          <li>
            <a onClick={() => handleSorting("Pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSorting("Published")}>Publish Date</a>
          </li>
        </ul>
      </div>

      <h1 className={`text-2xl font-medium ${sortedBooks ? "hidden" : "block"}`}>No wishlisted books</h1>
      <div className={`flex flex-col gap-[12px] lg:gap-[24px] `}>
        {sortedBooks?.map((sortedBook, index) => (
          <ReadAndWishlistCard book={sortedBook} key={index}></ReadAndWishlistCard>
        ))}
      </div>
    </div>
  );
};

export default WishListedBooks;
