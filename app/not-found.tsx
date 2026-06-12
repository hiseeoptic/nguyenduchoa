import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 40%, #7c3aed, transparent)" }}
      />

      <div className="relative z-10">
        <div className="text-8xl font-black gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-3">Trang không tìm thấy</h1>
        <p className="text-white/50 mb-10 max-w-sm">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="gradient-btn text-white font-semibold px-8 py-3 rounded-xl">
            Về trang chủ
          </Link>
          <Link
            href="/shop"
            className="border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium px-8 py-3 rounded-xl transition-all"
          >
            Xem sản phẩm
          </Link>
        </div>
      </div>
    </div>
  );
}
