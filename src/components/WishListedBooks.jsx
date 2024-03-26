import ReadAndWishlistCard from "./ReadAndWishlistCard";

const WishListedBooks = () => {
  const savedWishlistBooks = JSON.parse(localStorage.getItem("wishlistBooks"));
  return (
    <div>
      <div className="flex flex-col gap-[12px] lg:gap-[24px]">
        {savedWishlistBooks.map((savedWishlistBook, index) => (
          <ReadAndWishlistCard book={savedWishlistBook} key={index}></ReadAndWishlistCard>
        ))}
      </div>
    </div>
  );
};

export default WishListedBooks;
