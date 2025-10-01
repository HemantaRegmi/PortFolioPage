export default function NavBar() {
  return (
    <nav className="flex justify-center space-x-4">
      <a
        href="/about"
        className="font-b rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      >
        About
      </a>
      <a
        href="/projects"
        className="font-b rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      >
        Projects
      </a>
      <a
        href="/resume"
        className="font-b rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      >
        Resume
      </a>
      <a
        href="/contact"
        className="font-b rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      >
        Contact
      </a>
    </nav>
  );
}
