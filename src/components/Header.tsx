const Header = () => {
  return (
    <header>
      <nav className="mt-3 flex h-12 w-full items-center justify-between px-2 sm:px-12">
        <a href="/" className="text-xl font-bold uppercase">
          Temporal files
        </a>
        <button className="sm:hidden">
          <svg
            className="h-6 w-6 sm:hidden"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <ul className="hidden gap-5 sm:flex">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
