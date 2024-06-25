import { useAtomValue } from "jotai";
import { categorySelection } from "../../atoms";
import Item from "../Item/Item";

const itemsData = {
  HOME: [
    {
      title: "Home 1",
      preview: "",
      description: "Home 1 Blablabla",
      content: ["", "", ""],
      delay: 1500,
    },
    {
      title: "Home 2",
      description: "Home 2 Blablabla",
      delay: 0,
    },
    {
      title: "Home 3",
      description: "Home 3 Blablabla",
      delay: 3500,
    },
    { title: "Home 4", description: "", color: "", delay: 3000 },
    {
      title: "Home 5",
      description: "Home 5 Blablabla",
      delay: 1500,
    },
    {
      title: "Home 6",
      description: "Home 6 Blablabla",
      delay: 2500,
    },
  ],
  ABOUT: [
    { title: "About 3", description: "Blablabla" },
    { title: "About 2", description: "Blablabla" },
    { title: "About 1", description: "Blablabla" },
    { title: "About 4", description: "Blablabla" },
    { title: "About 5", description: "Blablabla" },
    { title: "About 6", description: "Blablabla" },
  ],
  WORKS: [
    { title: "Project 1", description: "Blablabla" },
    { title: "Project 2", description: "Blablabla" },
    { title: "Project 3", description: "Blablabla" },
    { title: "Project 4", description: "Blablabla" },
    { title: "Project 5", description: "Blablabla" },
    { title: "Project 6", description: "Blablabla" },
  ],
  SKILLS: [
    { title: "Skills 1", description: "Blablabla" },
    { title: "Skills 2", description: "Blablabla" },
    { title: "Skills 3", description: "Blablabla" },
    { title: "Skills 4", description: "Blablabla" },
    { title: "Skills 5", description: "Blablabla" },
    { title: "Skills 6", description: "Blablabla" },
  ],
  CONTACT: [
    { title: "Contact 1", description: "Blablabla" },
    { title: "Contact 2", description: "Blablabla" },
    { title: "Contact 3", description: "Blablabla" },
    { title: "Contact 4", description: "Blablabla" },
    { title: "Contact 5", description: "Blablabla" },
    { title: "Contact 6", description: "Blablabla" },
  ],
  CREDITS: [
    { title: "Credits 1", description: "Blablabla" },
    { title: "Credits 2", description: "Blablabla" },
    { title: "Credits 3", description: "Blablabla" },
    { title: "Credits 6", description: "Blablabla" },
    { title: "Credits 4", description: "Blablabla" },
    { title: "Credits 5", description: "Blablabla" },
  ],
};

function Items() {
  const selectedCategory = useAtomValue(categorySelection);

  const selectedData = itemsData[selectedCategory];

  return (
    <div className="col-span-1 grid z-10 h-full gap-2">
      {selectedData.map((item, index) => (
        <Item
          key={index}
          title={item.title}
          content={item.description}
          preview={item.preview}
          delay={item.delay}
        />
      ))}
    </div>
  );
}

export default Items;
