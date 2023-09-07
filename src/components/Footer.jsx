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
        I am committed to delivering top-notch web and mobile applications that
        seamlessly blend innovation and quality. My mission is to transform your
        ideas into reality, offering exceptional value without compromising on
        excellence. Let's bring your vision to life at a reasonable cost -
        because your success is my priority.
      </div>
    </div>
  );
};

export default Footer;
