import { gsap } from "gsap/all";
import { useEffect } from "react";

const Header = () => {
  const animateData = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".heading",
      0.6,
      {
        y: 50,
      },
      {
        y: 0,
        stagger: 0.2,
      }
    );
  };
  useEffect(() => {
    animateData();
  }, []);
  return (
    <div className="mt-20 lg:mt-40">
      <div className="h-12 overflow-hidden">
        <div className="heading text-2xl lg:text-5xl font-bold">
          &lt;&gt; Hello world &lt;/&gt;
        </div>
      </div>
      <div className="h-6 overflow-hidden mt-2 lg:mt-4 ">
        <div className="heading text-primaryText lg:w-4/5 tracking-wider font-thin leading-relaxed">
          Welcome to my corner of the web!
        </div>
      </div>
      <div className="lg:h-6 lg:overflow-hidden">
        <div className="heading text-primaryText  lg:w-4/5 tracking-wider font-thin leading-relaxed">
          I'm a passionate Web developer based in Bengaluru, with over 2.6 years
        </div>
      </div>
      <div className="lg:h-6 lg:overflow-hidden">
        <div className="heading text-primaryText  lg:w-4/5 tracking-wider font-thin leading-relaxed">
          of experience crafting dynamic and user-friendly web applications.
        </div>
      </div>
    </div>
  );
};

export default Header;
