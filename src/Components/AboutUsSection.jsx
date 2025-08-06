import { useSelector } from "react-redux";

const AboutUsSection = () => {
  const translate = useSelector((state) => state.language.translation);

  const advantages = [
    {
      titleKey: "premiumQualityTitle",
      descKey: "premiumQualityDesc",
      src: "why1.png",
    },
    {
      titleKey: "innovationDrivenTitle",
      descKey: "innovationDrivenDesc",
      src: "why2.png",
    },
    {
      titleKey: "technicalSupportTitle",
      descKey: "technicalSupportDesc",
      src: "why3.png",
    },
    {
      titleKey: "competitivePricingTitle",
      descKey: "competitivePricingDesc",
      src: "why4.png",
    },
    {
      titleKey: "guidanceConsultationTitle",
      descKey: "guidanceConsultationDesc",
      src: "why5.png",
    },
    {
      titleKey: "afterSalesSupportTitle",
      descKey: "afterSalesSupportDesc",
      src: "why6.png",
    },
    {
      titleKey: "instantInquiryTitle",
      descKey: "instantInquiryDesc",
      src: "why7.png",
    },
  ];

  return (
    <div id="about-us" className="bg-[#FBFBFB] px-12 py-10">
      <h2 className="text-center text-[40px] text-[#5B2C52]">
        {translate.WhyChooseUs}
      </h2>
      <div className="mt-10 flex flex-wrap justify-between gap-y-6">
        {advantages.map((item, index) => (
          <div
            key={index}
            className={`flex h-[129px] w-[539px] items-center gap-6 rounded-xl bg-white px-6 py-4 shadow-sm ${index === advantages.length - 1 && "m-auto"} `}
          >
            <figure className="h-[64px] w-[64px] shrink-0">
              <img
                src={item.src}
                alt="icon"
                className="h-full w-full object-contain"
              />
            </figure>
            <div className="flex flex-col justify-center gap-1">
              <h4 className="text-[16px] font-medium text-black">
                {translate[item.titleKey]}
              </h4>
              <p className="text-[14px] leading-tight text-[#3C3C43]">
                {translate[item.descKey]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsSection;
