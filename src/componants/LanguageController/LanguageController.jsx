function LanguageController() {
  return (
    <div className="flex flex-col mt-8 gap-2 sm:flex-row">
      <div className="relative">
        <p className=" absolute left-9 bottom-0">FR</p>
        <img src="./images/Language.svg" alt="" className="" />
      </div>
      <div className="relative">
        <p className="absolute left-9 bottom-0">EN</p>
        <img src="./images/Language.svg" alt="" className="" />
      </div>
    </div>
  );
}

export default LanguageController;
