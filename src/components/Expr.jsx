const Expr = () => {
  return (
    <div className="mt-32 lg:mt-40">
      <div className="flex gap-4 items-center">
        <div className="text-2xl">Work Experience</div>
        <div className="w-8 h-1 bg-purple-300 rounded-full"></div>
      </div>

      <div className="flex gap-10 mt-10 lg:mt-20">
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-white bg-opacity-20"></div>
          <div className="h-full w-px bg-white bg-opacity-20"></div>
        </div>
        <div className="">
          <div className="text-xs font-thin">August 2022 - Present</div>
          <div className="mt-2 text-lg">Senior frontend developer</div>
          <div className="text-primaryText">Kazam EV Tech</div>
          <div className="font-thin text-primaryText lg:w-4/5 mt-4">
            Through this project, I've crafted a virtual grooming store that
            demonstrates my proficiency in creating an immersive online shopping
            experience.
          </div>
        </div>
      </div>

      <div className="flex gap-10 mt-20">
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-white bg-opacity-20"></div>
          <div className="h-full w-px bg-white bg-opacity-20"></div>
        </div>
        <div className="">
          <div className="text-xs font-thin">August 2021 - July 2022</div>
          <div className="mt-2 text-lg">Frontend developer</div>
          <div className="text-primaryText">Kazam EV Tech</div>
          <div className="font-thin text-primaryText lg:w-4/5 mt-4">
            Through this project, I've crafted a virtual grooming store that
            demonstrates my proficiency in creating an immersive online shopping
            experience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expr;
