import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap/all";
import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "react-feather";

const Projects = () => {
  const [showFirst, setShowFirst] = useState(false);
  const handleFirst = () => {
    document.body.style.overflow = "hidden";
    setShowFirst(true);
  };

  const [showSecond, setShowSecond] = useState(false);
  const handleSecond = () => {
    document.body.style.overflow = "hidden";
    setShowSecond(true);
  };

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
    <>
      {showFirst && (
        <ProjectFirst
          close={() => {
            document.body.style.overflow = "auto";
            setShowFirst(false);
          }}
        />
      )}

      {showSecond && (
        <ProjectSecond
          close={() => {
            document.body.style.overflow = "auto";
            setShowSecond(false);
          }}
        />
      )}
      <div className="mt-32 lg:mt-40" id="work">
        <div className="latest_heading_wrapper flex gap-4 items-center">
          <div className="text-2xl">Latest works</div>
          <div className="w-8 h-1 bg-purple-300 rounded-full"></div>
        </div>
        <div className="latest_heading_wrapper mt-2 lg:mt-4 text-primaryText font-thin tracking-wide lg:w-4/5">
          Through these projects, I've crafted a virtual grooming store and it's
          dashboard that demonstrates my proficiency in creating an immersive
          online shopping experience.
        </div>
        <div className="project1 w-full flex flex-col lg:flex-row gap-10 mt-12">
          <div
            className="cursor-pointer overflow-hidden bg-[#D0CFF4] lg:w-[40vw] h-[40vh] lg:h-[60vh] flex flex-col items-center justify-center rounded-2xl"
            onClick={() => handleFirst()}
          >
            <img
              src="/assets/tgs1.svg"
              alt=""
              className="proj1 px-12 lg:px-0 lg:w-[25vw] h-[40vh] object-contain"
            />
          </div>
          <div
            className="cursor-pointer overflow-hidden bg-[#D0CFF4] lg:w-[30vw] h-[40vh] lg:h-[65vh] flex flex-col items-center justify-center rounded-3xl lg:mt-6"
            onClick={() => handleFirst()}
          >
            <img
              src="/assets/tgs2.png"
              alt=""
              className="proj2 w-[25vw] h-[40vh] object-contain"
            />
          </div>
        </div>
        <div
          className="flex items-center gap-2 hover:text-purple-400 duration-300 cursor-pointer mt-5 lg:mt-0"
          onClick={() => handleFirst()}
        >
          View details <ArrowUpRight />{" "}
        </div>
        <div className="project2 w-full flex flex-col lg:flex-row gap-10 mt-20">
          <div
            className="cursor-pointer overflow-hidden bg-[#D0CFF4] lg:w-[30vw] h-[40vh] lg:h-[65vh] flex flex-col items-center justify-center rounded-3xl"
            onClick={() => handleSecond()}
          >
            <img
              src="/assets/shop2.svg"
              alt=""
              className="proj3 w-[25vw] h-[40vh] object-contain"
            />
          </div>
          <div
            className="cursor-pointer overflow-hidden bg-[#D0CFF4] lg:w-[40vw] h-[40vh] lg:h-[60vh] flex flex-col items-center justify-center rounded-2xl mt-6"
            onClick={() => handleSecond()}
          >
            <img
              src="/assets/shop1.svg"
              alt=""
              className="proj4 px-12 lg:px-0 lg:w-[25vw] h-[40vh] object-contain"
            />
          </div>
        </div>
        <div
          className="flex justify-end items-center gap-2 hover:text-purple-400 duration-300 cursor-pointer mt-5"
          onClick={() => handleSecond()}
        >
          View details <ArrowUpRight />{" "}
        </div>
      </div>
    </>
  );
};

export default Projects;

const ProjectFirst = ({ close }) => {
  const animateFirst = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".firstWrapper",
      0.6,
      {
        y: "100%",
      },
      {
        y: 0,
      }
    );
  };

  useEffect(() => {
    animateFirst();
  }, []);

  return (
    <div className="firstWrapper fixed top-0 left-0 w-screen h-screen flex flex-col items-center lg:justify-center bg-black z-30">
      <X
        className=" absolute top-4 right-4 cursor-pointer"
        size={32}
        onClick={() => close()}
      />
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 pt-16 lg:pt-0 px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 ">
          <div className="cursor-pointer  bg-[#D0CFF4] lg:w-[30vw] h-[30vh] lg:h-[60vh] flex flex-col items-center justify-center rounded-3xl">
            <img
              src="/assets/tgs1.svg"
              alt=""
              className=" px-12 lg:px-0 lg:w-[25vw] h-[40vh] object-contain"
            />
          </div>
          <div className="cursor-pointer mt-6 bg-[#D0CFF4] lg:w-[20vw] h-[40vh] lg:h-[60vh] hidden lg:flex flex-col items-center justify-center rounded-3xl">
            <img
              src="/assets/tgs2.png"
              alt=""
              className="w-[25vw] h-[40vh] object-contain"
            />
          </div>
        </div>
        <div className="pt-12">
          <div className="font-bold text-3xl">TGS Dashboard</div>
          <div className="font-thin text-sm w-11/12 mt-4 text-primaryText leading-relaxed tracking-wider">
            The TGS dashboard is a versatile platform designed to help you
            effortlessly craft and organize your store's product offerings,
            efficiently oversee and process orders, and gain valuable insights
            through analytics for The Grooming Store website.
          </div>
          <a href="https://tgs-dashboard.netlify.app/" target="_blank">
            <button className="py-2 px-8 rounded-full bg-purple-400 text-sm mt-4 lg:mt-12 border border-purple-400 tracking-wider hover:bg-transparent duration-300">
              View live
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectSecond = ({ close }) => {
  const animateFirst = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".firstWrapper",
      0.6,
      {
        y: "100%",
      },
      {
        y: 0,
      }
    );
  };

  useEffect(() => {
    animateFirst();
  }, []);

  return (
    <div className="firstWrapper fixed top-0 left-0 w-screen h-screen flex flex-col items-center lg:justify-center bg-black z-30">
      <X
        className=" absolute top-4 right-4 cursor-pointer"
        size={32}
        onClick={() => close()}
      />
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 pt-16 lg:pt-0 px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 ">
          <div className="cursor-pointer  bg-[#D0CFF4] lg:w-[30vw] h-[30vh] lg:h-[60vh] flex flex-col items-center justify-center rounded-3xl">
            <img
              src="/assets/shop1.svg"
              alt=""
              className=" px-12 lg:px-0 lg:w-[25vw] h-[40vh] object-contain"
            />
          </div>
          <div className="cursor-pointer mt-6 bg-[#D0CFF4] lg:w-[20vw] h-[40vh] lg:h-[60vh] hidden lg:flex flex-col items-center justify-center rounded-3xl">
            <img
              src="/assets/shop2.svg"
              alt=""
              className="w-[25vw] h-[40vh] object-contain"
            />
          </div>
        </div>
        <div className="pt-12">
          <div className="font-bold text-3xl">The grooming store</div>
          <div className="font-thin text-sm w-11/12 mt-4 text-primaryText leading-relaxed tracking-wider">
            The Grooming Store is your dedicated e-commerce platform, providing
            you with the perfect space to effectively present and promote your
            store's products online. Additionally, customers can conveniently
            purchase products through this platform, enhancing their shopping
            experience.
          </div>
          <a href="https://the-grooming-store.netlify.app/" target="_blank">
            <button className="py-2 px-8 rounded-full bg-purple-400 text-sm mt-4 lg:mt-12 border border-purple-400 tracking-wider hover:bg-transparent duration-300">
              View live
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
