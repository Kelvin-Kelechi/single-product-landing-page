import { Element } from "react-scroll";
const VideoSection = () => {
  return (
    <Element name="product-video">
      <section className="px-8 mt-[100px] py-12 h-full w-full place-items-center">
        <div className="max-w-screen-lg mx-auto">
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
