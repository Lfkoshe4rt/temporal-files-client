const Header = () => {
  return (
    <header>
      <nav className="h-12  flex items-center justify-between w-full px-12">
        <a href="/" className="text-xl font-bold uppercase">
          Temporal files
        </a>
        <ul className="flex gap-5">
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
