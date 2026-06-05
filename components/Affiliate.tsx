const benefits = [
  {
    icon: "💰",
    title: "Hoa hồng 20% mỗi tháng",
    description: "Nhận 20% hoa hồng từ mỗi member bạn giới thiệu, tháng nào cũng có.",
  },
  {
    icon: "🔗",
    title: "Link riêng của bạn",
    description: "Mỗi affiliate có link và mã giới thiệu độc quyền, dễ chia sẻ mọi nơi.",
  },
  {
    icon: "📊",
    title: "Theo dõi real-time",
    description: "Dashboard chi tiết: số click, conversion, doanh thu từng ngày.",
  },
  {
    icon: "⚡",
    title: "Thanh toán nhanh",
    description: "Nhận tiền qua USDT (TRC-20), Stripe, hoặc chuyển khoản ngân hàng.",
  },
  {
    icon: "🌏",
    title: "Không giới hạn",
    description: "Không giới hạn số người bạn giới thiệu. Càng nhiều người dùng = càng nhiều thu nhập.",
  },
  {
    icon: "🤝",
    title: "Hỗ trợ marketing",
    description: "Nhận đầy đủ tài liệu, banner, email template để giúp bạn bán hàng hiệu quả.",
  },
];

export default function Affiliate() {
  return (
    <section id="affiliate" className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #ec4899, #7c3aed)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 mb-6">
            <span className="text-pink-400 text-sm font-medium">Chương trình Affiliate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Kiếm thu nhập thụ động
            <br />
            <span className="gradient-text">không giới hạn</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Chia sẻ hệ sinh thái AI của chúng tôi và nhận hoa hồng 20% mỗi tháng.
            Hoàn toàn tự động, không cần bán hàng trực tiếp.
          </p>
        </div>

        {/* Main content: Calculator + Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Calculator */}
          <div className="gradient-border rounded-3xl p-8" style={{ background: "var(--card-bg)" }}>
            <h3 className="text-2xl font-bold text-white mb-6">
              Tính thu nhập affiliate 💸
            </h3>

            <div className="space-y-6">
              {[
                { label: "10 người dùng", monthly: "$9/tháng", yearly: "$108/năm" },
                { label: "50 người dùng", monthly: "$45/tháng", yearly: "$540/năm" },
                { label: "100 người dùng", monthly: "$90/tháng", yearly: "$1,080/năm" },
                { label: "500 người dùng", monthly: "$450/tháng", yearly: "$5,400/năm" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/3 border border-white/5"
                >
                  <div>
                    <div className="text-white font-medium">{row.label}</div>
                    <div className="text-white/40 text-xs mt-0.5">Subscription $9/tháng × 20% hoa hồng</div>
                  </div>
                  <div className="text-right">
                    <div className="gradient-text font-bold text-lg">{row.monthly}</div>
                    <div className="text-white/40 text-xs">{row.yearly}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <p className="text-purple-300 text-sm text-center">
                💡 Chỉ cần 100 người dùng, bạn đã có thu nhập thụ động{" "}
                <strong>$1,080/năm</strong> hoàn toàn tự động
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-5 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all card-hover"
                style={{ background: "var(--card-bg)" }}
              >
                <div className="text-2xl mb-3">{b.icon}</div>
                <h4 className="text-white font-semibold text-sm mb-2">{b.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://member.nguyenduchoa.com/register"
            className="gradient-btn text-white font-semibold px-10 py-4 rounded-xl text-base inline-block"
          >
            Tham gia Affiliate ngay — Miễn phí
          </a>
          <p className="text-white/40 text-sm mt-4">
            Không cần phí gia nhập · Nhận link affiliate ngay sau đăng ký
          </p>
        </div>
      </div>
    </section>
  );
}
