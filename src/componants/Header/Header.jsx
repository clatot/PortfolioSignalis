function Header() {
  return (
    <header className="col-span-1 flex flex-col items-center h-full bg-slate-400 z-10">
      <h1>Portfolio</h1>
      <p>Web Developper</p>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Works</li>
          <li>Contact</li>
          <li>Credits</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
