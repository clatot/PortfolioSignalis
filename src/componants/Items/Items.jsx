import { useNavigation } from "../../contexts/NavigationContext";
import Item from "../Item/Item";

const itemsData = {
  HOME: [
    {
      title: "Home 1",
      preview: ":3",
      description: "Home 1 Blablabla",
      color: "",
      delay: 1500,
    },
    {
      title: "Home 2",
      description: "Home 2 Blablabla",
      color: "",
      delay: 0,
    },
    {
      title: "Home 3",
      description: "Home 3 Blablabla",
      color: "",
      delay: 3500,
    },
    { title: "Home 4", description: "", color: "", delay: 3000 },
    {
      title: "Home 5",
      description: "Home 5 Blablabla",
      color: "",
      delay: 1500,
    },
    {
      title: "Home 6",
      description: "Home 6 Blablabla",
      color: "",
      delay: 2500,
    },
  ],
  ABOUT: [
    { title: "About 3", description: "Blablabla", color: "" },
    { title: "About 2", description: "Blablabla", color: "" },
    { title: "About 1", description: "Blablabla", color: "" },
    { title: "About 4", description: "Blablabla", color: "" },
    { title: "About 5", description: "Blablabla", color: "" },
    { title: "About 6", description: "Blablabla", color: "" },
  ],
  WORKS: [
    { title: "Project 1", description: "Blablabla", color: "" },
    { title: "Project 2", description: "Blablabla", color: "" },
    { title: "Project 3", description: "Blablabla", color: "" },
    { title: "Project 4", description: "Blablabla", color: "" },
    { title: "Project 5", description: "Blablabla", color: "" },
    { title: "Project 6", description: "Blablabla", color: "" },
  ],
  SKILLS: [
    { title: "Skills 1", description: "Blablabla", color: "" },
    { title: "Skills 2", description: "Blablabla", color: "" },
    { title: "Skills 3", description: "Blablabla", color: "" },
    { title: "Skills 4", description: "Blablabla", color: "" },
    { title: "Skills 5", description: "Blablabla", color: "" },
    { title: "Skills 6", description: "Blablabla", color: "" },
  ],
  CONTACT: [
    { title: "Contact 1", description: "Blablabla", color: "" },
    { title: "Contact 2", description: "Blablabla", color: "" },
    { title: "Contact 3", description: "Blablabla", color: "" },
    { title: "Contact 4", description: "Blablabla", color: "" },
    { title: "Contact 5", description: "Blablabla", color: "" },
    { title: "Contact 6", description: "Blablabla", color: "" },
  ],
  CREDITS: [
    { title: "Credits 1", description: "Blablabla", color: "" },
    { title: "Credits 2", description: "Blablabla", color: "" },
    { title: "Credits 3", description: "Blablabla", color: "" },
    { title: "Credits 6", description: "Blablabla", color: "" },
    { title: "Credits 4", description: "Blablabla", color: "" },
    { title: "Credits 5", description: "Blablabla", color: "" },
  ],
};

function Items() {
  const { selectedCategory } = useNavigation();

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
