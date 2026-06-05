import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopFilter from "./ShopFilter";
import { products, productCategories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop — Công cụ AI & Khóa học | nguyenduchoa.com",
  description:
    "Khám phá bộ công cụ AI và khóa học marketing số từ nguyenduchoa.com. Subscription từ $9/tháng. Dùng thử miễn phí 15 ngày.",
};

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="py-16 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
                🛒 Shop
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Công cụ AI &{" "}
                <span className="gradient-text">Khóa học</span>
              </h1>
              <p className="text-white/50 text-lg">
                Bộ công cụ AI và khóa học thực chiến giúp bạn kinh doanh online hiệu quả hơn.
                Dùng thử 15 ngày miễn phí, hoàn tiền nếu không hài lòng.
              </p>
            </div>
          </div>
        </section>

        {/* Products with filter */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ShopFilter products={products} categories={productCategories} />
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "🔒", title: "Thanh toán bảo mật", desc: "SSL 256-bit encryption" },
                { icon: "↩️", title: "Hoàn tiền 15 ngày", desc: "Không câu hỏi, không rắc rối" },
                { icon: "⚡", title: "Truy cập ngay lập tức", desc: "Sau khi thanh toán thành công" },
                { icon: "🎧", title: "Hỗ trợ 24/7", desc: "Zalo, Telegram, Email" },
              ].map((badge) => (
                <div key={badge.title} className="text-center">
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <div className="text-white font-semibold text-sm">{badge.title}</div>
                  <div className="text-white/40 text-xs mt-1">{badge.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
