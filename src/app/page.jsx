"use client";
import React, { useEffect, useState } from "react";
import Nurse from "../../public/nurse.png";
import Business from "../../public/business1.png";

import Wave from "../../public/wave.svg";
import Image from "next/image";
import Link from "next/link";
import { productData } from "@/components/global/productData";
import ProductCard from "@/components/productCard/ProductCard";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import AboutCard from "@/components/aboutCard/AboutCard";

const page = () => {
  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    setFetchData(productData);
  }, []);
  return (
    <>
      <div className="main__container relative  primary-bg">
        <div className=" block lg:flex mx-auto lg:justify-center items-center ">
          <div className="flex-1 md:mr-10 items-center ">
            <div className="  uppercase font-black text-6xl leading-normal  text-blue-800 ">
              Health, wealth and business
            </div>
            <h1 className="mb-4  ">
              From the moment you step through our doors, you'll experience a
              new level of care that goes beyond the ordinary, where our
              dedicated team of medical experts becomes your lifelong health
              partner.
            </h1>

            <Link
              href="/about"
              className="bg-[#ff4500] py-2 px-3 font-bold text-white rounded-md"
            >
              Learn More
            </Link>
          </div>
          <div className="flex-1 flex items-center my-10  justify-center">
            <Image src={Nurse} alt="Nurse" className="  " />
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 mx-auto flex-1 ">
        <Image src={Wave} className="flex-1" alt="Wave" />
      </div> */}
      </div>
      <section className="bg-[#BBCDF2]">
        <div className="main__container">
          <div className="">
            <h1 className="font-extrabold py-6 text-4xl text-center">
              Our Latest Products
            </h1>
          </div>
          <div className=" pt-4 grid grid-cols-2 gap-4 sm:grid-cols-3  lg:grid-cols-4 ">
            {fetchData?.slice(0, 4).map((item) => (
              <div className=" cursor-pointer" key={item.id}>
                <ProductCard
                  name={item.name}
                  description={item.description}
                  imgUrl={item.imgUrl}
                />
              </div>
            ))}
          </div>
          <div className=" flex items-center justify-end space-x-3 pt-4 text-blue-700">
            <Link href="/products">See More </Link>
            <ArrowRightIcon className="w-7" />
          </div>
        </div>
      </section>

      <section className="bg-[#BBCDF2]">
        <div className="main__container">
          <div className="">
            <h1 className="font-extrabold py-6 text-4xl text-center">
              Top Selling
            </h1>
          </div>
          <div className=" pt-4 grid grid-cols-2 gap-4 sm:grid-cols-3  lg:grid-cols-4 ">
            {fetchData?.slice(0, 4).map((item) => (
              <div className=" cursor-pointer" key={item.id}>
                <ProductCard
                  name={item.name}
                  description={item.description}
                  imgUrl={item.imgUrl}
                />
              </div>
            ))}
          </div>
          <div className=" flex items-center justify-end space-x-3 pt-4 text-blue-700">
            <Link href="/products">See More </Link>
            <ArrowRightIcon className="w-7" />
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="main__container">
          <div className="">
            <h1 className="font-extrabold py-6 text-4xl text-center">
              Our Services
            </h1>
          </div>
          <div className="">
            <div className="">
              <h1 className="text-center text-4xl font-bold py-10">
                We Provide <span className="text-[#b8e900]">100%</span> Profit
                Through Our Buy One Get One
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              <AboutCard
                imgUrl={Business}
                title="Boost Your Teamwork"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam asperiores sapiente harum similique suscipit "
              />
              <AboutCard
                imgUrl={Business}
                title="Buy One Get One"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nulla!"
              />
              <AboutCard
                imgUrl={Business}
                title="Reach a Deal"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nulla!"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" main__container">
          <div className=" block md:flex items-center gap-4">
            <div className="flex-1 relative ">
              <div className="w-1 bg-[#b8e900] h-full absolute top-0 left-0"></div>
              <p className="pl-6 text-xl font-bold ">
                What makes Us Different From Other MLM Companies
              </p>
            </div>
            <div className="flex-1 justify-end trans_black__bg p-4 rounded-md mt-7 md:mt-0">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                tempore molestias commodi nam quidem earum?
              </p>
            </div>
          </div>
          <div className=""></div>
        </div>
      </section>
    </>
  );
};

export default page;
