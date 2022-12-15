import React from "react";
import logo from "../../assets/Studio.png";
import HomeGallery from "../../components/HomeGallery";

const photos = [
  { url: "/image1.jpg", title: "Lioness" },
  { url: "/image2.jpg", title: "Clown" },
  { url: "/image3.jpg", title: "Funky" },
  { url: "/image4.jpg", title: "ToothFace" },
  { url: "/image5.jpg", title: "Maskoff" },
  { url: "/image6.jpg", title: "HalfBird" },
];

const Home = () => {
  return (
    <div className="flex flex-col space-y-8 items-center flex-1">
      <div className="flex justify-center">
        <img className="w-72" alt="logo" src={logo} draggable={false} />
      </div>
      <div className={"h-[32rem] w-[17.5rem] m-[0_auto]"}>
        <HomeGallery slides={photos} />
      </div>
    </div>
  );
};

export default Home;
