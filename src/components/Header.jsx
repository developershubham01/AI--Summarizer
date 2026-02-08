import React, { useState, useEffect } from 'react';
import { FiMoon, FiSun, FiGithub , FiMenu, FiX} from 'react-icons/fi';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || 
           window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);
 useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 640) {
      setMenuOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);


  return (
   <header className="sticky top-0 z-50">


     <div className="glass-card mx-4 mt-4 rounded-2xl relative">

        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
                  <img
                  src={logo}
                  alt="AI Summarizer Logo"
                  className="w-10 h-9 rounded-xl"
                />

              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  AI Summarizer
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Extract insights from any article
                </p>
              </div>
            </div>
<div className="ml-auto flex items-center gap-3 sm:gap-6">


 <div className="hidden sm:flex items-center gap-4">

<Link
  to="/"
  className="relative text-sm md:text-base font-medium text-gray-700 dark:text-gray-300
             hover:text-violet-600 dark:hover:text-fuchsia-400 transition
             after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
             after:bg-gradient-to-r after:from-violet-500 after:to-fuchsia-500
             after:transition-all after:duration-300 hover:after:w-full"
>
  Home 
</Link>


  <Link
  to="/Blogpage"
  className="relative text-sm md:text-base font-medium text-gray-700 dark:text-gray-300
             hover:text-violet-600 dark:hover:text-fuchsia-400 transition
             after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
             after:bg-gradient-to-r after:from-violet-500 after:to-fuchsia-500
             after:transition-all after:duration-300 hover:after:w-full"
>
  Blog 
</Link>

<Link
  to="/Contactpage"
  className="relative text-sm md:text-base font-medium text-gray-700 dark:text-gray-300
             hover:text-violet-600 dark:hover:text-fuchsia-400 transition
             after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
             after:bg-gradient-to-r after:from-violet-500 after:to-fuchsia-500
             after:transition-all after:duration-300 hover:after:w-full"
>
  Contact 
</Link>


  </div>

  <div className="flex items-center gap-3">

    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-700/80 
               border border-violet-200 dark:border-violet-800 transition-all duration-200 
               hover:scale-105 active:scale-95"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <FiSun className="text-xl text-yellow-500" />
      ) : (
        <FiMoon className="text-xl text-violet-600" />
      )}
    </button>
{/* Mobile Menu Button */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="sm:hidden p-3 rounded-xl bg-white/50 dark:bg-gray-800/50
             border border-violet-200 dark:border-violet-800
             transition-all hover:scale-105"
>
  {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
</button>

   <a
  href="https://github.com/developershubham01"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden sm:flex p-3 rounded-xl bg-white/50 dark:bg-gray-800/50
             hover:bg-white/80 dark:hover:bg-gray-700/80
             border border-violet-200 dark:border-violet-800
             transition-all duration-200
             hover:scale-105 active:scale-95"
>

      <FiGithub className="text-xl text-gray-700 dark:text-gray-300" />
    </a>

  </div>

</div>
{/* Mobile Dropdown Menu */}
{menuOpen && (
  <div
    className="sm:hidden absolute left-0 right-0 top-full
               mx-4 mt-3 rounded-2xl
               glass-card px-6 py-6
               border border-violet-200 dark:border-violet-800
               flex flex-col gap-5"
  >
    <Link
      to="/"
      onClick={() => setMenuOpen(false)}
      className="text-gray-700 dark:text-gray-300 font-medium"
    >
      Home
    </Link>

    <Link
      to="/Blogpage"
      onClick={() => setMenuOpen(false)}
      className="text-gray-700 dark:text-gray-300 font-medium"
    >
      Blog
    </Link>

    <Link
      to="/Contactpage"
      onClick={() => setMenuOpen(false)}
      className="text-gray-700 dark:text-gray-300 font-medium"
    >
      Contact
    </Link>

    <a
      href="https://github.com/developershubham01"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium"
    >
      <FiGithub /> GitHub
    </a>

    <button
      onClick={() => {
        setDarkMode(!darkMode);
        setMenuOpen(false);
      }}
      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium"
    >
      {darkMode ? <FiSun /> : <FiMoon />}
      Toggle Theme
    </button>
  </div>
)}


          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;