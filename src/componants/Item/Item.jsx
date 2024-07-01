import { useAtom } from "jotai";
import { focusItem, lightboxActive } from "../../atoms";
import { useEffect, useState } from "react";

function Item({ title, preview, code, content, delay, error }) {
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

  return (
    <div
      className={`relative flex-1 flex font-bold opacity-0 w-max max-w-[420px] max-h-[108px] ${
        isBlinking ? "animate-clignotement" : ""
      }`}
    >
      <img src="./images/Item2.svg" alt="" className="h-full w-auto" />
      <div
        className={`absolute left-2 w-4/6 h-full flex flex-col justify-end ${
          error ? "text-red-900" : ""
        }`}
      >
        <div className="absolute top-0 right-0 mr-4 mt-1 text-2xl">{code}</div>
        <p className="relative top-0 text-xl">{preview}</p>
        <p className="relative top-0 text-4xl font-bold mb-1">{title}</p>
      </div>
      <div
        className="absolute right-0 h-full w-2/6 pl-4 cursor-pointer"
        onClick={handleClick}
      >
        <p className="text-2xl">Text</p>
      </div>
    </div>
  );
}

export default Item;
