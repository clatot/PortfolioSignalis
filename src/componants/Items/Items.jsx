import { useAtomValue } from "jotai";
import { categorySelection } from "../../atoms";
import Item from "../Item/Item";
import itemsData from "../../assets/data/itemData";

function Items() {
  const selectedCategory = useAtomValue(categorySelection);

  const selectedData = itemsData[selectedCategory];

  return (
    <div className="col-span-1 flex flex-col justify-center z-10 h-full gap-2 ">
      {selectedData.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          preview={item.preview}
          code={item.code}
          logo={item.logo}
          content={item.content}
          delay={item.delay}
          error={item.error}
          link={item.link}
        />
      ))}
    </div>
  );
}

export default Items;
