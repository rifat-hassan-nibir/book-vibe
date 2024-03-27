import { Link } from "react-router-dom";
import cover from "../../public/cover.png";

const Banner = () => {
  return (
    <div className="bg-[#1313130d] rounded-3xl lg:px-[120px] py-[30px] mb-[50px] lg:mb-[100px]">
      <div className="flex lg:flex-row flex-col-reverse gap-6 justify-between items-center lg:h-[554px] rounded-[24px]">
        <div className="space-y-[48px]">
          <h1 className="lg:text-[56px] text-[28px] text-center lg:text-left font-bold text-[#131313] lg:leading-[84px]">
            Books to freshen up <br />
            your bookshelf
          </h1>
          <Link
            to="/listed-books"
            className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg font-bold text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0"
            data-primary="green-400"
            data-rounded="rounded-2xl"
            data-primary-reset="{}"
          >
            View The List
          </Link>
        </div>
        <img className="lg:w-[318px] w-[250px]" src={cover} alt="" />
      </div>
    </div>
  );
};

export default Banner;
