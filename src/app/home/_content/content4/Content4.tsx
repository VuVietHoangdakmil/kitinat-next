"use client";
import { useTransition, useSpringRef, animated } from "@react-spring/web";
import { useEffect } from "react";

import useInViewCustom from "../../../../hook/useInviewCustom";
import { Row, Col, Button } from "antd";
import ExitAnimation from "@/components/_ExitAnimation";
import { EmblaOptionsType } from "embla-carousel";
import { silde } from "@/components/_ExitAnimation/ExitAnimation";
const listTrantions = [
  { from: { transform: "translate3d(0,-100%,0)" }, type: "text" },
  { from: { transform: "translate3d(0,200%,0)" }, type: "button" },
];

const ContentLeft = () => {
  const transRef = useSpringRef();

  const transitions = useTransition(listTrantions, {
    ref: transRef,
    keys: null,
    from: (props: any) => ({ opacity: 0, transform: props.from.transform }),
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    config: { duration: 600 },
  });
  useEffect(() => {
    transRef.start();
  }, []);
  return transitions((style, item) => {
    return (
      <animated.div style={style}>
        {item.type === "text" && (
          <div style={{ color: " var(--primary-color)" }}>
            <h1>Cửa hàng</h1>

            <h3>
              Hành trình luôn bắt đầu từ việc chọn lựa nguyên liệu kỹ càng từ
              các vùng đất trù phú, cho đến việc bảo quản, pha chế từ bàn tay
              nghệ nhân. Qua những nỗ lực không ngừng, KATINAT luôn hướng đến...
            </h3>
          </div>
        )}
        {item.type === "button" && (
          <Button style={{ width: "165px", height: "40px", marginTop: "50px" }}>
            Xem thêm
          </Button>
        )}
      </animated.div>
    );
  });
};
const OPTIONS: EmblaOptionsType = { loop: true };

const SLIDES: silde[] = [
  {
    properties: {
      src: "/img/home/content4/content4a.jpg",
    },
    type: "img",
  },
  {
    properties: {
      src: "/img/home/content4/content4b.jpeg",
    },
    type: "img",
  },
  {
    properties: {
      src: "/img/home/content4/content4c.jpg",
    },
    type: "img",
  },
  {
    properties: {
      src: "/img/home/content4/content4d.jpg",
    },
    type: "img",
  },
];
const ContentRight = () => {
  const transRef = useSpringRef();
  const transitions = useTransition(null, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(-30%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },

    config: { duration: 600 },
  });
  useEffect(() => {
    transRef.start();
  }, []);
  return transitions((style) => (
    <animated.div style={style}>
      {" "}
      <ExitAnimation
        slideSize="100%"
        hiddenArrow={true}
        slides={SLIDES}
        options={OPTIONS}
        positionAbsolute={true}
      />
    </animated.div>
  ));
};
const Content4: React.FC = () => {
  const { ref, inView } = useInViewCustom();
  return (
    <Row ref={ref} gutter={20} style={{ width: "90%", margin: "0 auto" }}>
      {inView && (
        <>
          <Col span={12}>
            <ContentRight />
          </Col>
          <Col span={12}>
            <ContentLeft />
          </Col>
        </>
      )}
    </Row>
  );
};
export default Content4;
