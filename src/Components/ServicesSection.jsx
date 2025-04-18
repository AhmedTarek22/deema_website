import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const translate = useSelector((state) => state.language.translation);

  const services = [
    {
      title: translate.filamentManufacturingTitle,
      description: [
        translate.filamentManufacturingLine1,
        translate.filamentManufacturingLine2,
        translate.filamentManufacturingLine3,
      ],
      link: "/filament",
      color: "border-cyan-700",
    },
    {
      title: translate.printingServicesTitle,
      description: [
        translate.printingServicesLine1,
        translate.printingServicesLine2,
        translate.printingServicesLine3,
      ],
      link: "/3d-printing",
      color: "border-amber-600",
    },
    {
      title: translate.modelingDesignTitle,
      description: [
        translate.modelingDesignLine1,
        translate.modelingDesignLine2,
      ],
      link: "/3d-modeling",
      color: "border-blue-600",
    },
    {
      title: translate.consultingTrainingTitle,
      description: [
        translate.consultingTrainingLine1,
        translate.consultingTrainingLine2,
        translate.consultingTrainingCTA,
      ],
      link: "/inquiry",
      color: "border-green-600",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 px-4 py-14 md:px-12">
      <div className="mx-auto max-w-6xl space-y-12">
        <h2 className="text-center text-3xl font-bold text-blue-900">
          {translate.ourServices}
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className={`block rounded-2xl border-l-4 bg-white ${service.color} p-6 shadow-md transition duration-300 hover:shadow-xl`}
            >
              <h3 className="mb-3 text-xl font-semibold text-blue-800">
                {service.title}
              </h3>
              <ul className="list-inside list-disc space-y-1 leading-relaxed text-gray-700">
                {service.description.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
