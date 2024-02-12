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
            Developed the HR management dashboard from scratch utilizing
            React.js, including employee onboarding and attendance management,
            which reduced the time to onboard new employees by 33%.
          </div>
          <div className="font-thin text-primaryText lg:w-4/5 mt-4">
            Created a React Native app for Battery swapping business, showcasing
            adaptability in mobile application development, by utilizing tried
            and tested web skillsets.
          </div>
          <div className="font-thin text-primaryText lg:w-4/5 mt-4">
            Built a Svelte/Sveltekit web dashboard for a battery swapping app,
            enabling efficient battery and dealer management. Developed backend
            APIs using Node.js and MongoDB for seamless integration and enhanced
            functionality.
          </div>
          <div className="font-thin text-primaryText lg:w-4/5 mt-4">
            Developed and customized white-labeled EV mobile application using
            React Native for diverse clients, which increased customer
            engagement by 15% and reduced development time by 20%, resulting an
            escalation in the user base by 50%.
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
            Reduced the number of lines of code for the React Native app by 30%,
            by introducing a code splitting strategy on critical flows, and by
            improving the code modularity.
          </div>
          <div className="font-thin text-primaryText lg:w-4/5 mt-4">
            Enhanced both performance (decreased TTFB from 300ms to 50ms) and UX
            (increased conversion rate by 3%) of company’s website by replacing
            it with a server-rendered Next.js app.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expr;
