import ReadAndWishlistCard from "./ReadAndWishlistCard";

const ReadBooks = () => {
  const savedReadBooks = JSON.parse(localStorage.getItem("readBooks"));
  return (
    <div className="flex flex-col gap-[12px] lg:gap-[24px]">
      {savedReadBooks.map((savedReadBook, index) => (
        <ReadAndWishlistCard book={savedReadBook} key={index}></ReadAndWishlistCard>
      ))}
    </div>
  );
};

export default ReadBooks;
