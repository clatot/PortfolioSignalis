import { useState } from "react";

function Background() {
  const [height, setHeight] = useState(-320);

  return (
    <div className="relative w-screen h-screen overflow-hidden pointer-events-none">
      {/* Top Black Bar */}
      <div className="absolute top-0 left-0 w-full h-24 bg-black z-30 sm:"></div>

      {/* Bottom Black Bar */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-black z-30 sm:"></div>

      <div className="absolute inset-0 z-20 opacity-50">
        <img
          src="./images/FilterSignalis 1.svg"
          alt=""
          className="w-full h-max"
        />
      </div>

      <div className="absolute inset-0 z-10">
        <img
          src="./images/ElsterBackgroundZoom.svg"
          alt=""
          className={`w-full h-full object-cover scale-150 sm:scale-125 animate-moveMargin sm:animate-moveMarginResponsive`}
        />
      </div>
    </div>
  );
}

export default Background;
