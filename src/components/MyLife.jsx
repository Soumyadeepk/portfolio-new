import { gsap } from "gsap/all";
import { useEffect } from "react";

const MyLife = () => {
  const animateData = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".life_heading",
      0.6,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        delay: 1,
      }
    );
  };
  useEffect(() => {
    animateData();
  }, []);

  return (
    <div className="mt-32 lg:mt-48">
      <div className="life_heading opacity-0 flex items-center gap-3">
        <div className="text-2xl">My life</div>
        <div className="w-8 h-1 rounded-2xl bg-purple-300"></div>
      </div>
      <div className="life_heading opacity-0 mt-2 lg:mt-4 text-primaryText font-thin tracking-wider lg:w-4/5">
        My tech journey kicked off in 2017 when I embarked on my B.Tech in
        computer science. In 2019, I stumbled upon the captivating realm of web
        development, and I've been riding the coding wave ever since. Fast
        forward to 2021, and I've leveled up to a full-time Frontend Developer
        role, with a recent promotion to the esteemed title of Senior Frontend
        Maestro. On weekdays, I'm immersed in the world of code, and come the
        weekend, you can catch me either sipping mocktails in a cafe or
        perfecting the art of lounging like a panda.
      </div>
    </div>
  );
};

export default MyLife;
