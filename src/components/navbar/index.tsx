import { Link } from "react-router-dom";
import navLinks from "../../routes/routePaths";

{
  /* <Link
          className="semi-bold rounded-lg px-3 text-white  hover:text-cement"
          to="/contact"
        </Link> */
}

export default function NavBar() {
  return (
    <nav className="flex justify-center space-x-4 bg-lightblack py-3.5">
      {navLinks.map((link) => (
        <ul>
          <Link
            to={link.path}
            key={link.path}
            className="semi-bold rounded-lg px-3 text-white  hover:text-cement"
          >
            {link.label}
          </Link>
        </ul>
      ))}
    </nav>
  );
}
