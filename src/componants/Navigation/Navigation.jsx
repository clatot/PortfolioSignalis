import NavIcon from "../NavIcon/NavIcon";
import { useAtom } from "jotai";
import { categorySelection } from "../../atoms";

function Navigation() {
  const [selectedCategory, setSelectedCategory] = useAtom(categorySelection);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <nav>
      <ul className="flex flex-col gap-2 sm:flex-row flex-wrap sm:justify-center">
        <NavIcon
          category="HOME"
          isSelected={selectedCategory === "HOME"}
          onClick={() => handleCategoryClick("HOME")}
        />
        <NavIcon
          category="EXPERIENCE"
          isSelected={selectedCategory === "EXPERIENCE"}
          onClick={() => handleCategoryClick("EXPERIENCE")}
        />
        <NavIcon
          category="SKILLS"
          isSelected={selectedCategory === "SKILLS"}
          onClick={() => handleCategoryClick("SKILLS")}
        />
        <NavIcon
          category="WORKS"
          isSelected={selectedCategory === "WORKS"}
          onClick={() => handleCategoryClick("WORKS")}
        />
        <NavIcon
          category="CONTACT"
          isSelected={selectedCategory === "CONTACT"}
          onClick={() => handleCategoryClick("CONTACT")}
        />
        <NavIcon
          category="CREDITS"
          isSelected={selectedCategory === "CREDITS"}
          onClick={() => handleCategoryClick("CREDITS")}
        />
      </ul>
    </nav>
  );
}

export default Navigation;
