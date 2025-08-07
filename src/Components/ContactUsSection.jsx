import { useSelector } from "react-redux";

const ContactUsSection = () => {
  const translate = useSelector((state) => state.language.translation);

  return (
    <div className="bg-[#FBFBFB] px-12 py-10">
      <div className="h-[1px] w-full bg-[#3C3C43AD]" />
      <div className="grid grid-cols-2 py-6">
        {/* Logo and links social */}
        <div>
          <figure className="h-[162px] w-[134px]">
            <img
              className="h-full w-full"
              src="footer-logo.png"
              alt="footer-logo"
            />
          </figure>
          <ul className="flex items-center gap-4">
            <li className="h-[25px] w-[25px]">
              <img src="facebook.png" alt="facebook" />
            </li>
            <li className="h-[25px] w-[25px]">
              <img src="tiktuk.png" alt="tiktuk" />
            </li>
            <li className="h-[25px] w-[25px]">
              <img src="insta.png" alt="insta" />
            </li>
            <li className="h-[25px] w-[25px]">
              <img src="twitter.png" alt="twitter" />
            </li>
          </ul>
        </div>
        {/* Quick Links and contact us */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl">{translate.Quick_Links}</h4>
            <ul className="mt-4 space-y-1 text-[#5B2C52]">
              <li>{translate.Home}</li>
              <li>{translate.AboutUs}</li>
              <li>{translate.Store}</li>
            </ul>
          </div>
          {/* Contact Us */}
          <div>
            <h4 className="text-xl">{translate.ContactUs}</h4>
            <ul className="mt-4 space-y-1 text-[#5B2C52]">
              <li>{translate.Technical_Support}</li>
              <li>{translate.After_Sales_Support}</li>
              <li>{translate.Guidance_Consultation}</li>
            </ul>
          </div>
          {/* Communication */}
          <div>
            {/* email */}
            <div className="flex items-center gap-4">
              <img
                className="h-[25px] w-[25px]"
                src="gmail-img.png"
                alt="gmail-img"
              />
              <span className="text-sm">Example@gmail.com</span>
            </div>
            {/* phone */}
            <div className="mt-4 flex items-center gap-4">
              <img
                className="h-[25px] w-[25px]"
                src="phone-img.png"
                alt="phone-img"
              />
              <span className="text-sm">1111</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#3C3C43AD]" />
    </div>
  );
};

export default ContactUsSection;
