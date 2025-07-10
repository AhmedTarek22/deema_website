import { useState } from "react";
import { FaFacebookSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const translate = useSelector((state) => state.language.translation);

  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    inquiry: "",
  });
  const [errors, setErrors] = useState({});

  const handleInquiryData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newErrors = {};

    if (name === "name") {
      setInquiryData({ ...inquiryData, name: value });
      if (!value.trim()) {
        newErrors.name = translate.Name + " " + translate.is_required;
      }
    }
    if (name === "email") {
      setInquiryData({ ...inquiryData, email: value });
      if (!value.trim()) {
        newErrors.email = translate.Email + " " + translate.is_required;
      } else if (!/^\S+@\S+\.\S+$/.test(inquiryData.email)) {
        newErrors.email = translate.Valid_Email;
      }
    }
    if (name === "inquiry") {
      setInquiryData({ ...inquiryData, inquiry: value });
      if (!value.trim()) {
        newErrors.inquiry = translate.Inquiry + " " + translate.is_required;
      }
    }

    setErrors(newErrors);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({ inquiryData });
    setInquiryData({
      name: "",
      email: "",
      inquiry: "",
    });
  };

  const isValidData =
    !inquiryData.name || !inquiryData.email || !inquiryData.inquiry;

  return (
    <section id="contact-us" className="bg-white px-4 py-12 md:px-12">
      <h2 className="text-center text-3xl font-bold text-blue-900">
        {translate.ContactUs}
      </h2>
      <div className="mx-auto mt-8 max-w-6xl space-y-12">
        {/* Contact Information */}
        {/* <div className="rounded-2xl border-l-4 border-cyan-700 bg-gray-50 p-6 shadow-md">
          <h2 className="mb-4 text-3xl font-bold text-blue-900">
            {translate.contactInformation}
          </h2>
          <p className="leading-relaxed text-gray-700">
            You can reach us through the following methods:
          </p>
        </div> */}
        {/* Social Media Links */}
        <div className="rounded-2xl border-l-4 border-green-500 bg-gray-50 p-6 shadow-md">
          <h3 className="mb-2 text-2xl font-semibold text-green-700">
            {translate.socialMediaLinks}
          </h3>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61564242496446"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 transition duration-300 hover:text-blue-800"
            >
              <FaFacebookSquare className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/deemafor3d/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 transition duration-300 hover:text-blue-900"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://wa.me/201227837079"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-2xl bg-green-500 text-white shadow-md transition duration-300 hover:bg-green-600"
            >
              <FaWhatsapp className="text-3xl" />
            </a>
            <a
              href="mailto:khateb13579@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 transition duration-300 hover:text-blue-600"
            >
              <MdAttachEmail className="text-3xl" />
            </a>
          </div>
        </div>
        {/* Contact Form */}
        <div className="rounded-2xl border-l-4 border-amber-500 bg-gray-50 p-6 shadow-md">
          <h3 className="mb-2 text-2xl font-semibold text-amber-700">
            {translate.contactForm}
          </h3>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700">
                {translate.Name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={inquiryData.name}
                className="w-full rounded-md border border-gray-300 p-3 outline-none"
                placeholder={translate.Your_Name}
                onChange={handleInquiryData}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700">
                {translate.Email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={inquiryData.email}
                className="w-full rounded-md border border-gray-300 p-3 outline-none"
                placeholder={translate.Your_Email}
                onChange={handleInquiryData}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            {/* Inquiry */}
            <div>
              <label htmlFor="inquiry" className="block text-gray-700">
                {translate.Inquiry}
              </label>
              <textarea
                id="inquiry"
                name="inquiry"
                value={inquiryData.inquiry}
                className="w-full rounded-md border border-gray-300 p-3 outline-none"
                placeholder={translate.Your_Inquiry}
                onChange={handleInquiryData}
              ></textarea>
              {errors.inquiry && (
                <p className="mt-1 text-sm text-red-600">{errors.inquiry}</p>
              )}
            </div>
            {/* Submit */}
            <button
              type="submit"
              disabled={isValidData}
              className={`w-full rounded-md bg-blue-600 py-3 text-white hover:bg-blue-700 ${isValidData && "cursor-not-allowed"}`}
            >
              {translate.Submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
