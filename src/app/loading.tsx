import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const LoadingBasic = () => {
  return (
    <div style={{ height: "80vh", textAlign: "center" }}>
      <Spin
        style={{ marginTop: "40vh" }}
        indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />}
      />
    </div>
  );
};
export default LoadingBasic;
