const Expr = () => {
  return (
    <div className="flex flex-col items-center mt-40 mb-20">
      <div className="w-2/3">
        <div className="flex gap-4 items-center">
          <div className="text-2xl text-white font-bold">Experience</div>
          <div className="w-10 h-1 bg-[#FD9556] rounded-full"></div>
        </div>
        <div className="grid grid-cols-3 border-b border-[#333333] mt-12 pb-5">
          <div className="text-xl text-white">Senior frontend developer</div>
          <div className="">Kazam EV Tech</div>
          <div className="italic">August 2022 - Present</div>
        </div>
        <div className="grid grid-cols-3 mt-6 pb-5">
          <div className="">Frontend developer</div>
          <div className="">Kazam EV Tech</div>
          <div className="italic">August 2021 - July 2022</div>
        </div>
      </div>
      <div className="w-2/3 flex justify-between items-center mt-40">
        <div className="text-sm">
          <div className="">Site by Soumyadeep Keshri</div>
          <div className="">Bengaluru, India.</div>
        </div>
        <div className="text-white border-b border-transparent hover:border-[#FD9556] duration-300 text-lg cursor-pointer">
          Get in touch.
        </div>
      </div>
    </div>
  );
};

export default Expr;
