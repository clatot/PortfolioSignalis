import CV from "../CV/CV";
import LanguageController from "../LanguageController/LanguageController";
import Navigation from "../Navigation/Navigation";
import SoundController from "../SoundController/SoundController";
import ThemeController from "../ThemeController/ThemeController";

function Header() {
  return (
    <header className="col-span-1 flex flex-col items-center bg-red h-full z-40 w-1/4 sm:w-full">
      <h1 className="text-3xl mt-4 w-full sm:w-2/3">
        <img
          src="./images/ClatotSignalis.svg"
          alt="Clatot"
          className="w-[1000px] sm:w-full"
        />
      </h1>
      <p className="text-2xl mb-8 sm:mb-4 text-center">Web Developper</p>
      <Navigation />
      <div className="flex">
        <SoundController />
      </div>
      <div className="flex">
        <LanguageController />
        <CV />
      </div>
    </header>
  );
}

export default Header;
