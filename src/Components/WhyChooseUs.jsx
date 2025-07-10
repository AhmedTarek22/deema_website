import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { useSelector } from "react-redux";

const WhyChooseUs = () => {
  const translate = useSelector((state) => state.language.translation);

  // const advantages = [
  //   { key: "premiumQuality", color: "text-blue-800" },
  //   { key: "innovationDriven", color: "text-teal-700" },
  //   { key: "technicalSupport", color: "text-indigo-700" },
  //   { key: "competitivePricing", color: "text-green-700" },
  //   { key: "guidanceConsultation", color: "text-purple-700" },
  //   { key: "afterSalesSupport", color: "text-amber-700" },
  //   { key: "instantInquiry", color: "text-rose-700" },
  // ];
  const advantages = [
    {
      titleKey: "premiumQualityTitle",
      descKey: "premiumQualityDesc",
      color: "text-blue-800",
    },
    {
      titleKey: "innovationDrivenTitle",
      descKey: "innovationDrivenDesc",
      color: "text-teal-700",
    },
    {
      titleKey: "technicalSupportTitle",
      descKey: "technicalSupportDesc",
      color: "text-indigo-700",
    },
    {
      titleKey: "competitivePricingTitle",
      descKey: "competitivePricingDesc",
      color: "text-green-700",
    },
    {
      titleKey: "guidanceConsultationTitle",
      descKey: "guidanceConsultationDesc",
      color: "text-purple-700",
    },
    {
      titleKey: "afterSalesSupportTitle",
      descKey: "afterSalesSupportDesc",
      color: "text-amber-700",
    },
    {
      titleKey: "instantInquiryTitle",
      descKey: "instantInquiryDesc",
      color: "text-rose-700",
    },
  ];

  return (
    <section id="advantages" className="bg-white px-6 py-16 md:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-blue-900">
          {translate.WhyChooseUs}
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border-l-4 border-blue-400 bg-gray-50 p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <FaCheckCircle
                  className={`text-xl ${item.color} min-h-[1rem] min-w-[1rem] flex-shrink-0 mt-[6px]`}
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {translate[item.titleKey]}
                  </h4>
                  <p className="mt-1 leading-relaxed text-gray-700">
                    {translate[item.descKey]}
                  </p>
                  {item.titleKey === "instantInquiryTitle" && (
                    <div>
                      <a
                        href="https://wa.me/201014384711" // ← عدل الرقم برقم واتساب الخاص بك
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-2xl bg-green-500 px-3 py-2 text-white shadow-md transition duration-300 hover:bg-green-600"
                      >
                        <FaWhatsapp className="text-2xl" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
