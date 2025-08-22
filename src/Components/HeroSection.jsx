import { useSelector } from "react-redux";

const HeroSection = () => {
  const translate = useSelector((state) => state.language.translation);

  return (
    <div
      id="home"
      className="relative mt-[70px] overflow-hidden bg-[#FBFBFB] px-12  py-10"
    >
      <div className="flex items-center justify-between gap-16">
        <div className="w-1/2">
          <h2
            className="h-[202px] w-[609px] bg-clip-text font-aldrich text-[64px] leading-[1.1] text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, #F7883B, #6C2D60, #37428C, #1B6AB2)",
            }}
          >
            {translate.hero_main_headline}
          </h2>
          <p className="w-[585px] text-xl tracking-[0.04em] opacity-[63%]">
            {translate.hero_sub_headline}
          </p>
        </div>
        <figure className="relative h-[640px] w-[640px]">
          <img src="hero-img.png" alt="hero-img" />
          <div className="absolute bottom-4 start-1/2 h-[18px] w-[264px] bg-[#3C3C433B] blur-[16px]"></div>
        </figure>
      </div>
    </div>
  );
};

export default HeroSection;
