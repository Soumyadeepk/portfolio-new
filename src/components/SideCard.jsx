import { gsap } from "gsap/all";
import { useEffect } from "react";
import { Instagram, Linkedin, Mail, Twitter } from "react-feather";
import useStore from "../store/cardDetails";

const SideCard = () => {
  const animateData = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".sidecard",
      0.6,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        stagger: 0.2,
        opacity: 1,
        delay: 0.6,
      }
    );
  };
  useEffect(() => {
    animateData();
  }, []);
  return (
    <div className="sidecard opacity-0 relative lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:right-10 bg-white bg-opacity-5 lg:min-h-[65vh] lg:w-[23vw] mx-4 lg:mx-0 rounded-3xl py-8 lg:py-6 px-6 flex flex-col items-center justify-center">
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
            className="rounded-full w-[15vh] h-[15vh] lg:h-[20vh] lg:w-[20vh] object-contain"
          />
          <div className=" text-xl lg:text-2xl font-bold mt-6 lg:mt-8">
            Soumyadeep Keshri
          </div>
          <div className="font-thin text-primaryText text-sm italic">
            Base in Bengaluru, India.
          </div>
          <div className="flex gap-2 mt-8">
            <a
              href="https://www.linkedin.com/in/soumyadeep-keshri-8b5881193"
              target="_blank"
            >
              <div className="w-10 h-10 rounded-full border border-gray-500 flex flex-col items-center justify-center">
                <Linkedin size={16} className="text-gray-500" />
              </div>
            </a>
            <a href="https://www.instagram.com/soumyadeep_k_/" target="_blank">
              <div className="w-10 h-10 rounded-full border border-gray-500 flex flex-col items-center justify-center">
                <Instagram size={16} className="text-gray-500" />
              </div>
            </a>
            <a href="mailto:soumyadeep.keshri001@gmail.com">
              <div className="w-10 h-10 rounded-full border border-gray-500 flex flex-col items-center justify-center">
                <Mail size={16} className="text-gray-500" />
              </div>
            </a>
          </div>
          <a href="mailto:soumyadeep.keshri001@gmail.com">
            <button className="w-full py-3 lg:py-2 bg-green-600 hover:bg-white hover:text-black duration-300 font-bold text-black rounded-full mt-8 flex items-center justify-center text-sm">
              HIRE ME! <Mail size={16} className="ml-2" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
