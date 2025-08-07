const StoreSection = () => {
  const stores = [
    {
      titleKey: "Have A Question?",
      src: "question-img.png",
      descKey:
        "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      textBtn: "Contact Us",
    },
    {
      titleKey: "Want  A Collaboration?",
      src: "hand-img.png",
      descKey:
        "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      textBtn: "Get in Touch",
    },
    {
      titleKey: "Have A Custom Design?",
      src: "setting-img.png",
      descKey:
        "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      textBtn: "Send Details",
    },
  ];

  return (
    <div id="store" className="bg-[#FBFBFB] px-12 py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {stores.map((item, index) => (
          <div
            className="font-poppins flex flex-col justify-between gap-14 rounded-3xl bg-[#DBDBDB] p-6"
            key={index}
          >
            {/* header section */}
            <div className="flex items-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-[7px] bg-[#3463AA]">
                <img className="h-8 w-8" src={item.src} alt="img" />
              </div>
              <h4 className="text-[#37428C] font-semibold">{item.titleKey}</h4>
            </div>
            {/* description */}
            <p className="text-xs">{item.descKey}</p>
            {/* Button */}
            <div className="mt-6 flex justify-end">
              <button className="rounded-[8px] bg-[#F58231] px-[47px] py-2 font-semibold transition-colors hover:bg-[#e4721e]">
                {item.textBtn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreSection;
