import { Mail } from "react-feather";

const Navbar = () => {
  return (
    <div className="flex justify-between px-4 lg:px-12 py-6">
      <div className="flex items-center gap-2 lg:gap-4">
        <div className="hover:text-white duration-300 cursor-pointer">
          Linkedin
        </div>
        <div className="bg-[#FD9556] h-5 w-1 rounded-full rotate-12"></div>
        <div className="hover:text-white duration-300 cursor-pointer">
          Instagram
        </div>
      </div>
      {/* <button className=" hover:bg-white hover:text-black duration-300 py-2 px-5 cursor-pointer rounded-full tracking-wide bg-transparent border border-[#808081] text-sm">
        Get in touch
        <Mail size={16} className="inline ml-2 bg-transparent" />
      </button> */}
      <div className="border-b border-transparent hover:border-[#FD9556] hover:text-white duration-300 cursor-pointer">
        Get in touch.
      </div>
    </div>
  );
};

export default Navbar;
