import { useSelector } from "react-redux";

const HomeSection = () => {
  const translate = useSelector((state) => state.language.translation);

  return (
    <section id="home" className="mt-[90px] h-[80vh]">
      <figure className="h-full w-full">
        <img loading="lazy" className="h-full w-full" src="bg.jpeg" alt="bg" />
      </figure>
      <div className="absolute left-0 top-1/2 flex w-1/2 -translate-y-1/2 justify-end bg-[rgb(15,116,143,0.7)] p-[50px] text-white">
        <div>
          <h2 className="text-2xl font-bold">{translate.home_main_Headline}</h2>
          <p className="mt-3">{translate.home_SubHeading}</p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default HomeSection;
