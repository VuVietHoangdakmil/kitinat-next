import "./index.css";
import { Row, Col } from "antd";
import Image from "next/image";
import { useResponsive } from "@/hook/useResponsive";
const Footer = () => {
  const reponsive = useResponsive();
  return (
    <footer className="footer-main text-xl ">
      <Row
        gutter={[25, 20]}
        style={{
          width: "var(--with-main)",
          margin: "0 auto",
          paddingTop: "50px",
        }}
      >
        <Col span={reponsive?.isMobile ? 24 : 12}>
          <div style={{ textAlign: "center" }}>
            <Image
              width={180}
              height={100}
              src="/img/logo.png"
              loading="lazy"
              alt=""
            />
          </div>
          <h2>VỀ CHÚNG TÔI</h2>
          <h3>
            KATINAT – HÀNH TRÌNH CHINH PHỤC PHONG VỊ MỚI KATINAT không ngừng
            theo đuổi sứ mệnh mang phong vị mới từ những vùng đất trứ danh tại
            Việt Nam và trên thế giới đến khách hàng.
          </h3>
        </Col>
        <Col span={reponsive?.isMobile ? 24 : 12}>
          <h2>LIÊN HỆ</h2>
          <h3 className="">
            Email: cs@katinat.vn Representative Store : 91 Đồng Khởi, Bến Nghé,
            Quận 1, Thành Phố Hồ Chí Minh Working Office: 96-98-100 Trần Nguyên
            Đán, Phường 3, Quận Bình Thạnh, Thành Phố Hồ Chí Minh Customer
            Service: (028) 7300 1009
          </h3>
          <h2>HỖ TRỢ VÀ CHÍNH SÁCH</h2>
          <ul style={{ margin: "0", padding: "0" }}>
            <div style={{ display: "divst-item" }}>
              <h3>- Quy chế hoạt động và Chính sách bảo mật.</h3>
            </div>
            <div>
              <h3>- Chính sách vận chuyển.</h3>
            </div>
            <div>
              <h3>- Chính sách thanh toán.</h3>
            </div>
          </ul>
        </Col>
      </Row>
      <div
        style={{
          borderTop: "1px white solid",
          textAlign: "center",
          marginTop: "20px",
          lineHeight: "60px",
          height: "60px",
        }}
      ></div>
    </footer>
  );
};
export default Footer;
