"use client";
import { useTransition, animated } from "@react-spring/web";
import { Button, Col, Row } from "antd";
import { useResponsive } from "@/hook/useResponsive";
import Image from "next/image";
import { cn } from "@/helper/class.helper";
type PropsContent = {
  content1: string;
  content2: string;
  content3: { title: string; value: string };
  content4: { title: string; value: string };
  img: string;
  wrapCol?: boolean;
};

const CustomContent: React.FC<PropsContent> = ({
  content1,
  content2,
  content3,
  content4,
  img,
  wrapCol,
}) => {
  const reponsive = useResponsive();
  return (
    <Row
      className={cn({ "mt-20": true })}
      gutter={[20, 20]}
      style={{ flexDirection: wrapCol ? "row-reverse" : undefined }}
    >
      <Col span={reponsive?.isMobile ? 24 : 12}>
        <h1
          className={cn({ "text-center": reponsive?.isMobile })}
          style={{ color: "var(--primary-color)" }}
        >
          {content1}
        </h1>
        <h3 style={{ color: "#114358" }}>{content2}</h3>
        <ul style={{ margin: "0", padding: "0 0 0 15px", listStyle: "unset" }}>
          <li style={{ color: "#114358" }}>
            <span
              style={{
                color: "var(--primary-color)",

                fontWeight: "bold",
              }}
            >
              {content3.title}
            </span>{" "}
            {content3.value}
          </li>
          <li style={{ color: "#114358" }}>
            <span style={{ color: "var(--primary-color)", fontWeight: "bold" }}>
              {content4.title}
            </span>
            {content4.value}
          </li>
        </ul>
        <Button style={{ marginTop: "50px", width: "100px" }}>Menu</Button>
      </Col>
      <Col span={reponsive?.isMobile ? 24 : 12}>
        <Image
          width={2000}
          height={100}
          style={{ borderRadius: "50px", height: "400px" }}
          src={img}
          alt=""
        />
      </Col>
    </Row>
  );
};
const Menu = () => {
  const transitions = useTransition(null, {
    keys: null,
    from: { opacity: 0, transform: "translate3d(0,-100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    //leave: { opacity: 0, transform: "translate3d(0,100%,0)" },
    config: { duration: 500 },
  });
  const reponsive = useResponsive();

  return (
    <div style={{ marginTop: "50px" }}>
      {transitions((style) => (
        <animated.div style={style}>
          {" "}
          <Image
            src="/img/view/view2.jpg"
            className="img-zoom-animation"
            width={2000}
            height={100}
            style={{
              height: `${reponsive?.isMobile ? "400px" : "600px"}`,
              width: "95%",
              padding: "0",
              margin: "0 auto",
              borderRadius: "10px",
              display: "block",
            }}
            alt=""
          />
          <div
            style={{
              textAlign: "center",
              width: "var(--with-main)",
              margin: "0 auto",
            }}
          >
            <h1 style={{ color: "var(--primary-color)", textAlign: "center" }}>
              Hành trình chinh phục phong vị mới
            </h1>
            <div style={{ width: "80%", margin: "50px auto" }}>
              <Row>
                <Col span={8}>
                  <h1 style={{ color: "var(--primary-color)" }}>8</h1>
                  <h2 style={{ color: "#114358" }}>Năm trên một hành trình</h2>
                </Col>
                <Col span={8}>
                  {" "}
                  <h1 style={{ color: "var(--primary-color)" }}>10</h1>
                  <h2 style={{ color: "#114358" }}>Tỉnh thành</h2>
                </Col>
                <Col span={8}>
                  <h1 style={{ color: "var(--primary-color)" }}>70+</h1>
                  <h2 style={{ color: "#114358" }}>Trên toàn quốc gia</h2>
                </Col>
              </Row>
              <h3 style={{ color: "var(--primary-color)" }}>
                Từ niềm đam mê khám phá hương vị ở những vùng đất mới, những
                nghệ nhân ECoffeeLink không ngừng theo đuổi sứ mệnh mang đến
                phong vị mới cho khách hàng. Sự kết hợp của nguồn nguyên liệu
                tinh hoa dưới bàn tay của nghệ nhân ECoffeeLink sẽ mang đến cho
                khách hàng những trải nghiệm cảm nhận hương vị tinh tế và khó
                quên.{" "}
              </h3>
            </div>
          </div>
        </animated.div>
      ))}

      <div style={{ width: "var(--with-main)", margin: "0px auto" }}>
        <div style={{ margin: "50px auto" }}>
          <CustomContent
            content1="Cà Phê"
            content2="  Dưới bàn tay của nghệ nhân tại ECoffeeLink, từng cốc cà phê trở thành
            một cuộc phiêu lưu hương vị đầy mới lạ."
            content3={{
              title: "CÀ PHÊ ESPRESSO",
              value:
                " – Bộ sưu tập Cà Phê Phin với công thức độc quyền ECoffeeLink, làm bật nên vị đậm đặc trưng của Robusta Buôn Mê Thuột, tạo nên hương vị sáng tạo khó phai.",
            }}
            content4={{
              title: "CÀ PHÊ ESPRESSO",
              value:
                " – Bộ sưu tập Cà Phê Phin với công thức độc quyền ECoffeeLink, làm bật nên vị đậm đặc trưng của Robusta Buôn Mê Thuột, tạo nên hương vị sáng tạo khó phai.",
            }}
            img="/img/view/view8.jpg"
          />
          <CustomContent
            wrapCol={true}
            content1="Cà Phê"
            content2="  Dưới bàn tay của nghệ nhân tại ECoffeeLink, từng cốc cà phê trở thành
            một cuộc phiêu lưu hương vị đầy mới lạ."
            content3={{
              title: "CÀ PHÊ ESPRESSO",
              value:
                " – Bộ sưu tập Cà Phê Phin với công thức độc quyền ECoffeeLink, làm bật nên vị đậm đặc trưng của Robusta Buôn Mê Thuột, tạo nên hương vị sáng tạo khó phai.",
            }}
            content4={{
              title: "CÀ PHÊ ESPRESSO",
              value:
                " – Bộ sưu tập Cà Phê Phin với công thức độc quyền ECoffeeLink, làm bật nên vị đậm đặc trưng của Robusta Buôn Mê Thuột, tạo nên hương vị sáng tạo khó phai.",
            }}
            img="/img/view/view7.jpg"
          />
        </div>
        <div style={{ textAlign: "center", margin: "0 auto" }}>
          <h5 style={{ color: "#114358" }}>
            Từng búp trà, từng hạt cà phê là nguồn cảm hứng bất tận cho những
            công thức đột phá, những sản phẩm tâm huyết giúp ECoffeeLink chinh
            phục vị giác của khách hàng. ECoffeeLink tự hào mang đến những sản
            phẩm với hương vị đặc sắc, và bạn chính là một phần đặc biệt của…
          </h5>
          <h2
            style={{
              color: "var(--primary-color)",
            }}
          >
            ...HÀNH TRÌNH CHINH PHỤC PHONG VỊ MỚI!
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Menu;
