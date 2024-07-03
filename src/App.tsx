import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import VideoSection from "./components/Video/Video";
import {   useTheme } from "./theme-context";
import '../src/index.css';
import { AiFillSun } from "react-icons/ai";
import { IoIosMoon } from "react-icons/io";

function App() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
      <Navbar />
      <div>
        <Home />
        <VideoSection />
        <About />
        <ContactUs />
      </div>
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-2 bg-[#663399] text-white rounded-full shadow-lg focus:outline-none"
      >
        {isDark ? <AiFillSun className="w-6 h-6" /> : <IoIosMoon  className="w-6 h-6" />}
      </button>
    </div>
  );
}

export default App;

