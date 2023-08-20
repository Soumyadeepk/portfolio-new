const TechStacks = () => {
  return (
    <div className="flex flex-col items-center lg:my-60">
      <div className="text-xl lg:text-2xl text-white font-semibold">
        Tech stacks
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-6 lg:flex lg:gap-20 lg:text-lg mt-8">
        <div className="gradient">React.js</div>
        <div className="gradient">Next.js</div>
        <div className="gradient">Tailwind CSS</div>
        <div className="gradient">React native</div>
      </div>
    </div>
  );
};

export default TechStacks;
