import Image from "next/image";
import React from "react";

const ProductCard = ({ name, id, imgUrl, description }) => {
  return (
    <div className="  trans_black__bg p-2 rounded-md" key={id}>
      <div className=" ">
        <Image src={imgUrl} alt={name} className="w-full h-64 object-cover" />
      </div>
      <div className="text-lg font-bold uppercase">{name}</div>
      <div className="text-sm">{description}</div>
    </div>
  );
};

export default ProductCard;
