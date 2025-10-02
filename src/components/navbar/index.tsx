import type { SelectedPage } from "../../shared/types";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex justify-center space-x-4">
      <Link to={`/${"about" as SelectedPage}`}>About</Link>
      <Link to={`/${"contact" as SelectedPage}`}>Contact</Link>
      <Link to={`/${"projects" as SelectedPage}`}>Projects</Link>
      <Link to={`/${"resume" as SelectedPage}`}>Resume</Link>
    </nav>
  );
}
