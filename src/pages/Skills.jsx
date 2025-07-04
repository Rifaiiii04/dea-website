import Skill from "../assets/images/skill.png";
import skills from "../data/SkillData";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <>
      <div
        data-aos="fade-right"
        id="skills"
        className="container w-full min-h-screen mt-28 md:mt-0 "
      >
        <div className="box-content mx-auto w-[88%]  h-full">
          <div className="content w-full h-full relative">
            <h1 className="text-center text-4xl font-bold">My Skills</h1>
            <img
              src={Skill}
              alt=""
              className="absolute scale-180 md:scale-150 opacity-10 md:right-10 -top-18 md:-top-44 -right-16 lg:-top-72 lg:right-64"
            />
            <div className="flex w-full mx-auto flex-wrap mt-14 items-center md:gap-10 lg:gap-8 gap-8 justify-center">
              {skills.map((skill) => (
                <img
                  src={skill.img}
                  alt=""
                  className="w-28 md:w-36 transform hover:scale-125 relative transition-all duration-300 "
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
