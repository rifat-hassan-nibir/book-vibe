import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import ListedBooks from "./pages/ListedBooks.jsx";
import PagesToRead from "./pages/PagesToRead.jsx";
import Home from "./pages/Home.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import WishListedBooks from "./components/WishListedBooks.jsx";
import ReadBooks from "./components/ReadBooks.jsx";
import { ToastContainer } from "react-toastify";
import ErrorPage from "./pages/ErrorPage.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import SingleBlogPost from "./pages/SingleBlogPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../booksData.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch("../booksData.json"),
          },
          {
            path: "wishlist",
            element: <WishListedBooks></WishListedBooks>,
            loader: () => fetch("../booksData.json"),
          },
        ],
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/book-details/:id",
        loader: () => fetch(`../booksData.json`),
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/blogs",
        loader: () => fetch(`../blogsData.json`),
        element: <Blogs></Blogs>,
      },
      {
        path: "/post/:id",
        loader: () => fetch(`../blogsData.json`),
        element: <SingleBlogPost></SingleBlogPost>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
