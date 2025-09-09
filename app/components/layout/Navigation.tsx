const Navigation = () => {
  return (
    <nav className="fixed top-6 left-36 right-36 z-50 backdrop-blur-md bg-white/10 border border-gray-400/20 rounded-2xl px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-800">
          zakk fast <span className="text-cyan-400">.</span>
        </div>
        <div>
          <ul className="flex items-center space-x-8">
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors">
              About
            </li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors">
              Projects
            </li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors">
              Blog
            </li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors">
              Contact
            </li>
            <li>
              <button className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-white transition-colors">
                Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
