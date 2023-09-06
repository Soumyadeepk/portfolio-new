import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap/all";
import { useEffect } from "react";

const Footer = () => {
  const animateData = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "top 80%",
      },
    });

    tl1.fromTo(
      ".footer",
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
    <div className="footer my-32 lg:my-40">
      <div className="text-2xl">Lastly,</div>

      <div className="font-thin mt-2 lg:mt-4 lg:w-4/5 text-justify text-primaryText">
        My tech journey kicked off in 2017 when I embarked on my B.Tech in
        computer science. In 2019, I stumbled upon the captivating realm of web
        development, and I've been riding the coding wave ever since. Fast
        forward to 2021, and I've leveled up to a full-time Frontend Developer
        role, with a recent promotion to the esteemed title of Senior Frontend
        Maestro. On weekdays, I'm immersed in the world of code, and come the
        weekend, you can catch me either sipping cocktails in a pub or
        perfecting the art of lounging like a panda.
      </div>
    </div>
  );
};

export default Footer;
