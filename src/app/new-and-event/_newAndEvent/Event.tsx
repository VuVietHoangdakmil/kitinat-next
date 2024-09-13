"use client";
import { useCallback, useMemo } from "react";
import { Col, Pagination, Row } from "antd";
import Image from "next/image";
import { animated, useTransition } from "@react-spring/web";
import { useSearchParams, useRouter } from "next/navigation";
import { SLIDES } from "@/app/home/_content/content5/Content5";
import { useResponsive } from "@/hook/useResponsive";
import { path } from "@/path";
const totalPage = SLIDES.length;
const pageSize = 6;
const listTrantions = [
  { from: { transform: "translate3d(-100%,0,0)" }, type: "left" },
  { from: { transform: "translate3d(0,200%,0)" }, type: "right" },
];
const EventPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageCurrent = Number(searchParams.get("page"));

  const transitions = useTransition(listTrantions, {
    keys: pageCurrent,
    from: (props: any) => ({ opacity: 0, transform: props.from.transform }),
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    config: { duration: 600 },
  });

  const data = useMemo(() => {
    const endPage = pageCurrent * pageSize;
    const startPage = endPage - pageSize;
    return SLIDES.slice(startPage, endPage);
  }, [pageCurrent]);
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const reponsive = useResponsive();

  return (
    <div
      style={{
        width: "var(--with-main)",
        margin: "20px auto",
        color: "var(--text-black-color)",
      }}
    >
      <Row gutter={[20, 10]}>
        {transitions((style, item) => (
          <>
            {item.type === "left" ? (
              <Col span={reponsive?.isMobile ? 24 : 18}>
                <animated.div style={style}>
                  <h1 style={{ fontSize: "25px", paddingLeft: "5px" }}>
                    Tin tức và sự kiện
                  </h1>
                  <hr />

                  <Row style={{ margin: "20px" }} gutter={[20, 20]}>
                    {data.map(({ properties }, index) => {
                      const { content, src, link } = properties;
                      return (
                        <Col
                          span={24}
                          md={8}
                          key={index}
                          style={{ cursor: "pointer" }}
                          onClick={() => router.push(link + "")}
                        >
                          <Image
                            style={{
                              borderRadius: "5px",
                              height: `${
                                reponsive?.isMobile ? "300px" : "400px"
                              }`,
                            }}
                            alt=""
                            loading="lazy"
                            src={src ?? ""}
                            width={2000}
                            height={100}
                          />
                          <p style={{ fontWeight: "bold" }}>
                            {content?.content2}
                          </p>
                          <p style={{ color: "#999999" }}>
                            {content?.content3?.replace(
                              "By ECoffeeLink",
                              "ON: "
                            )}
                          </p>
                          <p>{content?.content4}</p>
                        </Col>
                      );
                    })}
                  </Row>
                </animated.div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: "10px", paddingLeft: "5px" }}>
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
                        path.eventPage +
                          "?" +
                          createQueryString("page", page + "")
                      );
                    }}
                    showSizeChanger={false}
                    responsive={true}
                    total={totalPage}
                    pageSize={pageSize}
                  />
                </div>
              </Col>
            ) : (
              <Col span={reponsive?.isMobile ? 24 : 6}>
                <animated.div style={style}>
                  <h1 style={{ fontSize: "25px", paddingLeft: "12px" }}>
                    Bài viết mới
                  </h1>

                  <ul
                    style={{
                      paddingLeft: "16px",
                    }}
                  >
                    {SLIDES.map((item, index) => (
                      <li key={index}>
                        <span style={{ color: "var(--primary-color)" }}>
                          {item.properties.content?.content2}
                        </span>
                        <p>
                          {item.properties.content?.content3?.replace(
                            "By ECoffeeLink",
                            ""
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </animated.div>
              </Col>
            )}
          </>
        ))}
      </Row>
    </div>
  );
};
export default EventPage;
