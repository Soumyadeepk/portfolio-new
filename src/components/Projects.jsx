import { ArrowUpRight } from "react-feather";

const Projects = () => {
  return (
    <div className="flex flex-col items-center my-40">
      <div className="w-2/3">
        <div className="flex gap-4 items-center">
          <div className="text-2xl text-white font-bold">Latest works</div>
          <div className="w-10 h-1 bg-[#FD9556] rounded-full"></div>
        </div>
        <div className="flex justify-between mt-12">
          <div className="w-72 h-96 bg-gray-800">
            {/* <img src="" alt="" /> */}
          </div>
          <div className="w-1/2">
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
        <div className="flex justify-between mt-40">
          <div className="w-1/2">
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
