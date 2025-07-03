import { TypeAnimation } from "react-type-animation";
import "remixicon/fonts/remixicon.css";

import HeroSection from "../assets/images/herosection.png";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="container  w-full mx-auto lg:min-h-screen px-10 md:mb-28 lg:mb-0 mb-28 mt-32 min-h-screen"
      >
        <div className="box-content  md:w-full lg:w-[88%] w-[88%] mx-auto p-3 grid md:grid-cols-[80px_2fr_2fr] grid-cols-1 gap-10 md:gap-2  justify-between items-center">
          <div className="content w-full  md:w-14 flex flex-row md:flex-col md:order-1 order-3 items-center gap-4 justify-center h-full ">
            <div className="w-full md:w-0.5 md:h-16 lg:h-20 rounded-full h-0.5 bg-white"></div>
            <div>
              <ul className="md:text-2xl lg:text-3xl text-3xl flex gap-5 md:flex-col">
                <li>
                  <a href="#" target="_blank">
                    <i className="ri-instagram-line"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="ri-linkedin-box-line"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="ri-github-line"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-0.5 md:h-16 lg:h-20 rounded-full h-0.5 bg-white"></div>
          </div>
          <div className="content w-full  h-full flex order-2 md:text-start text-center flex-col justify-center ">
            <p className="text-center md:text-start indent-1">Hello, I'am</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ">
              Dea Amelia
            </h1>

            <TypeAnimation
              sequence={["UI/UX Designer", 1200, "Front End Dev", 1200]}
              wrapper="span"
              repeat={Infinity}
              style={{ marginLeft: 2 }}
            />
            <div className="flex gap-5">
              <a
                href="#"
                className="w-36 py-2 mt-3 rounded-md text-center hover:bg-white hover:text-blue-500 transition-all duration-300 font-bold bg-blue-500 "
              >
                View My CV
              </a>
              <a
                href="#"
                className="w-36 py-2 mt-3 rounded-md text-center hover:bg-white hover:text-blue-500 transition-all duration-300 font-bold bg-blue-500 "
              >
                View More
              </a>
            </div>
          </div>
          <div className="content w-full md:order-3 order-1 h-full md:relative lg:left-0 md:left-10 flex items-center justify-center ">
            <img src={HeroSection} alt="" className="w-[500px] scale-110" />
          </div>
        </div>
      </div>
    </>
  );
}
