import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const LinkTree = () => {
  return (
    <div className="fixed flex flex-col top-[40%] left-4">
      <ul className="flex flex-col text-4xl space-y-10">
        <a
          className="transition hover:scale-125 hover:rotate-[360deg] duration-[250ms]"
          href="https://www.instagram.com/chicagopaintandtwist/"
        >
          <FontAwesomeIcon icon={brands("instagram")} color="#bc2a8d" />
        </a>
        <a
          className="transition hover:scale-125 hover:rotate-[360deg] duration-[250ms]"
          href="https://www.tiktok.com/@chicagopaintandtwist"
        >
          <FontAwesomeIcon icon={brands("tiktok")} />
        </a>
        <a
          className="transition hover:scale-125 hover:rotate-[360deg] duration-[250ms]"
          href="https://www.facebook.com/ChicagoPaintandTwist"
        >
          <FontAwesomeIcon icon={brands("facebook")} color="#3b5998" />
        </a>
      </ul>
    </div>
  );
};

export default LinkTree;
