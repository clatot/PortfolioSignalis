import { useAtom } from "jotai";
import { focusItem, lightboxActive } from "../../atoms";
import { useEffect, useState } from "react";

function Item({ title, content, preview, delay }) {
  const [active, setActive] = useAtom(lightboxActive);
  const [focusedItem, setFocusedItem] = useAtom(focusItem);
  const [isBlinking, setIsBlinking] = useState(false);

  function handleClick() {
    if (content) {
      setActive(true);
      setFocusedItem(content);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlinking(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  if (content) {
    return (
      <div
        className={`relative flex-1 flex font-bold opacity-0 ${
          isBlinking ? "animate-clignotement" : ""
        }`}
      >
        <img src="./images/Item2.svg" alt="" className="h-full w-auto" />
        <div className="absolute left-2 w-4/6 h-full flex flex-col justify-end">
          <p className="relative top-0">{preview}</p>
          <p className="relative top-0">{preview}</p>
          <p className="relative top-0 text-3xl font-bold">{title}</p>
        </div>
        <div
          className="absolute right-0 h-full w-2/6 pl-4 cursor-pointer"
          onClick={handleClick}
        >
          <p className="text-2xl">Text</p>
        </div>
      </div>
    );
  } else
    return (
      <div
        className={`relative flex-1 flex text-red-900 font-bold  opacity-0 ${
          isBlinking ? "animate-clignotement" : ""
        }`}
      >
        <img src="./images/Item2.svg" alt="" className="h-full w-auto" />
        <div className="absolute left-0 w-4/6 h-full">
          <p className="relative left-2 top-0 text-5xl">ERROR 404</p>
        </div>
        <div className="absolute right-0 h-full w-2/6 pl-4 text-2xl">
          <p className="">ERROR</p>
        </div>
      </div>
    );
}

export default Item;
