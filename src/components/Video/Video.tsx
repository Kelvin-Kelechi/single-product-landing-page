import { Element } from "react-scroll";
import { useTheme } from "../../theme-context";

const VideoSection = () => {
  const { isDark } = useTheme();

  return (
    <Element name="product-video">
      <section className={`px-8 pt-[100px] py-12 h-full w-full place-items-center ${isDark ? "bg-gray-900" : "bg-white"}`}>
        <div className="max-w-screen-lg mx-auto">
          <span className={`font-bold font-kufam text-2xl md:text-4xl flex justify-center my-10 ${isDark ? "text-white" : "text-[#663399]"}`}>
            Product Video
          </span>
          <div style={{ marginBottom: "120px" }}>
            <video
              style={{ display: "inline-block", verticalAlign: "baseline" }}
              width="100%"
              controls
              autoPlay
              src="/iphone15Pro.mp4"
            >
              <source src="/iphone15Pro.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default VideoSection;

