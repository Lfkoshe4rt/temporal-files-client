const Menu = ({ className }: { className: string }) => {
  return (
    <ul className={className}>
      <li>
        <a href="/">Inicio</a>
      </li>
      <li>
        <a href="/contacto">Contacto</a>
      </li>
    </ul>
  );
};

export default Menu;
