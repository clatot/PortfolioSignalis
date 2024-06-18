import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="col-span-1 flex flex-col items-center bg-red h-full z-10">
      <h1>Portfolio</h1>
      <p>Web Developper</p>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="w-full">
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
