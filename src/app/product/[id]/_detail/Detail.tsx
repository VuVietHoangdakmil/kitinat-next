"use client";
import { animated, useTransition } from "@react-spring/web";

const DetailProduct: React.FC<{ id: string }> = ({ id }) => {
  const transitions = useTransition(null, {
    keys: null,
    from: { opacity: 0, transform: "translate3d(0,-100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(0,100%,0)" },
    config: { duration: 500 },
  });
  return (
    <div>
      <header
        style={{
          backgroundColor: "var(--primary-color)",
          fontSize: "20px",
          fontWeight: "bold",
          height: "100px",
          lineHeight: "100px",
          textAlign: "center",
          zIndex: 2,
          position: "relative",
        }}
      >
        {id}
      </header>
      <div style={{ width: "var(--with-main)", margin: "0 auto", zIndex: 1 }}>
        {transitions((style) => (
          <animated.div style={style}>
            <main style={{ width: "90%", margin: "0 auto" }}>{id}</main>
          </animated.div>
        ))}
        <footer
          style={{
            width: "90%",
            margin: "40px auto",
            borderTop: "1px black solid",
            borderBottom: "1px black solid",
          }}
        >
          <div style={{ padding: "10px 0" }}></div>
        </footer>
      </div>
    </div>
  );
};
export default DetailProduct;
