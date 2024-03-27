import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <div className="w-full bg-[#1313130d] text-center py-[16px] lg:py-[33px] rounded-2xl">
        <h2 className="text-[18px] lg:text-[20px] font-bold">Books</h2>
      </div>

      {/* Tabs */}
      <div className="flex items-start mt-[20px] lg:mt-[56px] mb-[16px] lg:mb-[32px] overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
        <Link
          to={``}
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } dark:border-gray-600 dark:text-gray-600`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          to={`wishlist`}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } dark:border-gray-600 dark:text-gray-600`}
        >
          <span>Wishlist Books</span>
        </Link>
      </div>

      {/* Outlet */}
      <div className="mb-[50px] lg:mb-[100px]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ListedBooks;
