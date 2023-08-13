"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../public/logo.jpg";
import Link from "next/link";
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";

const menu = [
  {
    id: 1,
    title: "home",
    url: "/",
  },
  {
    id: 2,
    title: "about us",
    url: "/about",
  },
  {
    id: 3,
    title: "products",
    url: "/products",
  },
  {
    id: 4,
    title: "blog",
    url: "/blog",
  },
  {
    id: 5,
    title: "contact us",
    url: "/contact",
  },
];

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className=" main__container ">
      <div className="flex items-center justify-between ">
        <div className=" flex items-center space-x-3 ">
          <Image priority src={Logo} alt="Logo" className="h-14 w-14" />
          <h1 className="font-extrabold text-2xl hidden sm:block ">Shineway</h1>
        </div>
        <div className=" items-center hidden lg:flex   font-bold space-x-4 capitalize ">
          {menu?.map((items) => (
            <div
              className="  focus:bg-red-600  hover:text-blue-800 last__child "
              key={items.id}
            >
              <Link href={items.url}>{items.title}</Link>
            </div>
          ))}
        </div>
        <div className="lg:hidden block content-center">
          {isToggled ? (
            <XMarkIcon
              className="w-10 rotate-90-ccw"
              onClick={() => setIsToggled(false)}
            />
          ) : (
            <Bars3BottomRightIcon
              className="w-10 "
              onClick={() => setIsToggled(true)}
            />
          )}
          {isToggled && (
            <div className=" absolute z-30 capitalize bg-blue-900 pr-10 pl-40 rounded-md scale-up-hor-center  py-6 text-end right-5">
              {menu?.map((item) => (
                <div
                  className="mb-6 w-full text-bold text-white last__child"
                  key={item.id}
                >
                  <Link href={item.url} onClick={() => setIsToggled(false)}>
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
