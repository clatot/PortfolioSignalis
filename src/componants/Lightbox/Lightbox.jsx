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
    <div
      className={
        "absolute inset-0 z-50 flex items-center justify-center bg-black"
      }
    >
      <div className="flex">
        <p>{focusedItem}</p>
        <button onClick={handleClose}>X</button>
      </div>
    </div>
  );
}

export default Lightbox;
