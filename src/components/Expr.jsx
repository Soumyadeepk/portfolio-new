import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap/all";
import { useEffect } from "react";

const Expr = () => {
  const animateData = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".work_heading",
        start: "top 80%",
      },
    });

    tl1.fromTo(
      ".work_heading",
      0.6,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".work_heading",
        start: "top 50%",
      },
    });

    tl2.fromTo(
      ".work_exp",
      0.6,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.6,
      }
    );
  };
  useEffect(() => {
    animateData();
  }, []);
  return (
    <div className="mt-32 lg:mt-40">
      <div className="work_heading flex gap-4 items-center">
        <div className="text-2xl">Work Experience</div>
        <div className="w-8 h-1 bg-purple-300 rounded-full"></div>
      </div>

      <div className="work_exp flex gap-10 mt-10 lg:mt-20">
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

      <div className="work_exp flex gap-10 mt-20">
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
