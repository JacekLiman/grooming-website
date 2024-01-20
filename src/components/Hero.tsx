import HeroSlider from "./HeroSlider"


const Hero = () => {
  return (
    <section>
      <div className="container mx-auto pt-[86px] pb-40 bg-white overflow-hidden relative">
        <div>
          <HeroSlider />
        </div>
        <div className="hidden lg:block absolute w-[900px] h-[900px] rounded-full bg-orange-tertiary top-0 right-0 translate-x-[180px] -translate-y-[150px] "></div>
      </div>
    </section>
  );
}

export default Hero