import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const LinkTree = () => {
  return (
    <div className="fixed flex top-4 left-4">
      <ul className="flex flex-col text-3xl space-y-4">
        <a href="https://www.instagram.com/chicagopaintandtwist/">
          <FontAwesomeIcon icon={brands("instagram")} color="#bc2a8d" />
        </a>
        <a href="https://www.tiktok.com/@chicagopaintandtwist">
          <FontAwesomeIcon icon={brands("tiktok")} />
        </a>
        <a href="https://www.facebook.com/ChicagoPaintandTwist">
          <FontAwesomeIcon icon={brands("facebook")} color="#3b5998" />
        </a>
      </ul>
    </div>
  );
};

export default LinkTree;
