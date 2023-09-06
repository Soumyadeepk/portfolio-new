import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap/all";
import { useEffect } from "react";
import { ArrowUpRight } from "react-feather";

const Projects = () => {
  const animateData = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".latest_heading_wrapper",
        start: "top 80%",
      },
    });

    tl1.fromTo(
      ".latest_heading_wrapper",
      0.6,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.5,
      }
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".project1",
        start: "top 50%",
      },
    });

    tl2
      .fromTo(
        ".proj1",
        1,
        {
          x: -500,
        },
        {
          x: 0,
        }
      )
      .fromTo(
        ".proj2",
        1,
        {
          x: 500,
        },
        {
          x: 0,
        },
        "=-1"
      );

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".project2",
        start: "top 50%",
      },
    });

    tl3
      .fromTo(
        ".proj3",
        1,
        {
          y: -500,
        },
        {
          y: 0,
        }
      )
      .fromTo(
        ".proj4",
        1,
        {
          y: 500,
        },
        {
          y: 0,
        },
        "=-1"
      );
  };
  useEffect(() => {
    animateData();
  }, []);
  return (
    <div className="mt-32 lg:mt-40">
      <div className="latest_heading_wrapper flex gap-4 items-center">
        <div className="text-2xl">Latest works</div>
        <div className="w-8 h-1 bg-purple-300 rounded-full"></div>
      </div>
      <div className="latest_heading_wrapper mt-2 lg:mt-4 text-primaryText font-thin tracking-wide lg:w-4/5">
        Through this project, I've crafted a virtual grooming store that
        demonstrates my proficiency in creating an immersive online shopping
        experience.
      </div>
      <div className="project1 w-full flex flex-col lg:flex-row gap-10 mt-12">
        <div className="overflow-hidden bg-[#D0CFF4] lg:w-[40vw] h-[40vh] lg:h-[60vh] flex flex-col items-center justify-center rounded-2xl">
          <img
            src="/assets/tgs1.svg"
            alt=""
            className="proj1 px-12 lg:px-0 lg:w-[25vw] h-[40vh] object-contain"
          />
        </div>
        <div className="overflow-hidden bg-[#D0CFF4] lg:w-[30vw] h-[40vh] lg:h-[65vh] flex flex-col items-center justify-center rounded-3xl lg:mt-6">
          <img
            src="/assets/tgs2.png"
            alt=""
            className="proj2 w-[25vw] h-[40vh] object-contain"
          />
        </div>
      </div>
      <div className="project2 w-full flex flex-col lg:flex-row gap-10 mt-6">
        <div className="overflow-hidden bg-[#D0CFF4] lg:w-[30vw] h-[40vh] lg:h-[65vh] flex flex-col items-center justify-center rounded-3xl">
          <img
            src="/assets/shop2.svg"
            alt=""
            className="proj3 w-[25vw] h-[40vh] object-contain"
          />
        </div>
        <div className="overflow-hidden bg-[#D0CFF4] lg:w-[40vw] h-[40vh] lg:h-[60vh] flex flex-col items-center justify-center rounded-2xl mt-6">
          <img
            src="/assets/shop1.svg"
            alt=""
            className="proj4 px-12 lg:px-0 lg:w-[25vw] h-[40vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
