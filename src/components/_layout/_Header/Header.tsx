import "./Header.css";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { path } from "@/path";

type typeList = {
  label: string;
  active: boolean;
  path: string;
};

const Header: React.FC = () => {
  const router = useRouter();
  const pathName = usePathname();

  const list: typeList[] = [
    {
      label: "Trang chủ",
      active: path.home === pathName,
      path: path.home,
    },
    {
      label: "Về chúng tôi",
      active: path.about === pathName,
      path: path.about,
    },
    { label: "Cửa hàng", active: false, path: path.home },
    {
      label: "Tin tức & sự kiện",
      active: path.eventPage === pathName,
      path: path.eventPage + "?page=1",
    },
  ];

  return (
    <header className="header_container">
      <div className="children_h1">
        <Image
          width={120}
          height={120}
          // height={"100px"}
          // style={{ borderRadius: "50%" }}
          src="/img/logo.png"
          alt="logo"
        />
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
      </div>
    </header>
  );
};
export default Header;
