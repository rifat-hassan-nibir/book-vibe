import ReadAndWishlistCard from "./ReadAndWishlistCard";

const ReadBooks = () => {
  const savedReadBooks = JSON.parse(localStorage.getItem("readBooks"));
  return (
    <div>
      <h1 className={`text-2xl font-medium ${savedReadBooks ? "hidden" : "block"}`}>No read books</h1>
      <div className={`flex flex-col gap-[12px] lg:gap-[24px] `}>
        {savedReadBooks?.map((savedReadBook, index) => (
          <ReadAndWishlistCard book={savedReadBook} key={index}></ReadAndWishlistCard>
        ))}
      </div>
    </div>
  );
};

export default ReadBooks;
