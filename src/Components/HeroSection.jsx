import { useSelector } from "react-redux";

const HeroSection = () => {
  const translate = useSelector((state) => state.language.translation);

  return (
    <div
      id="home"
      className="relative mt-[70px] h-[50vh] overflow-hidden md:h-[90vh]"
    >
      <div className="flex items-center justify-between gap-16 px-12">
        <div className="w-1/2">
          <h2 className="h-[202px] w-[609px] text-[64px]">
            {translate.hero_main_headline}
          </h2>
          <p className="w-[585px] text-xl tracking-[0.04em] opacity-[63%]">
            {translate.hero_sub_headline}
          </p>
        </div>
        <figure className="h-[640px] w-[640px]">
          <img src="hero-img.png" alt="hero-img" />
        </figure>
      </div>
    </div>
  );
};

export default HeroSection;
