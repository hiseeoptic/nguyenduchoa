import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AffiliateCalculator from "./AffiliateCalculator";

export const metadata: Metadata = {
  title: "Chương trình Affiliate — Kiếm thu nhập thụ động 20% hoa hồng | nguyenduchoa.com",
  description:
    "Tham gia chương trình affiliate của nguyenduchoa.com. Nhận hoa hồng 20% cho mỗi người bạn giới thiệu. Cookie 90 ngày, thanh toán đúng hạn, hỗ trợ 24/7.",
};

const steps = [
  {
    number: "01",
    title: "Đăng ký miễn phí",
    description:
      "Tạo tài khoản tại member.nguyenduchoa.com và đăng ký chương trình affiliate trong vài phút. Không cần phê duyệt phức tạp.",
    icon: "✍️",
  },
  {
    number: "02",
    title: "Chia sẻ link của bạn",
    description:
      "Nhận link affiliate riêng và chia sẻ qua blog, mạng xã hội, email hay bất kỳ kênh nào bạn muốn. Chúng tôi cung cấp đầy đủ tài liệu marketing.",
    icon: "🔗",
  },
  {
    number: "03",
    title: "Nhận hoa hồng",
    description:
      "Kiếm 20% hoa hồng cho mỗi người đăng ký qua link của bạn. Thanh toán tự động hàng tháng qua chuyển khoản ngân hàng hoặc PayPal.",
    icon: "💰",
  },
];

const reasons = [
  {
    icon: "💎",
    title: "Hoa hồng 20% — Tốt nhất thị trường",
    description:
      "Trong khi hầu hết chương trình affiliate chỉ trả 5-10%, chúng tôi trả 20% hoa hồng. Với subscription $9/tháng, bạn nhận $1.8 mỗi người — mãi mãi chừng nào họ còn đăng ký.",
  },
  {
    icon: "📅",
    title: "Cookie 90 ngày",
    description:
      "Link của bạn được theo dõi trong 90 ngày. Ngay cả khi khách hàng cần thời gian suy nghĩ, bạn vẫn nhận hoa hồng khi họ quyết định mua.",
  },
  {
    icon: "⚡",
    title: "Thanh toán đúng hạn, tự động",
    description:
      "Mỗi ngày 1 hàng tháng, hoa hồng của bạn được tự động chuyển khoản. Không cần đợi, không cần yêu cầu thủ công.",
  },
  {
    icon: "📊",
    title: "Dashboard theo dõi real-time",
    description:
      "Xem chính xác bao nhiêu người click link của bạn, bao nhiêu người đăng ký, và thu nhập của bạn đến từng xu — mọi lúc, mọi nơi.",
  },
  {
    icon: "🎁",
    title: "Tài liệu marketing miễn phí",
    description:
      "Banner, caption mẫu, video quảng cáo sẵn có — tất cả để bạn bắt đầu ngay mà không cần tự tạo. Chúng tôi lo phần thiết kế, bạn chỉ cần chia sẻ.",
  },
  {
    icon: "🏆",
    title: "Recurring commission",
    description:
      "Đây không phải hoa hồng một lần. Mỗi tháng khách hàng gia hạn, bạn tiếp tục nhận 20%. Xây dựng thu nhập thụ động thực sự.",
  },
];

const comparisonData = [
  {
    feature: "Hoa hồng",
    us: "20%",
    amazon: "1-10%",
    shopee: "3-8%",
    others: "5-15%",
  },
  {
    feature: "Cookie tracking",
    us: "90 ngày",
    amazon: "24 giờ",
    shopee: "7 ngày",
    others: "30 ngày",
  },
  {
    feature: "Loại hoa hồng",
    us: "Recurring (hàng tháng)",
    amazon: "Một lần",
    shopee: "Một lần",
    others: "Một lần",
  },
  {
    feature: "Thanh toán",
    us: "Tự động hàng tháng",
    amazon: "60 ngày sau",
    shopee: "Sau review",
    others: "Net 30-60",
  },
  {
    feature: "Tài liệu marketing",
    us: "✅ Đầy đủ",
    amazon: "❌ Không có",
    shopee: "❌ Không có",
    others: "⚠️ Hạn chế",
  },
  {
    feature: "Hỗ trợ affiliate",
    us: "✅ 1-1 riêng",
    amazon: "❌ Self-serve",
    shopee: "❌ Self-serve",
    others: "⚠️ Email only",
  },
];

