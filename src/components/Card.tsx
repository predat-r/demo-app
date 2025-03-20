import React from "react";
import Image from "next/image";

const Card = ({ src, color }: { src: string; color: String }) => {
  return (
    <div
      className={`w-2/3 sm:w-6/16  md::w-4/12 h-64 box-border rounded-4xl flex z-10 flex-col shrink-0 overflow-hidden justify-evenly items-center px-7 pt-2 pb-2 text-black shadow-lg  ${color}`}
    >
      <div className="flex flex-row h-1/3 w-full items-center justify-left gap-x-4">
        <div className="h-16 w-16 overflow-hidden rounded-full">
          <Image
            className="h-full w-full object-cover"
            src={src}
            width={100}
            height={100}
            alt="profile-picture"
          />
        </div>
        <div className="flex flex-col justify-evenly items-start">
          <h1 className="font-medium text-lg">Lorem Ipsum dolor</h1>
          <h2 className="italic font-light text-lg">Lorem Ipsum</h2>
        </div>
      </div>
      <p className="text-[14px] md:text-[18px] text-[#191A3C] ">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum
        dolores sunt, culpa delectus voluptatibus quas ea nulla neque atque
        architecto quia debitis commodi labore!""
      </p>
    </div>
  );
};

export default Card;
