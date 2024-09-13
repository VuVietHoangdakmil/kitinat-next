"use client";
import { Flex, List, Pagination, Row, Typography } from "antd";
import { useCallback, useMemo } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { animated, useTransition } from "@react-spring/web";

import { SLIDES } from "@/app/home/_content/content5/Content5";
import { path } from "@/path";

const totalPage = SLIDES.length;
const pageSize = 8;

const Product = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageCurrent = Number(searchParams.get("page"));

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const data = useMemo(() => {
    const endPage = pageCurrent * pageSize;
    const startPage = endPage - pageSize;
    return SLIDES.slice(startPage, endPage);
  }, [pageCurrent]);
  const transitions = useTransition(null, {
    keys: pageCurrent,
    from: { transform: `translate3d(${data.length > 0 ? "-20%" : "0"},0%,0)` },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    config: { duration: 500 },
  });

  return (
    <div
      style={{
        width: "var(--with-main)",
        margin: "20px auto",

        color: "var(--text-black-color)",
      }}
      className="px-4"
    >
      <h1 style={{ fontSize: "25px" }}>Sản phẩm</h1>
      <hr />

      {transitions((style) => (
        <animated.div style={style}>
          <Row
            style={{ zIndex: 1, justifyContent: "center", marginTop: "20px" }}
          >
            <List
              className="custom-list"
              dataSource={data}
              grid={{
                gutter: [20, 20],
                xs: 1,
                sm: 2,
                md: 2,
                lg: 3,
                xl: 3,
                xxl: 3,
              }}
              renderItem={(item, index) => {
                const { content, src } = item.properties;
                return (
                  <List.Item className="w-full max-w-[38rem] ">
                    <Flex
                      key={index}
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push(path.product + "/" + index)}
                      className="h-full overflow-hidden  w-full"
                      vertical
                      gap={4}
                    >
                      <Image
                        width={2000}
                        height={100}
                        style={{ borderRadius: "5px" }}
                        alt=""
                        loading="lazy"
                        src={src ?? ""}
                        className="w-full rounded-2xl h-[30rem] object-center"
                      />
                      <Typography.Text style={{ fontWeight: "bold" }}>
                        {content?.content2}
                      </Typography.Text>
                      <Typography.Text style={{ color: "#999999" }}>
                        {content?.content3?.replace("By ECoffeeLink", "ON: ")}
                      </Typography.Text>
                      <Typography.Text>{content?.content4}</Typography.Text>
                    </Flex>
                  </List.Item>
                );
              }}
            />
          </Row>
        </animated.div>
      ))}

      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginRight: "10px" }}>
          Trang
          <span
            style={{
              color: "var(--primary-color)",
              fontWeight: "bold",
              margin: "0 5px",
            }}
          >
            {pageCurrent}
          </span>
          Trên
          <span
            style={{
              color: "var(--primary-color)",
              fontWeight: "bold",
              margin: "0 5px",
            }}
          >
            {Math.ceil(totalPage / pageSize)}
          </span>
        </p>
        <Pagination
          current={pageCurrent}
          onChange={(page) => {
            router.push(
              path.product + "?" + createQueryString("page", page + "")
            );
          }}
          showSizeChanger={false}
          responsive={true}
          total={totalPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};
export default Product;
