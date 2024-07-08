import { useAtom } from "jotai";
import { focusItem, lightboxActive } from "../../atoms";
import { useEffect, useState } from "react";

function Item({ title, preview, code, logo, content, delay, error, link }) {
  const [active, setActive] = useAtom(lightboxActive);
  const [focusedItem, setFocusedItem] = useAtom(focusItem);
  const [isBlinking, setIsBlinking] = useState(false);

  function handleClick() {
    if (link) {
      window.open(link, "_blank");
      console.log("click");
    } else if (content) {
      setActive(true);
      setFocusedItem(content);
      console.log("clack");
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
      className={`relative flex-1 flex font-bold opacity-0 w-max max-w-[420px] max-h-[108px] sm:w-full ${
        isBlinking ? "animate-clignotement" : ""
      }`}
    >
      <img src="./images/Item2.svg" alt="" className="h-full w-auto" />
      <div
        className={`absolute left-2 w-4/6 h-full flex flex-col justify-end ${
          error ? "text-red-900" : ""
        }`}
      >
        <p className="absolute top-0 right-0 mr-4 mt-1 text-2xl sm:text-base">
          {code}
        </p>
        <p className="relative top-0 text-xl sm:text-base">{preview}</p>
        <p className="relative top-0 text-4xl font-bold mb-1 sm:text-2xl">
          {title}
        </p>
      </div>
      <div
        className={`absolute right-0 h-full w-2/6 pl-4 sm:pl-2 ${
          !error ? "cursor-pointer" : ""
        }`}
        onClick={!error ? handleClick : null}
      >
        <div className="flex absolute gap-12 right-4 bottom-4 sm:left-4 sm:gap-8">
          <img src={logo} alt="" className="w-[30px] sm:w-[20px]" />
          <img
            src={error ? "./images/ArrowRed.svg" : "./images/ArrowBlue.svg"}
            alt=""
            className="w-[24px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Item;
