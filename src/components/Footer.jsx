export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Profil */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Dea Amelia</h2>
          <p className="text-gray-400 text-sm">
            UI/UX Designer || Front End Dev
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Navigation</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-white">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Project
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white">
                Skills
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Me</h3>
          <a href="mailto:deaamelia1520@gmail.com">
            <p className="text-gray-400 text-sm mb-3">
              deaamelia1520@gmail.com
            </p>
          </a>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <i className="ri-github-line"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <i className="ri-linkedin-box-line"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <i className="ri-instagram-line"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Muhamad Rifai. Dibuat dengan React &
        TailwindCSS.
      </div>
    </footer>
  );
}
