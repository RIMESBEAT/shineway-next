import Image from "next/image";
import React from "react";

const AboutCard = ({ title, imgUrl, description }) => {
  return (
    <div className=" trans__bg rounded-md p-4">
      <div className="">
        <h2 className="text-[#b8e900] font-bold text-lg">{title}</h2>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
      <hr className=" border-gray-400 my-3 " />
      <div className="h-24 object-cover">
        <Image src={imgUrl} alt={title} className="h-full grayscale w-full rounded-md" />
      </div>
    </div>
  );
};

export default AboutCard;
