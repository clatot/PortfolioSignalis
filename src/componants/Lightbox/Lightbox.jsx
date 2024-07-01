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

  return (
    <div className={"absolute inset-0 z-50 flex bg-black"}>
      <button
        onClick={handleClose}
        className="absolute top-16 left-16 text-4xl"
      >
        X
      </button>
      <div className="flex flex-col ml-16 mt-48 text-3xl h-3/5">
        <div>
          <img src="" alt="" />
          <h2 className="text-6xl">Title</h2>
        </div>
        <div className="my-8">
          <p>{focusedItem[0]}</p>
          <p>{focusedItem[1]}</p>
          <p>{focusedItem[2]}</p>
        </div>
        <div className="leading-none">
          <p className="flex ">
            <span className="w-48">Front-end</span>
            <span className="w-4">:</span>
            <span>{focusedItem[3]}</span>
          </p>
          <p className="flex">
            <span className="w-48">Style</span>
            <span className="w-4">:</span>
            <span>{focusedItem[4]}</span>
          </p>
          <p className="flex">
            <span className="w-48">Back-end</span>
            <span className="w-4">:</span>
            <span>{focusedItem[5]}</span>
          </p>
        </div>
        <div className="mt-16">
          <p>Voir le projet</p>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
