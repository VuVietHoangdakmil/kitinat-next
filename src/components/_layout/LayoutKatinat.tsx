"use client";
import React, { useEffect } from "react";
import Header from "./_Header";
import Footer from "./_Footer/Footer";

type Props = { children: React.ReactNode };
const Layout: React.FC<Props> = ({ children }) => {
  // const { pathname, search } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname, search]);
  return (
    <div>
      <Header />
      <main style={{ width: "100%", overflow: "hidden", margin: "0 auto" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
