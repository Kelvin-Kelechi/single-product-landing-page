import { Link } from "react-router-dom";
import contact from "../../assets/contact-us-concept-landing-page.png";
import { Element } from "react-scroll";
import { useTheme } from "../../theme-context";

const ContactUs = () => {
  const { isDark } = useTheme();

  return (
    <Element name="contact">
      <section className={`flex flex-col md:flex-row items-center justify-center py-12 px-8 md:px-16 ${isDark ? "bg-gray-900" : "bg-white"}`}>
        <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
          <img src={contact} alt="Customer Support" className="w-full h-auto" />
        </div>
        <div className={`flex flex-col w-full md:w-1/2 p-8 rounded-lg shadow-lg ${isDark ? "bg-gray-800" : "bg-white"}`}>
          <h2 className={`text-2xl md:text-4xl font-kufam font-bold mb-6 ${isDark ? "text-white" : "text-[#663399]"}`}>
            Contact Us
          </h2>
          <label className={`mb-2 font-kufam font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className={`mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 w-full ${isDark ? "bg-gray-700 border-gray-600 focus:ring-purple-400 text-white" : "border-gray-300 focus:ring-purple-600"}`}
            placeholder="Enter your name"
          />
          <label className={`mb-2 font-kufam font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 w-full ${isDark ? "bg-gray-700 border-gray-600 focus:ring-purple-400 text-white" : "border-gray-300 focus:ring-purple-600"}`}
            placeholder="Enter your email"
          />
          <label className={`mb-2 font-kufam font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className={`mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 w-full ${isDark ? "bg-gray-700 border-gray-600 focus:ring-purple-400 text-white" : "border-gray-300 focus:ring-purple-600"}`}
            rows={4}
            placeholder="Enter your message"
          />
          <Link
            to="/register"
            className="font-kufam px-8 md:px-10 rounded-s-xl text-lg md:text-xl py-2 md:py-3 mt-4 bg-[#663399] text-white text-center hover:bg-[#5b2e82] transition duration-300"
          >
            Send Message
          </Link>
        </div>
      </section>
    </Element>
  );
};

export default ContactUs;
