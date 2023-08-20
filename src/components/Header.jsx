import { ArrowUpRight } from "react-feather";

const Header = () => {
  return (
    <div className="flex flex-col items-center my-40">
      <div className="flex flex-col items-center">
        <div className="flex gap-3 text-6xl">
          <div className=" gradient font-semibold">Hey, I am</div>
          <div className="text-white  font-bold">SK.</div>
        </div>
        <div className="gradient text-xl mt-3">
          I navigate the digital realm, one pixel at a time.
        </div>
        {/* <div className="mt-8">
        <button className="hover:bg-white hover:text-black duration-300 py-3 px-8 rounded-full bg-transparent border border-[#808081]">
          Latest work <ArrowUpRight className="inline ml-1 bg-transparent" />
        </button>
      </div> */}
        <div className="text-xl mt-10 ">
          <span className="cursor-pointer text-white border-b border-transparent duration-300 hover:border-[#FD9556] ">
            Latest work
          </span>
          <ArrowUpRight
            className="inline ml-1 bg-transparent "
            size={30}
            color="#FD9556"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
