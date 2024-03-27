import { useLoaderData, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.id === idInt);
  const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

  // Local Storage

  const handleAddToRead = () => {
    const savedReadBooks = JSON.parse(localStorage.getItem("readBooks")) || [];
    const bookExists = savedReadBooks.find((savedReadBook) => savedReadBook.id === book.id);
    if (bookExists) {
      toast.error("You already read this book");
    } else {
      savedReadBooks.push(book);
      localStorage.setItem("readBooks", JSON.stringify(savedReadBooks));
      toast.success("You have already read this book");
    }
  };

  const handleAddToWishlist = () => {
    const savedWishlistBooks = JSON.parse(localStorage.getItem("wishlistBooks")) || [];
    const savedReadBooks = JSON.parse(localStorage.getItem("readBooks")) || [];
    const isReadBook = savedReadBooks.find((savedReadBook) => savedReadBook.id === book.id);
    const isWishlisted = savedWishlistBooks.find((savedWishlistBook) => savedWishlistBook.id === book.id);
    if (isReadBook) {
      toast.error("You already read this book");
    } else if (isWishlisted) {
      toast.error("Already added to wishlist");
    } else {
      savedWishlistBooks.push(book);
      localStorage.setItem("wishlistBooks", JSON.stringify(savedWishlistBooks));
      toast.success("Added to wishlist");
    }
  };
  return (
    <div className="mb-[50px] lg:mb-[100px]">
      <div className="flex flex-col lg:flex-row lg:items-center gap-[24px] lg:gap-[48px] ">
        <div className="bg-[#1313130d] p-[35px] lg:p-[72px] rounded-2xl lg:w-[50%]">
          <img src={image} alt="" />
        </div>
        <div className="lg:w-[50%] space-y-5">
          <h1 className="text-[24px] lg:text-[40px] font-bold text-[#131313]">{bookName}</h1>
          <p className="text-[16px] lg:text-[20px] text-[#131313cc] font-medium">By : {author}</p>
          <hr />
          <p className="text-[16px] lg:text-[20px] font-medium">By : {category}</p>
          <hr />
          <p className="text-[14px] lg:text-[16px] text-[#131313b3]">
            <span className="font-bold text-[#131313]">Review:</span> {review}
          </p>
          <div className="flex  items-center gap-[12px]">
            <p className="font-bold text-[#131313]">Tag</p>
            {tags.map((tag, index) => (
              <p key={index} className="text-[14px] lg:text-[16px] py-2 px-4 border rounded-full text-[#131313b3]">
                #{tag}
              </p>
            ))}
          </div>
          <hr />
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="py-[12px]">Number of Pages: </td>
                <td className="w-12 hidden lg:block"></td>
                <td className="py-[12px]">{totalPages}</td>
              </tr>
              <tr>
                <td className="py-[12px]">Publisher</td>
                <td className="w-12 hidden lg:block"></td>
                <td className="py-[12px]">{publisher}</td>
              </tr>
              <tr>
                <td className="py-[12px]">Year of Publishing:</td>
                <td className="w-12 hidden lg:block"></td>
                <td className="py-[12px]">{yearOfPublishing}</td>
              </tr>
              <tr>
                <td className="py-[12px]">Rating:</td>
                <td className="w-12 hidden lg:block"></td>
                <td className="py-[12px]">{rating}</td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-4">
            <button
              onClick={() => handleAddToRead()}
              className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-black rounded-md border border-[#1313134d] hover:bg-slate-200 font-bold sm:w-auto sm:mb-0"
              data-rounded="rounded-2xl"
            >
              Read
            </button>
            <button
              onClick={() => handleAddToWishlist()}
              className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-[#50B1C9] hover:bg-[#50B9F9] rounded-md  font-bold sm:w-auto sm:mb-0"
              data-rounded="rounded-2xl"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
