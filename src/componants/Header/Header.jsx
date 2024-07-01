import CV from "../CV/CV";
import LanguageController from "../LanguageController/LanguageController";
import Navigation from "../Navigation/Navigation";
import SoundController from "../SoundController/SoundController";
import ThemeController from "../ThemeController/ThemeController";

function Header() {
  return (
    <header className="col-span-1 flex flex-col items-center bg-red h-full z-10 w-1/6">
      <h1 className="text-3xl mt-4">Raphael Clatot</h1>
      <p className="text-xl mb-8">Web Developper</p>
      <div className="flex">
        <Navigation />
      </div>
      <div className="flex bg-slate-500">
        <ThemeController />
        <SoundController />
      </div>
      <div className="flex bg-slate-500">
        <LanguageController />
        <CV />
      </div>
    </header>
  );
}

export default Header;
