export default function Card({ img, desc, title, tech, role }) {
  return (
    <>
      <div className="card w-full h-full p-3 bg-neutral-950 px-5 rounded-lg shadow-md shadow-blue-950 ">
        <div className="card-content grid grid-cols-1 md:grid-cols-2 gap-5 w-full h-full">
          <div className="w-full h-full order-2 md:order-1">
            <h1 className="font-bold text-2xl">{title}</h1>
            <p className="text-sm font-thin   mt-5 text-justify">{desc}</p>
            <div className="flex justify-between items-center mt-5 mb-3">
              <p className="text-xs opacity-60 ">Role : {role}</p>
              <p className="text-xs opacity-60 ">Tech : {tech}</p>
            </div>
          </div>
          <div className="w-full h-full order-1 md:order-2 flex justify-end items-end">
            <img
              src={img}
              alt=""
              className="w-96 object-cover rounded-lg h-36"
            />
          </div>
        </div>
      </div>
    </>
  );
}
