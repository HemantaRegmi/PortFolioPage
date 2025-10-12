import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex justify-center space-x-4 bg-gray-900 py-3.5">
      <a>
        <Link
          className="semi-bold rounded-lg px-3 text-white  hover:text-gray-400"
          to="/about"
        >
          About
        </Link>
      </a>
      <a>
        <Link
          className="semi-bold rounded-lg px-3 text-white  hover:text-gray-400"
          to="/contact"
        >
          Contact
        </Link>
      </a>
      <Link
        className="semi-bold rounded-lg px-3 text-white  hover:text-gray-400"
        to="/projects"
      >
        Projects
      </Link>
      <a>
        <Link
          className="semi-bold rounded-lg px-3 text-white hover:text-gray-400"
          to="/resume"
        >
          Resume
        </Link>
        <button type="button">Hello</button>
      </a>
    </nav>
  );
}
