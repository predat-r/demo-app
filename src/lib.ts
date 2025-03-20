import { MotionValue, useTransform } from "framer-motion";

export const clientArray = [
  {
    src: "/pfp-1.jpg",
    color: "bg-gray-100",
    deviation: "m-0",
  },
  {
    src: "/pfp-2.jpg",
    color: "bg-[#EAEAF4]",
    deviation: "mr-24 sm:mr-70",
  },
  {
    src: "/pfp-3.jpg",
    color: "bg-gray-100",
    deviation: "ml-10 sm:ml-30",
  },
  {
    src: "/pfp-4.jpg",
    color: "bg-[#EAEAF4]",
    deviation: "mr-24 sm:mr-70",
  },
  {
    src: "/pfp-2.jpg",
    color: "bg-gray-100",
    deviation: "m-0",
  },
];

export const getEffectAmount = (scrollYProgress: MotionValue<number>) => {
  const rand = Math.floor(Math.random() * 3) + 1;

  const effects = [
    useTransform(scrollYProgress, [0, 0.5, 1], [0, -75, -125]),
    useTransform(scrollYProgress, [0, 0.5, 1], [0, -120, -240]),
    useTransform(scrollYProgress, [0, 0.5, 1], [0, -150, -300]),
  ];

  return effects[rand - 1];
};
