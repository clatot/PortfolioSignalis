import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import { focusItem, lightboxActive } from "../../atoms";

function Lightbox() {
  const [active, setActive] = useAtom(lightboxActive);
  const focusedItem = useAtomValue(focusItem);

  if (!active) {
    return null;
  }

  function handleClose() {
    setActive("");
  }

  function handleClick() {
    window.open(focusedItem[6], "_blank");
  }

  return (
    <div className={"absolute inset-0 z-50 flex bg-black"}>
      <button
        onClick={handleClose}
        className="absolute top-16 left-16 text-4xl hover:text-5xl"
      >
        X
      </button>
      <div className="flex flex-col ml-16 mt-48 text-3xl h-3/5 sm:mt-32 sm:text-xl sm:ml-4">
        <div className="flex items-baseline gap-6 sm:flex-col">
          <img
            src="./images/ClatotSignalis.svg"
            alt=""
            className="h-8 sm:h-6"
          />
          <h2 className="text-6xl sm:text-4xl">{focusedItem[0]}</h2>
        </div>
        <div className="my-8 mr-32 sm:mr-8">
          <p>{focusedItem[1]}</p>
          <p>{focusedItem[2]}</p>
        </div>
        <div className="leading-none">
          <p className="flex ">
            <span>{focusedItem[3]}</span>
          </p>
          <p className="flex">
            <span>{focusedItem[4]}</span>
          </p>
          <p className="flex">
            <span>{focusedItem[5]}</span>
          </p>
        </div>
        {focusedItem[6] && (
          <div className="mt-16 underline">
            <p onClick={handleClick}>{focusedItem[7]}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lightbox;
