import Card from "../components/Card";
import ProjectData from "../data/ProjectData";

export default function Project() {
  return (
    <>
      <div
        id="projects"
        className="container mx-auto w-full min-h-screen mt-28 "
      >
        <div className="box-content mx-auto w-[88%] h-full">
          <div className="content w-full h-full relative">
            <h1 className="text-center text-4xl font-bold">My Projects</h1>
            <div className="flex w-full mx-auto flex-wrap mt-14 items-center md:gap-10 lg:gap-8 gap-8 justify-center">
              {ProjectData.map((project, index) => (
                <Card
                  key={index}
                  img={project.img}
                  title={project.title}
                  desc={project.desc}
                  tech={project.tech}
                  role={project.role}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
