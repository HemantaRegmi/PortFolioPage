import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex justify-center space-x-4 bg-lightblack py-3.5">
      <a>
        <Link
          className="semi-bold rounded-lg px-3 text-white  hover:text-cement"
          to="/about"
        >
          About
        </Link>
      </a>
      <a>
        <Link
          className="semi-bold rounded-lg px-3 text-white  hover:text-cement"
          to="/contact"
        >
          Contact
        </Link>
      </a>
      <Link
        className="semi-bold rounded-lg px-3 text-white  hover:text-cement"
        to="/projects"
      >
        Projects
      </Link>
      <a>
        <Link
          className="semi-bold rounded-lg px-3 text-white hover:text-cement"
          to="/resume"
        >
          Resume
        </Link>
      </a>
    </nav>
  );
}
