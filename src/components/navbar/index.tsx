import { Link } from "react-router-dom";
import navLinks from "../../routes/routePaths";
import { useState } from "react";

{
  /* <Link
          className="semi-bold rounded-lg px-3 text-white  hover:text-cement"
          to="/contact"
        </Link> */
}

export default function NavBar() {
  //use case setting up for react button dropdown for the nav
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-lightblack py-3.5 px-1">
      <div className="hidden sm:flex justify-center items-center">
        {navLinks.map((link) => (
          <ul key={link.path}>
            <Link
              className="semi-bold rounded-lg px-3 text-white hover:text-cement"
              to={link.path}
            >
              {link.label}
            </Link>
          </ul>
        ))}
      </div>
      <div className="flex justify-end">
        <button className=" sm:hidden text-white px-3" onClick={handleClick}>
          Click
        </button>
      </div>

      {isOpen && (
        <ul className="flex flex-col items-center transition mt-4 space-y-3 sm:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="semi-bold rounded-lg px-3 py-2 text-white hover:text-cement"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
}
