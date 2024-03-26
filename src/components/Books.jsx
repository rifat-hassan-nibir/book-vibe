import React from "react";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const Books = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] mb-[50px] lg:mb-[100px]">
      {books.map((book) => (
        <Book book={book} key={book.id}></Book>
      ))}
    </div>
  );
};

export default Books;
