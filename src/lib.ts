import { MotionValue, useTransform } from "framer-motion";

export const clientArray = [
  {
    src: "/pfp-1.jpg",
    color: "bg-[#EAEAF4]",
    deviation: "m-0 z-22",
  },
  {
    src: "/pfp-2.jpg",
    color: "bg-[#EAEAF429] bg-opacity-20",
    deviation: " sm:mr-70",
  },
  {
    src: "/pfp-3.jpg",
    color: " bg-[#EAEAF4]",
    deviation: "sm:ml-30 sm:mt-54",
  },
  {
    src: "/pfp-4.jpg",
    color: "bg-[#EAEAF4]",
    deviation: "sm:mr-70",
  },
  {
    src: "/pfp-2.jpg",
    color: "bg-[#EAEAF429] bg-opacity-20",
    deviation: "sm:mr-32 mt-10",
  },
];

const SCROLL_KEYFRAMES = [0, 0.33, 0.66, 1];
const CARD_EFFECTS = [
  [0, -90, -140, -175],
  [0, -200, -300, -400],
  [0, -300, -450, -550],
  [0, -400, -550, -700],
  [0, -400, -500, -600],
];

const MOBILE_EFFECT_VALUES = [0, -75, -125];
const MOBILE_KEYFRAMES = [0, 0.5, 1];

export const getEffectAmount = (
  scrollYProgress: MotionValue<number>,
  isMobile: boolean,
  index: number
) => {
  const mobileEffect = useTransform(
    scrollYProgress,
    MOBILE_KEYFRAMES,
    MOBILE_EFFECT_VALUES
  );

  const cardEffects = CARD_EFFECTS.map((values) =>
    useTransform(scrollYProgress, SCROLL_KEYFRAMES, values)
  );

  return isMobile ? mobileEffect : cardEffects[index];
};
