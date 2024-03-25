import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";

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
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Listed Books</a>
            </li>
            <li>
              <a>Pages To Read</a>
            </li>
          </ul>
        </div>

        {/* Website Title */}
        <div>
          <h1 className="lg:text-[32px] text-[18px] font-bold text-[#150B2B]">Book Vibe</h1>
        </div>

        {/* Desktop Menu */}
        <div className="lg:flex gap-[48px] text[#150b2bb3] text-[16px] hidden">
          <button>Home</button>
          <button>Listed Books</button>
          <button>Pages To Read</button>
        </div>
        <div className="space-x-[16px]">
          <button>
            <a class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0">
              Sign In
            </a>
          </button>
          <button>
            <a class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-blue-400 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0">
              Sign Up
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
