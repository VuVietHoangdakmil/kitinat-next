import type { Metadata } from "next";
import localFont from "next/font/local";
import Layout from "@/components/_layout/LayoutKatinat";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import { ConfigProvider } from "antd";
// Import CSS của Ant Design ở đây
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-CoffeeLink",
  description: "E-CoffeeLink",
  icons: {
    icon: "/img/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#bf9369",
              },
            }}
          >
            <Layout> {children} </Layout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
