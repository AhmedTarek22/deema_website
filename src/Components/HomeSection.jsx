// import { useSelector } from "react-redux";

// const HomeSection = () => {
//   const translate = useSelector((state) => state.language.translation);

//   return (
//     <section id="home" className="mt-[90px] h-[40vh] md:h-[80vh]">
//       <figure className="h-full w-full">
//         <img
//           loading="lazy"
//           className="h-full w-full md:object-cover"
//           src="bg.jpeg"
//           alt="bg"
//         />
//       </figure>
//       <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-end bg-[rgb(15,116,143,0.7)] p-[50px] text-white md:w-1/2">
//         <div>
//           <h2 className="text-2xl font-bold">{translate.home_main_Headline}</h2>
//           <p className="mt-3">{translate.home_SubHeading}</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeSection;

///

// import { useSelector } from "react-redux";

// const HomeSection = () => {
//   const translate = useSelector((state) => state.language.translation);

//   return (
//     <section
//       id="home"
//       className="relative mt-[70px] h-[50vh] overflow-hidden md:h-[90vh]"
//     >
//       <figure className="absolute inset-0">
//         <img
//           loading="lazy"
//           src="bg.jpeg"
//           alt="background"
//           className="h-full w-full object-cover"
//         />
//         {/* خلفية نصف شفافة فوق الصورة للموبايل */}
//         <div className="absolute inset-0 bg-black/40 md:hidden" />
//       </figure>

//       {/* المحتوى */}
//       <div className="relative z-10 flex h-full items-center justify-end px-6 md:px-12">
//         <div className="rounded bg-[rgb(15,116,143,0.7)] p-4 text-white md:w-1/2 md:rounded-none md:p-[50px]">
//           <h2 className="text-xl font-bold md:text-3xl">
//             {translate.home_main_Headline}
//           </h2>
//           <p className="mt-3 text-sm md:text-base">
//             {translate.home_SubHeading}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeSection;

import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const HomeSection = () => {
  const translate = useSelector((state) => state.language.translation);

  return (
    <section
      id="home"
      className="relative mt-[70px] h-[50vh] overflow-hidden md:h-[90vh]"
    >
      {/* صورة الخلفية مع Zoom-In Animation */}
      <motion.figure
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* <img
          loading="lazy"
          src="bg.jpeg"
          alt="background"
          className="h-full w-full object-cover"
        /> */}
      </motion.figure>

      {/* المحتوى */}
      <div className="relative z-10 flex h-full items-center justify-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute start-0 rounded bg-[rgb(15,116,143,0.7)] p-4 text-white md:w-1/2 md:rounded-none md:p-[50px]"
        >
          <h2 className="text-xl font-bold md:text-3xl">
            {translate.home_main_Headline}
          </h2>
          <p className="mt-3 text-sm md:text-base">
            {translate.home_SubHeading}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
