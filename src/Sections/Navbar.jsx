import React, {useState, useEffect} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFilePdf} from "react-icons/fa";
import {PiPaperPlaneTiltFill} from "react-icons/pi";
import {Link} from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {id: 1, link: "home"},
    {id: 2, link: "experience"},
    {id: 3, link: "projects"},
    {id: 4, link: "about"},
  ];

  const socials = [
    {
      id: 1,
      icon: <FaFilePdf />,
      href: "https://drive.google.com/file/d/1EswP6VuZBb0qoeVDOvttrYtguTgmBB92/view?usp=sharing",
      label: "Resume",
    },
    {
      id: 2,
      icon: <FaGithub />,
      href: "https://github.com/LaeekAhmed",
      label: "GitHub",
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/laeek-ahmed",
      label: "LinkedIn",
    },
    {
      id: 4,
      icon: <PiPaperPlaneTiltFill />,
      href: "mailto:laeek385@gmail.com",
      label: "Email",
    },
  ];

  return (
    <nav
      className={`fixed w-full h-16 md:h-18 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-800 shadow-xl shadow-gray-600/30" : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        {/* desktop menu */}
        <div className="hidden md:flex items-center flex-grow">
          <ul className="flex justify-between w-full max-w-md">
            {links.map(({id, link}) => (
              <li
                key={id}
                className="capitalize text-sm lg:text-base font-medium cursor-pointer hover:text-gray-50 transition-colors"
              >
                <Link to={link} smooth duration={500} offset={-72}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center space-x-4 lg:space-x-5 ml-auto">
          {socials.map(({id, icon, href, label}) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-50 transition-colors"
              aria-label={label}
            >
              {React.cloneElement(icon, {size: "1.25rem"})}
            </a>
          ))}
        </div>

        {/* mobile menu button */}
        <div onClick={handleClick} className="md:hidden cursor-pointer z-10">
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </div>

      {/* mobile menu */}
      {nav && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-800 flex flex-col justify-center items-center">
          <ul className="text-center">
            {links.map(({id, link}) => (
              <li
                key={id}
                className="py-4 text-xl capitalize cursor-pointer hover:text-gray-50 transition-colors"
              >
                <Link onClick={handleClick} to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex space-x-6 mt-8">
            {socials.map(({id, icon, href, label}) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-50 transition-colors"
                aria-label={label}
              >
                {React.cloneElement(icon, {size: "1.5rem"})}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
