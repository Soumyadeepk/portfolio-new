import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap/all";
import { useEffect } from "react";

const TechStacks = () => {
  const animateData = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".tech_heading",
        start: "top 80%",
      },
    });

    tl1.fromTo(
      ".tech_heading",
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
      <div className="tech_heading flex gap-4 items-center">
        <div className="text-2xl">Tech stacks I use</div>
        <div className="w-8 h-1 bg-purple-300 rounded-full"></div>
      </div>
      <div className="tech_heading grid grid-cols-4 lg:w-10/12 justify-items-center items-center gap-y-6 mt-8 lg:mt-12">
        <div className="">
          <img
            src="/assets/react.png"
            alt=""
            className="w-12 lg:w-16 lg:h-16"
          />
        </div>
        <div className="">
          <img src="/assets/next.png" alt="" className="w-20 lg:w-32 lg:h-20" />
        </div>
        <div className="">
          <img
            src="/assets/tailwind.png"
            alt=""
            className="w-14 lg:w-18 lg:h-10"
          />
        </div>
        <div className="">
          <img src="/assets/gsap.png" alt="" className="w-14 lg:w-18 lg:h-16" />
        </div>

        <div className="">
          <img src="/assets/node.png" alt="" className="w-16 lg:w-28 lg:h-14" />
        </div>
        <div className="">
          <img
            src="/assets/express.png"
            alt=""
            className="w-16 lg:w-28 lg:h-8"
          />
        </div>
        <div className="">
          <img
            src="/assets/mongo.png"
            alt=""
            className="w-18 lg:w-32 lg:h-20"
          />
        </div>
        <div className="">
          <img
            src="/assets/firebase.png"
            alt=""
            className="w-8 lg:w-10 lg:h-14"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
