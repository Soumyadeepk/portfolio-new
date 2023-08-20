import { ArrowUpRight } from "react-feather";

const Projects = () => {
  return (
    <div className="flex flex-col items-center my-32 lg:my-40">
      <div className="w-4/5 lg:w-2/3">
        <div className="flex gap-4 items-center">
          <div className="text-2xl text-white font-bold">Latest works</div>
          <div className="w-10 h-1 bg-[#FD9556] rounded-full"></div>
        </div>
        <div className="lg:flex justify-between mt-6 lg:mt-12">
          <div className="w-72 h-96 bg-gray-800">
            {/* <img src="" alt="" /> */}
          </div>
          <div className="w-4/5 lg:w-1/2 mt-6 lg:mt-0">
            <div className="text-white text-xl font-semibold">
              The grooming store
            </div>
            <div className="mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              consectetur nisi dolor a, quia ab
            </div>
            <div className="mt-6   cursor-pointer inline-block">
              <span className="text-white border-b border-transparent hover:border-[#FD9556] duration-300">
                View live{" "}
              </span>
              <ArrowUpRight className="inline bg-transparent" color="#FD9556" />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between mt-20 lg:mt-40">
          <div className="w-4/5 lg:w-1/2 mt-6 lg:mt-0">
            <div className="text-white text-xl font-semibold">
              The grooming store
            </div>
            <div className="mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              consectetur nisi dolor a, quia ab
            </div>
            <div className="mt-6   cursor-pointer inline-block">
              <span className="text-white border-b border-transparent hover:border-[#FD9556] duration-300">
                View live{" "}
              </span>
              <ArrowUpRight className="inline bg-transparent" color="#FD9556" />
            </div>
          </div>
          <div className="w-72 h-96 bg-gray-800">
            {/* <img src="" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
