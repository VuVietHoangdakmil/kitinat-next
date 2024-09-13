"use client";
import "./Header.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { path } from "@/path";
import { cn } from "@/helper/class.helper";
import { useResponsive } from "@/hook/useResponsive";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Drawer, Typography } from "antd";
import FloatingContactButtons from "@/components/FloatingContactButtons";

type typeList = {
  label: string;
  active: boolean;
  path: string;
};

const Header: React.FC = () => {
  const router = useRouter();
  const pathName = usePathname();
  const reponsive = useResponsive();
  const [open, setOpen] = useState(false);
  const list: typeList[] = [
    {
      label: "Trang chủ",
      active: pathName.startsWith(path.home),
      path: path.home,
    },
    {
      label: "Về chúng tôi",
      active: pathName.startsWith(path.about),
      path: path.about,
    },
    {
      label: "Sản phẩm",
      active: pathName.startsWith(path.product),
      path: path.product + "?page=1",
    },
    { label: "Cửa hàng", active: false, path: path.home },
    {
      label: "Tin tức & sự kiện",
      active: pathName.startsWith(path.eventPage),
      path: path.eventPage + "?page=1",
    },
  ];

  return (
    <header className={cn("header_container bg-[#233f28]")}>
      <div className="children_h1">
        <Link href={path.home}>
          <Image
            width={120}
            height={120}
            // height={"100px"}
            // style={{ borderRadius: "50%" }}
            src="/img/logo.png"
            alt="logo"
          />
        </Link>
        {reponsive?.isMobile ? (
          <>
            <button
              className="p-2 bg-[#c39568] rounded-md focus:outline-none"
              onClick={() => setOpen(true)}
            >
              <FaBars className="text-white text-xl" />
            </button>
            <Drawer open={open} onClose={() => setOpen(false)}>
              <div className="list_left">
                <ul className="nav-list">
                  {list.map((item, index) => {
                    return (
                      <li
                        className={cn(
                          `p-3 rounded-lg`,
                          item.active &&
                            "text-white bg-[#233f28] cursor-pointer"
                        )}
                        onClick={() => {
                          setOpen(false), router.push(item.path);
                        }}
                        key={index}
                      >
                        <Typography.Text
                          className={` cursor-default
                            ${item.active ?? "text-white"}`}
                          style={{
                            color: item.active ? "white" : "#233f28",
                          }}
                        >
                          {item.label}
                        </Typography.Text>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Drawer>
          </>
        ) : (
          <div className="list_left">
            <ul>
              {list.map((item, index) => {
                return (
                  <li
                    className={`${item.active ? "active" : ""}`}
                    onClick={() => {
                      router.push(item.path, { scroll: true });
                    }}
                    key={index}
                  >
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <FloatingContactButtons />
    </header>
  );
};
export default Header;