const testimonials = [
  {
    name: "Trần Thị Lan Anh",
    avatar: "👩",
    role: "Blogger sức khỏe",
    income: "$380/tháng",
    quote:
      "Tôi bắt đầu chia sẻ link affiliate trong các bài blog về sức khỏe của mình. Chỉ sau 3 tháng, tôi đã có thu nhập ổn định $380/tháng mà không cần làm thêm gì. Hoa hồng 20% là thực sự ấn tượng!",
  },
  {
    name: "Nguyễn Văn Minh",
    avatar: "👨",
    role: "YouTuber tech",
    income: "$950/tháng",
    quote:
      "Tôi review các công cụ AI trên YouTube và đặt link affiliate trong mô tả video. Thu nhập affiliate của tôi đã vượt qua cả AdSense. Cookie 90 ngày thực sự tạo ra sự khác biệt lớn.",
  },
  {
    name: "Phạm Thị Hồng",
    avatar: "👩‍💼",
    role: "Marketer freelance",
    income: "$1,200/tháng",
    quote:
      "Là marketer freelance, tôi giới thiệu công cụ AI của nguyenduchoa.com cho khách hàng của mình. Họ dùng tốt, tôi nhận hoa hồng hàng tháng — win-win hoàn hảo. Dashboard tracking rất chuyên nghiệp.",
  },
];

const faqs = [
  {
    question: "Tôi cần bao nhiêu followers để tham gia?",
    answer:
      "Không có yêu cầu tối thiểu về followers. Dù bạn có 100 hay 100.000 người theo dõi, bạn vẫn có thể tham gia và kiếm hoa hồng. Quan trọng là chất lượng audience, không phải số lượng.",
  },
  {
    question: "Hoa hồng được tính như thế nào?",
    answer:
      "Bạn nhận 20% giá trị đơn hàng. Với subscription $9/tháng, bạn nhận $1.8/tháng/người. Với Bundle $15/tháng, bạn nhận $3/tháng/người. Với khóa học $97 một lần, bạn nhận $19.4 một lần.",
  },
  {
    question: "Khi nào tôi nhận được tiền?",
    answer:
      "Hoa hồng được tính vào ngày 1 hàng tháng cho tất cả giao dịch thành công trong tháng trước. Chúng tôi thanh toán trong vòng 3-5 ngày làm việc qua chuyển khoản ngân hàng hoặc PayPal.",
  },
  {
    question: "Số tiền tối thiểu để rút là bao nhiêu?",
    answer:
      "Số tiền tối thiểu để rút là $20 (khoảng 500.000 VND). Nếu chưa đạt, hoa hồng sẽ được cộng dồn vào tháng tiếp theo.",
  },
  {
    question: "Tôi có thể quảng cáo trả tiền không?",
    answer:
      "Có, bạn được phép chạy quảng cáo để promote link affiliate của mình. Tuy nhiên, không được bid trên brand keywords (nguyenduchoa, flowveo, v.v.) và phải tuân thủ chính sách quảng cáo của từng nền tảng.",
  },
  {
    question: "Nếu khách hàng hoàn tiền thì sao?",
    answer:
      "Nếu khách hàng yêu cầu hoàn tiền trong vòng 15 ngày, hoa hồng tương ứng sẽ bị thu hồi. Chúng tôi có chính sách 15 ngày thử miễn phí để đảm bảo khách hàng hài lòng trước khi thanh toán.",
  },
];

