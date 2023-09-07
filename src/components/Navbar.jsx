import { gsap } from "gsap/all";
import { useEffect } from "react";

const Navbar = () => {
  const animateData = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".navbar",
      0.6,
      {
        y: -40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        delay: 0.5,
      }
    );
  };
  useEffect(() => {
    animateData();
  }, []);

  return (
    <div className="navbar opacity-0 pl-6 lg:pl-32 flex items-center gap-8 py-6">
      <a href="#work">
        <div className="">Work.</div>
      </a>
      <a href="mailto:soumyadeep.keshri001@gmail.com">
        <div className="">Contact.</div>
      </a>
    </div>
  );
};

export default Navbar;
