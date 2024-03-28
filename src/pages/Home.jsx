import Banner from "../components/Banner";
import Books from "../components/Books";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-[20px] lg:text-[40px] font-bold text-[#131313] text-center mb-[36px] lg:mb-[20px]">Books</h1>
      <Books></Books>
    </div>
  );
};

export default Home;
