import Profile from "../assets/images/deea.png";

export default function AboutMe() {
  return (
    <>
      <div
        id="about"
        className="contaier w-[88%] min-h-screen  mx-auto p-5  px-10  "
      >
        <div className="box-content w-full h-full grid grid-cols-1 md:grid-cols-2 md:gap-14 lg:gap-0 gap-14 items-center justify-between">
          <div className="content flex items-center justify-center relative">
            <div className="w-18 h-18 border-3 border-blue-500  absolute rounded-full md:left-0  -bottom-5 -left-10 lg:left-16 lg:-bottom-5"></div>
            <div className="w-14 h-14 bg-blue-500 border-5 border-blue-500 absolute  -bottom-7 left-0 rounded-full lg:left-16 lg:bottom-5"></div>
            <div className="w-18 h-18 border-3 border-blue-500  absolute rounded-full md:right-0 -top-10 -right-10 lg:right-16 lg:-top-5"></div>
            <div className="w-14 h-14 bg-blue-500 border-5 border-blue-500 absolute md:right-4 md:-top-5 -top-10 -right-3  rounded-full lg:right-16 lg:top-5"></div>
            <img
              src={Profile}
              alt=""
              className="lg:w-80 md:h-72 md:object-cover md:w-56 w-80 relative drop-shadow-2xl drop-shadow-black"
            />
          </div>
          <div className="content flex flex-col ">
            <h1 className="text-4xl text-blue-500 text-justify mb-7 md:mb-4 lg:mb-10  font-semibold">
              About Me
            </h1>
            <p className="text-justify md:text-sm lg:text-md  font-light mb-3">
              I’m an active Information Systems student at Horizon University
              with a strong interest in project analysis, web development (HTML,
              CSS, JavaScript), and UI/UX design. I focus on building digital
              interfaces that are both functional and user-friendly.
            </p>
            <p className="text-justify md:text-sm lg:text-md  font-light mb-3">
              I have experience working in teams as well as leading system
              development projects. I enjoy turning ideas into practical
              solutions that combine technical precision with a smooth user
              experience.
            </p>
            <div>
              <h1>Follow Me on :</h1>
              <ul className="md:text-2xl lg:text-3xl mt-3 text-3xl flex gap-5 ">
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
          </div>
        </div>
      </div>
    </>
  );
}
