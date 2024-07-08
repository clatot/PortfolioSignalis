function NavIcon({ category, isSelected, onClick }) {
  return (
    <li
      onClick={onClick}
      className={`relative flex-grow overflow-hidden h-8 sm:grow-0 ${
        isSelected ? "text-black" : ""
      }`}
    >
      <p className="absolute flex justify-center w-full text-2xl font-bold tracking-widest">
        {category}
      </p>
      <img
        src={isSelected ? "./images/NavIconSelect.svg" : "./images/NavIcon.svg"}
        alt=""
        className=" claw-full h-full"
      />
    </li>
  );
}

export default NavIcon;
