const TechStacks = () => {
  const techConstants = [
    {
      name: "React",
      logo: "/assets/react.png",
    },
    {
      name: "Next.js",
      logo: "/assets/next.png",
    },
    {
      name: "Tailwind CSS",
      logo: "/assets/tailwind.png",
    },
    {
      name: "GSAP",
      logo: "/assets/gsap.png",
    },

    {
      name: "Node.js",
      logo: "/assets/node.png",
    },
    {
      name: "Express.js",
      logo: "/assets/express.png",
    },
    {
      name: "MongoDB",
      logo: "/assets/mongo.png",
    },
    {
      name: "Firebase",
      logo: "/assets/firebase.png",
    },
  ];
  return (
    <div className="mt-32 lg:mt-40">
      <div className="flex gap-4 items-center">
        <div className="text-2xl">Tech stacks I use</div>
        <div className="w-8 h-1 bg-purple-300 rounded-full"></div>
      </div>
      <div className="grid grid-cols-4 lg:w-10/12 justify-items-center items-center gap-y-6 mt-8 lg:mt-12">
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
