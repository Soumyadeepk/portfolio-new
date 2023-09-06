import { ArrowUpRight } from "react-feather";

const Projects = () => {
  return (
    <div className="mt-32 lg:mt-40">
      <div className="flex gap-4 items-center">
        <div className="text-2xl">Latest works</div>
        <div className="w-8 h-1 bg-purple-300 rounded-full"></div>
      </div>
      <div className="mt-2 lg:mt-4 text-primaryText font-thin tracking-wide lg:w-4/5">
        Through this project, I've crafted a virtual grooming store that
        demonstrates my proficiency in creating an immersive online shopping
        experience.
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-10 mt-12">
        <div className="bg-[#D0CFF4] lg:w-[40vw] h-[40vh] lg:h-[60vh] flex flex-col items-center justify-center rounded-2xl">
          <img
            src="/assets/tgs1.svg"
            alt=""
            className="px-12 lg:px-0 lg:w-[25vw] h-[40vh] object-contain"
          />
        </div>
        <div className="bg-[#D0CFF4] lg:w-[30vw] h-[40vh] lg:h-[65vh] flex flex-col items-center justify-center rounded-3xl lg:mt-6">
          <img
            src="/assets/tgs2.png"
            alt=""
            className="w-[25vw] h-[40vh] object-contain"
          />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-10 mt-6">
        <div className="bg-[#D0CFF4] lg:w-[30vw] h-[40vh] lg:h-[65vh] flex flex-col items-center justify-center rounded-3xl">
          <img
            src="/assets/shop2.svg"
            alt=""
            className="w-[25vw] h-[40vh] object-contain"
          />
        </div>
        <div className="bg-[#D0CFF4] lg:w-[40vw] h-[40vh] lg:h-[60vh] flex flex-col items-center justify-center rounded-2xl mt-6">
          <img
            src="/assets/shop1.svg"
            alt=""
            className="px-12 lg:px-0 lg:w-[25vw] h-[40vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
