"use client";
import Card from "@/components/Card";
import { clientArray, getEffectAmount } from "@/lib";
import { motion, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const page = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen relative h-screen bg-white flex flex-col overflow-y-scroll"
    >
      <div className=" absolute z-10 top-1/6 w-full  flex flex-col justify-center items-center gap-y-5 h-[280vh] ">
        {clientArray.map((client, index) => {
          return (
            <motion.div
              className={`w-full flex justify-center ${client.deviation}`}
              key={index}
              style={{ y: getEffectAmount(scrollYProgress, isMobile, index) }}
            >
              <Card src={client.src} color={client.color}></Card>
            </motion.div>
          );
        })}
      </div>

      <div className="fixed pl-10 md:pl-24 top-80 z-0 w-full">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-medium  text-[#E0321F]">
          CLIENT SPEAK
        </h1>
      </div>
    </div>
  );
};

export default page;
