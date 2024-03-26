import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

const Books = () => {
  const books = useLoaderData();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] mb-[50px] lg:mb-[100px]">
      {books.map((book) => (
        <BookCard book={book} key={book.id}></BookCard>
      ))}
    </div>
  );
};

export default Books;
