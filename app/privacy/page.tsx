import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chính sách bảo mật — nguyenduchoa.com",
  description: "Chính sách bảo mật và xử lý dữ liệu cá nhân của nguyenduchoa.com",
};

const sections = [
  {
    title: "1. Thông tin chúng tôi thu thập",
    content: `Khi bạn sử dụng dịch vụ của nguyenduchoa.com, chúng tôi có thể thu thập các loại thông tin sau:

**Thông tin tài khoản:** Tên, địa chỉ email, ảnh đại diện khi bạn đăng ký qua Google OAuth.

**Thông tin thanh toán:** Chúng tôi không lưu trữ thông tin thẻ tín dụng trực tiếp. Các giao dịch qua Stripe được xử lý và lưu trữ bởi Stripe Inc. Đối với thanh toán USDT/VNPay/MoMo, chúng tôi chỉ lưu mã giao dịch (transaction hash).

**Thông tin sử dụng:** Lịch sử truy cập, tính năng đã sử dụng, thông tin thiết bị (browser, OS).

**Thông tin địa chỉ ví:** Địa chỉ ví USDT (TRC-20) nếu bạn tham gia chương trình affiliate và muốn nhận thanh toán bằng crypto.`,
  },
  {
    title: "2. Mục đích sử dụng thông tin",
    content: `Chúng tôi sử dụng thông tin thu thập được để:

• Cung cấp và duy trì dịch vụ
• Xử lý thanh toán và quản lý subscription
• Gửi email thông báo liên quan đến tài khoản, thanh toán, và cập nhật tính năng
• Tính toán và thanh toán hoa hồng affiliate
• Ngăn chặn gian lận và lạm dụng dịch vụ
• Cải thiện chất lượng sản phẩm thông qua phân tích dữ liệu ẩn danh`,
  },
  {
    title: "3. Chia sẻ thông tin với bên thứ ba",
    content: `Chúng tôi không bán, trao đổi hoặc chuyển nhượng thông tin cá nhân của bạn cho bên thứ ba, ngoại trừ:

**Nhà cung cấp dịch vụ:** Stripe (xử lý thanh toán), Google (xác thực đăng nhập), Resend (gửi email), Vercel (hosting), Neon/Supabase (cơ sở dữ liệu).

**Yêu cầu pháp lý:** Khi được yêu cầu bởi cơ quan có thẩm quyền theo quy định pháp luật Việt Nam.`,
  },
  {
    title: "4. Bảo mật dữ liệu",
    content: `Chúng tôi áp dụng các biện pháp bảo mật tiêu chuẩn ngành:

• Kết nối HTTPS/TLS cho toàn bộ dữ liệu truyền tải
• Mật khẩu và token được mã hóa (không lưu plaintext)
• JWT session với thời hạn hợp lý
• Database được bảo vệ bởi tường lửa, không public internet
• Định kỳ cập nhật bảo mật và kiểm tra lỗ hổng`,
  },
  {
    title: "5. Quyền của bạn",
    content: `Bạn có quyền:

• **Truy cập:** Xem dữ liệu cá nhân chúng tôi đang lưu trữ về bạn
• **Chỉnh sửa:** Cập nhật thông tin không chính xác
• **Xóa:** Yêu cầu xóa tài khoản và toàn bộ dữ liệu liên quan
• **Xuất:** Nhận bản sao dữ liệu của bạn theo định dạng có thể đọc được
• **Từ chối:** Hủy đăng ký email marketing bất kỳ lúc nào

Để thực hiện các quyền này, liên hệ: hello@nguyenduchoa.com`,
  },
  {
    title: "6. Cookie và theo dõi",
    content: `Chúng tôi sử dụng cookie và công nghệ tương tự cho:

• **Cookie phiên:** Duy trì trạng thái đăng nhập
• **Cookie affiliate:** Theo dõi referral code khi bạn truy cập qua link giới thiệu (có hiệu lực 30 ngày)
• **Google Analytics:** Thu thập dữ liệu phân tích ẩn danh (không xác định danh tính cá nhân)

Bạn có thể tắt cookie trong cài đặt trình duyệt, tuy nhiên một số tính năng có thể không hoạt động đúng.`,
  },
  {
    title: "7. Dữ liệu của trẻ em",
    content: `Dịch vụ của chúng tôi không dành cho người dưới 16 tuổi. Chúng tôi không cố ý thu thập thông tin cá nhân từ trẻ em. Nếu bạn tin rằng con bạn đã cung cấp thông tin cá nhân, vui lòng liên hệ ngay để chúng tôi xóa dữ liệu đó.`,
  },
  {
    title: "8. Thay đổi chính sách",
    content: `Chúng tôi có thể cập nhật Chính sách bảo mật này theo thời gian. Mọi thay đổi quan trọng sẽ được thông báo qua email hoặc thông báo nổi bật trên website ít nhất 7 ngày trước khi có hiệu lực.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-white/40 hover:text-white/70 text-sm transition-colors inline-flex items-center gap-2 mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Về trang chủ
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Chính sách bảo mật</h1>
          <p className="text-white/50">Cập nhật lần cuối: 01/06/2024</p>
        </div>

        {/* Intro */}
        <div className="p-5 rounded-2xl border border-purple-500/20 bg-purple-500/5 mb-10">
          <p className="text-white/70 text-sm leading-relaxed">
            nguyenduchoa.com (<strong className="text-white">Chúng tôi</strong>) cam kết bảo vệ quyền riêng tư của bạn.
            Chính sách này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân khi bạn sử dụng
            website và các dịch vụ liên quan.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-white mb-4">{section.title}</h2>
              <div className="text-white/60 text-sm leading-relaxed space-y-2">
                {section.content.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html: para
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white/80">$1</strong>')
                        .replace(/\n•/g, "<br/>•"),
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-14 p-6 rounded-2xl border border-white/5" style={{ background: "var(--card-bg)" }}>
          <h3 className="text-white font-semibold mb-2">Liên hệ về bảo mật dữ liệu</h3>
          <p className="text-white/50 text-sm mb-3">
            Nếu có câu hỏi về chính sách bảo mật hoặc muốn thực hiện quyền của mình:
          </p>
          <a href="mailto:hello@nguyenduchoa.com" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            hello@nguyenduchoa.com
          </a>
        </div>
      </div>
    </div>
  );
}
