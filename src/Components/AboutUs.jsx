import { useSelector } from "react-redux";

const AboutUs = () => {
  const translate = useSelector((state) => state.language.translation);

  return (
    <section id="about-us" className="bg-gray-50 px-4 py-20 md:px-12">
      <h2 className="mb-12 text-center text-4xl font-bold text-blue-900">
        {translate.AboutUs}
      </h2>
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Our Story */}
        <div>
          {/* <h2 className="mb-4 text-3xl font-bold text-blue-900">
            {translate.OurStory}
          </h2> */}
          <p className="text-lg leading-relaxed text-gray-700">
            {translate.OurStoryDescription}
          </p>
        </div>
        {/* Vision + Mission */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Vision */}
          <div className="rounded-2xl border-l-4 border-cyan-700 bg-white p-6 shadow-md">
            <h3 className="mb-2 text-2xl font-semibold text-cyan-800">
              {translate.VisionTitle}
            </h3>
            <p className="leading-relaxed text-gray-700">
              {translate.VisionDescription}
            </p>
          </div>
          {/* Mission */}
          <div className="rounded-2xl border-l-4 border-amber-600 bg-white p-6 shadow-md">
            <h3 className="mb-2 text-2xl font-semibold text-amber-700">
              {translate.MissionTitle}
            </h3>
            <p className="leading-relaxed text-gray-700">
              {translate.MissionDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
