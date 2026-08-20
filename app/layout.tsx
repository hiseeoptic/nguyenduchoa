import type { Metadata } from "next";
import { Geist } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nguyễn Đức Hoa — Hệ sinh thái AI & Marketing số",
  description:
    "Bộ công cụ AI mạnh mẽ giúp bạn tạo nội dung, hình ảnh, video và quản lý kinh doanh online. Tham gia chương trình affiliate kiếm thụ động với hoa hồng 20%.",
  keywords: ["AI tools", "Marketing số", "VeoFlow", "ThansOhoc", "Affiliate", "nguyenduchoa", "kiếm tiền online"],
  openGraph: {
    title: "Nguyễn Đức Hoa — Hệ sinh thái AI & Marketing số",
    description: "Bộ công cụ AI giúp bạn tạo nội dung, hình ảnh, video và kinh doanh online hiệu quả",
    url: "https://aiglobal.vn",
    siteName: "aiglobal.vn",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
