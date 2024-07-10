import CV from "../CV/CV";
import LanguageController from "../LanguageController/LanguageController";
import Navigation from "../Navigation/Navigation";
import SoundController from "../SoundController/SoundController";

function Header() {
  function handleClickGit() {
    window.open("https://github.com/clatot/PortfolioSignalis", "_blank");
  }

  function handleClickCV() {
    window.open("./CV_Raphael_Clatot.pdf", "_blank");
  }

  return (
    <header className="col-span-1 flex flex-col items-center  justify-center bg-red h-full z-40 w-1/4 sm:w-full">
      <h1 className="text-3xl mt-4 w-full sm:w-2/3">
        <img
          src="./images/ClatotSignalis.svg"
          alt="Clatot"
          className="w-[1000px] sm:w-full"
        />
      </h1>
      <p className="text-2xl mb-8 sm:mb-4 text-center">Web Developper</p>
      <Navigation />
      <div className="flex items-end gap-4 my-4">
        <LanguageController />
        <div className="flex gap-4 ">
          <div onClick={handleClickCV}>
            <img
              src="./icons/file-regular.svg"
              alt=""
              className="w-[38px] hover:w-[40px] cursor-pointer"
            />
          </div>
          <div onClick={handleClickGit}>
            <img
              src="./icons/github.svg"
              alt=""
              className="w-[48px] hover:w-[50px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
