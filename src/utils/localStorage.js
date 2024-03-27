export const saveReadBookDataToLocalStorage = (book) => {
  const savedReadBooks = JSON.parse(localStorage.getItem("readBooks")) || [];
  const bookExists = savedReadBooks.find((savedReadBook) => savedReadBook.id === book.id);
  if (bookExists) {
    alert("Book already read");
  } else {
    savedReadBooks.push(book);
    localStorage.setItem("readBooks", JSON.stringify(savedReadBooks));
    alert("book readed");
  }
};

export const savedWishlistBookDataToLocalStorage = (book) => {
  const savedWishlistBooks = JSON.parse(localStorage.getItem("wishlistBooks")) || [];
  const savedReadBooks = JSON.parse(localStorage.getItem("readBooks")) || [];
  const isReadBook = savedReadBooks.find((savedReadBook) => savedReadBook.id === book.id);
  const isWishlisted = savedWishlistBooks.find((savedWishlistBook) => savedWishlistBook.id === book.id);
  if (isReadBook) {
    alert("You have already read this book");
  } else if (isWishlisted) {
    alert("Already added to wishlist");
  } else {
    savedWishlistBooks.push(book);
    localStorage.setItem("wishlistBooks", JSON.stringify(savedWishlistBooks));
    alert("added to wishlist");
  }
};
