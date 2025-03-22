import { MotionValue, useTransform } from "framer-motion";

export const clientArray = [
  {
    src: "/pfp-1.jpg",
    color: "bg-[#EAEAF4]",
    deviation: "m-0",
  },
  {
    src: "/pfp-2.jpg",
    color: "bg-[#EAEAF429] bg-opacity-20",
    deviation: " sm:mr-70",
  },
  {
    src: "/pfp-3.jpg",
    color: " bg-[#EAEAF4]",
    deviation: "sm:ml-30",
  },
  {
    src: "/pfp-4.jpg",
    color: "bg-[#EAEAF4]",
    deviation: "sm:mr-70",
  },
  {
    src: "/pfp-2.jpg",
    color: "bg-[#EAEAF429] bg-opacity-20",
    deviation: "m-0",
  },
];

export const getEffectAmount = (
  scrollYProgress: MotionValue<number>,
  isMobile: boolean
) => {
  const mobileEffect = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -75, -125]
  );
  const effect1 = useTransform(scrollYProgress, [0, 0.5, 1], [0, -75, -125]);
  const effect2 = useTransform(scrollYProgress, [0, 0.5, 1], [0, -120, -240]);
  const effect3 = useTransform(scrollYProgress, [0, 0.5, 1], [0, -150, -300]);

  if (isMobile) {
    return mobileEffect;
  }

  const rand = Math.floor(Math.random() * 3) + 1;
  const effects = [effect1, effect2, effect3];
  return effects[rand - 1];
};