export default function AffiliatePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              Chương trình Affiliate đang mở
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Kiếm thu nhập thụ động với
              <br />
              <span className="gradient-text">hoa hồng 20%</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Tham gia chương trình affiliate của nguyenduchoa.com. Chia sẻ link, nhận hoa hồng recurring mỗi
              tháng — hoàn toàn thụ động, không giới hạn thu nhập.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://member.nguyenduchoa.com/register"
                className="gradient-btn text-white font-semibold px-8 py-4 rounded-xl text-lg"
              >
                Tham gia ngay — Miễn phí →
              </a>
              <a
                href="#cach-hoat-dong"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Tìm hiểu thêm ↓
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { value: "20%", label: "Hoa hồng" },
                { value: "90 ngày", label: "Cookie tracking" },
                { value: "$0", label: "Phí tham gia" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-white/50 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="cach-hoat-dong" className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Cách hoạt động — <span className="gradient-text">Đơn giản 3 bước</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                Bắt đầu kiếm hoa hồng chỉ trong vài phút. Không cần kinh nghiệm, không cần vốn.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="gradient-border rounded-2xl p-8 card-hover text-center"
                  style={{ background: "var(--card-bg)" }}
                >
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <div className="text-sm font-bold text-purple-400 mb-2">BƯỚC {step.number}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commission Calculator */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Tính thu nhập <span className="gradient-text">của bạn</span>
              </h2>
              <p className="text-white/50">
                Nhập số người bạn có thể giới thiệu để xem thu nhập dự kiến
              </p>
            </div>
            <AffiliateCalculator />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Tại sao chọn <span className="gradient-text">chúng tôi?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="gradient-border rounded-2xl p-6 card-hover"
                  style={{ background: "var(--card-bg)" }}
                >
                  <div className="text-3xl mb-4">{reason.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                So sánh với các <span className="gradient-text">chương trình khác</span>
              </h2>
            </div>
            <div
              className="gradient-border rounded-2xl overflow-hidden"
              style={{ background: "var(--card-bg)" }}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left px-6 py-4 text-white/50 font-medium text-sm">Tiêu chí</th>
                      <th className="px-6 py-4 text-center">
                        <span className="gradient-text font-bold">nguyenduchoa.com</span>
                      </th>
                      <th className="px-6 py-4 text-center text-white/40 font-medium text-sm">Amazon</th>
                      <th className="px-6 py-4 text-center text-white/40 font-medium text-sm">Shopee</th>
                      <th className="px-6 py-4 text-center text-white/40 font-medium text-sm">Khác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr
                        key={row.feature}
                        className={i % 2 === 0 ? "bg-white/2" : ""}
                      >
                        <td className="px-6 py-4 text-white/60 text-sm">{row.feature}</td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-purple-300 font-semibold text-sm">{row.us}</span>
                        </td>
                        <td className="px-6 py-4 text-center text-white/40 text-sm">{row.amazon}</td>
                        <td className="px-6 py-4 text-center text-white/40 text-sm">{row.shopee}</td>
                        <td className="px-6 py-4 text-center text-white/40 text-sm">{row.others}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Affiliates của chúng tôi <span className="gradient-text">nói gì?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="gradient-border rounded-2xl p-6 card-hover"
                  style={{ background: "var(--card-bg)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">{t.avatar}</div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-white/40 text-xs">{t.role}</div>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-green-400 font-bold text-sm">{t.income}</div>
                      <div className="text-white/40 text-xs">thu nhập</div>
                    </div>
                  </div>
                  <div className="text-sm text-white/60 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </div>
                  <div className="flex gap-0.5 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Sẵn sàng bắt đầu <span className="gradient-text">kiếm tiền thụ động?</span>
            </h2>
            <p className="text-white/50 mb-8 text-lg">
              Tham gia hàng trăm affiliate đang kiếm thu nhập ổn định mỗi tháng cùng chúng tôi.
              Đăng ký miễn phí, không cần thẻ tín dụng.
            </p>
            <a
              href="https://member.nguyenduchoa.com/register"
              className="gradient-btn text-white font-bold px-10 py-5 rounded-xl text-lg inline-block"
            >
              Tham gia ngay — Hoàn toàn miễn phí →
            </a>
            <p className="text-white/30 text-sm mt-4">
              Đã có tài khoản?{" "}
              <a
                href="https://member.nguyenduchoa.com/affiliate"
                className="text-purple-400 hover:text-purple-300"
              >
                Truy cập Affiliate Portal →
              </a>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Câu hỏi thường gặp
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="gradient-border rounded-xl p-6"
                  style={{ background: "var(--card-bg)" }}
                >
                  <h3 className="text-white font-semibold mb-3">{faq.question}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{faq.answer}</p>
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
