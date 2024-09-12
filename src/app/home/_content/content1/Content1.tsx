import { EmblaOptionsType } from "embla-carousel";
import ExitAnimation from "@/components/_ExitAnimation";
import { silde } from "@/components/_ExitAnimation/ExitAnimation";

const OPTIONS: EmblaOptionsType = { loop: true };

const SLIDES: silde[] = [
  {
    properties: {
      src: "/img/home/content1/KAT_BANNER-WEB_CPPM.jpg",
    },
    type: "img",
  },
  {
    properties: {
      src: "/img/home/content1/KAT_BANNER-WEB_OBL.jpg",
    },
    type: "img",
  },
  {
    properties: {
      src: "/img/home/content1/KAT_NEWBRANDING_COVERFB_3-scaled.jpg",
    },
    type: "img",
  },
  {
    properties: {
      src: "/img/home/content1/WEB-BANNER (1).jpg",
    },
    type: "img",
  },
];
const Content1 = () => {
  return (
    <ExitAnimation
      startAnimation={true}
      slideSize="100%"
      slides={SLIDES}
      options={OPTIONS}
      positionAbsolute={true}
    />
  );
};
export default Content1;
