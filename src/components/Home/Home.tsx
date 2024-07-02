import { hero } from "./data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % hero.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hero.length]);
  return (
    <>
      <Element name="home">
        <section className="px-8 grid grid-cols-1 mt-8 md:mt-4 md:grid-cols-2 h-full w-full place-items-center  ">
          <div className="flex flex-col justify-center h-full w-full md:w-3/4 px-4 md:px-0">
            <h3 className="text-black font-kufam text-3xl md:text-4xl mb-4 md:mb-6 font-medium">
              Get the Latest iPhones at Unbeatable Prices!
            </h3>
            <p className="text-[#A9A9A9] mb-4 md:mb-6 font-kufam text-sm md:text-base font-normal leading-6 md:leading-7">
              Engage your guests with exciting lottery games and big prizes.
              Easy to play, hard to forget.
            </p>
            <Link
              to="/register"
              className="button font-kufam px-8 md:px-10 rounded-e-xl text-lg md:text-xl py-2 md:py-3 my-6 md:my-8 self-start bg-[#663399] text-white"
            >
              Buy Now
            </Link>
          </div>
          <div className="relative rounded overflow-hidden w-full h-[300px] md:h-[500px] lg:h-[800px]">
            {hero.map((data, index) => (
              <img
                key={index}
                src={data.image}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </section>
      </Element>
    </>
  );
};
export default Home;
