import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import VideoSection from "./components/Video/Video";

function App() {
  return (
    <>
      <div className=" min-h-screen">
        <Navbar />
        <div>
          <Home />
          <VideoSection />
        </div>
      </div>
    </>
  );
}
``;
export default App;
