import { Instagram, Linkedin, Mail, Twitter } from "react-feather";

const SideCard = () => {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-10 bg-white bg-opacity-5 min-h-[65vh] w-[23vw] rounded-3xl py-6 px-6 flex flex-col items-center justify-center">
      <div className="w-11/12">
        <div className="flex justify-end items-center w-full ">
          <div className="bg-purple-300 text-black font-semibold text-xs py-1 px-3 rounded-full ">
            React developer
          </div>
        </div>
        <div className="mt-2">
          <img
            src="/profilePic.png"
            alt=""
            className="rounded-full h-[20vh] w-[20vh] object-contain"
          />
          <div className=" text-2xl font-bold mt-8">Soumyadeep Keshri</div>
          <div className="font-thin text-primaryText text-sm italic">
            Base in Bengaluru, India.
          </div>
          <div className="flex gap-2 mt-8">
            <div className="w-10 h-10 rounded-full border border-gray-500 flex flex-col items-center justify-center">
              <Linkedin size={16} className="text-gray-500" />
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-500 flex flex-col items-center justify-center">
              <Instagram size={16} className="text-gray-500" />
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-500 flex flex-col items-center justify-center">
              <Twitter size={16} className="text-gray-500" />
            </div>
          </div>

          <button className="w-full py-2 bg-green-600 font-bold text-black rounded-full mt-8 flex items-center justify-center text-sm">
            HIRE ME! <Mail size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideCard;