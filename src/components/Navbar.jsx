import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-between items-center lg:my-[50px] my-[20px]">
        {/* Dropdown */}
        <div className="dropdown lg:hidden ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <NavLink to="/" className={({ isActive }) => (isActive ? " text-green-400 " : "")}>
              <button>Home</button>
            </NavLink>
            <NavLink to="/listed-books" className={({ isActive }) => (isActive ? " text-green-400" : "")}>
              <button>Listed Books</button>
            </NavLink>
            <NavLink to="/pages-to-read" className={({ isActive }) => (isActive ? " text-green-400" : "")}>
              <button>Pages To Read</button>
            </NavLink>
            <NavLink to="/blogs" className={({ isActive }) => (isActive ? " text-green-400" : "")}>
              <button>Blogs</button>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? " text-green-400" : "")}>
              <button>Contact</button>
            </NavLink>
            <Link>
              <button>Sign Up</button>
            </Link>
            <Link>
              <button>Sign In</button>
            </Link>
          </ul>
        </div>

        {/* Website Title */}
        <div>
          <Link to="/">
            <h2 className="lg:text-[32px] text-[18px] font-bold text-[#150B2B]">Book Vibe</h2>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="lg:flex items-center text[#150b2bb3] text-[16px] hidden">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "border border-green-400 text-green-400 font-bold rounded-lg px-5 py-3" : "px-5 py-3")}
          >
            <button>Home</button>
          </NavLink>
          <NavLink
            to="/listed-books"
            className={({ isActive }) => (isActive ? "border border-green-400 text-green-400 font-bold px-5 py-3 rounded-lg" : "px-5 py-3")}
          >
            <button>Listed Books</button>
          </NavLink>
          <NavLink
            to="/pages-to-read"
            className={({ isActive }) => (isActive ? "border border-green-400 text-green-400 font-bold px-5 py-3 rounded-lg" : "px-5 py-3")}
          >
            <button>Pages To Read</button>
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "border border-green-400 text-green-400 font-bold px-5 py-3 rounded-lg" : "px-5 py-3")}
          >
            <button>Blogs</button>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "border border-green-400 text-green-400 font-bold px-5 py-3 rounded-lg" : "px-5 py-3")}
          >
            <button>Contact</button>
          </NavLink>
        </div>
        <div className="space-x-[16px] hidden lg:block">
          <button>
            <Link className="inline-flex font-bold items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0">
              Sign In
            </Link>
          </button>
          <button>
            <Link className="inline-flex font-bold items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-[#59C6D2] rounded-md hover:bg-blue-400 sm:w-auto sm:mb-0">
              Sign Up
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
