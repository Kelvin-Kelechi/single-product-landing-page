import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import { useTheme } from "../../theme-context";
import about from "../../assets/teamwork-concept-landing-page.png";

const About = () => {
  const { isDark } = useTheme();

  return (
    <Element name="about">
      <section className={`px-8 grid grid-cols-1 pt-8 md:pt-4 md:grid-cols-2 h-full w-full place-items-center ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <div className="flex flex-col justify-center h-full w-full md:w-3/4 px-4 md:px-0">
          <span className={`font-bold font-kufam text-2xl md:text-4xl flex justify-center my-10 ${isDark ? "text-white" : "text-[#663399]"}`}>
            About Us
          </span>
          <span className={`font-kufam text-sm md:text-lg mb-4 md:mb-6 font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Welcome to <b className={isDark ? "text-white" : "text-[#663399]"}>SmartShopX!</b>
            <br />
            We offer top-quality products at unbeatable prices.
            <br />
            <br />
            <strong>Our Mission</strong>
            <br />
            Making online shopping easy, affordable, and enjoyable.
            <br />
            <br />
            <strong>What We Offer</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Wide selection of tech gadgets, fashion, and home decor.</li>
              <li>High standards through trusted suppliers.</li>
              <li>Prompt order processing and delivery.</li>
              <li>Friendly customer support.</li>
            </ul>
            <br />
            <strong>Why Choose Us?</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Reliable, high-quality products.</li>
              <li>Competitive prices.</li>
              <li>Your satisfaction is our priority.</li>
            </ul>
            <br />
            <strong>Our Story</strong>
            <br />
            Founded in [Year], we've grown into a thriving dropshipping
            business.
            <br />
            <br />
            <strong>Join Our Community</strong>
            <br />
            Follow us on social media and subscribe to our newsletter.
            <br />
            <br />
            Thank you for choosing <b className={isDark ? "text-white" : "text-[#663399]"}>SmartShopX!</b>.
          </span>

          <Link
            to="/register"
            className="button font-kufam px-8 md:px-10 rounded-e-xl text-lg md:text-xl py-2 md:py-3 my-6 md:my-8 self-start bg-[#663399] text-white"
          >
            Buy Now
          </Link>
        </div>
        <div className="relative">
          <img src={about} alt="About Us" className="w-full h-auto" />
        </div>
      </section>
    </Element>
  );
};

export default About;
