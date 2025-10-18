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
    <nav className=" bg-lightblack py-5 px-1">
      <section className="flex justify-between items-center ">
        <Link
          to="/about"
          className="semi-bold rounded-lg text-white  hover:text-gray-300 ml-3"
        >
          Regmi Portfolio
        </Link>

        <div className="hidden sm:flex spaqce-x-1.5 me-3">
          {navLinks.map((link) => (
            <ul key={link.path}>
              <Link
                className="semi-bold rounded-lg px-3 text-white hover:text-gray-300"
                to={link.path}
              >
                {link.label}
              </Link>
            </ul>
          ))}
        </div>

        <button
          type="button"
          className=" relative sm:hidden p-1 rounded-md hover:bg-white/10 text-white me-3 cursor-pointer"
          onClick={handleClick}
        >
          <span className="absolute -inset-1 "></span>
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              data-slot="icon"
              aria-hidden="true"
              className="size-6  "
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              data-slot="icon"
              aria-hidden="true"
              className="size-6"
            >
              <path
                d="M6 18 18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </section>

      <ul
        className={`flex flex-col items-center sm:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen
            ? "max-h-60 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="semi-bold rounded-lg px-3 py-1 text-white hover:text-gray-300"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
