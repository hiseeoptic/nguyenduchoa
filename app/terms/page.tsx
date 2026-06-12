import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng — nguyenduchoa.com",
  description: "Điều khoản và điều kiện sử dụng dịch vụ nguyenduchoa.com",
};

const sections = [
  {
    title: "1. Chấp nhận điều khoản",
    content: `Bằng cách truy cập và sử dụng nguyenduchoa.com và các dịch vụ liên quan (FlowVeo, ThansOhoc, AI Studio, SucKhoeChudong, Content AI Writer, Storyboard AI), bạn đồng ý bị ràng buộc bởi các điều khoản này.

Nếu bạn không đồng ý với bất kỳ phần nào của điều khoản, bạn không được phép sử dụng dịch vụ.`,
  },
  {
    title: "2. Tài khoản và bảo mật",
    content: `**Tạo tài khoản:** Bạn phải cung cấp thông tin chính xác khi đăng ký. Mỗi người chỉ được tạo một tài khoản.

**Bảo mật tài khoản:** Bạn chịu trách nhiệm bảo mật thông tin đăng nhập và mọi hoạt động xảy ra dưới tài khoản của mình.

**Cấm chia sẻ tài khoản:** License key chỉ được sử dụng trên một thiết bị tại một thời điểm. Việc chia sẻ tài khoản sẽ dẫn đến khóa tài khoản vĩnh viễn mà không hoàn tiền.`,
  },
  {
    title: "3. Subscription và thanh toán",
    content: `**Chu kỳ thanh toán:** Subscription tự động gia hạn theo chu kỳ hàng tháng hoặc hàng năm.

**Giá cả:** Giá hiển thị bằng USD. Đối với thanh toán qua VNPay/MoMo, giá được quy đổi sang VND theo tỷ giá thực tế tại thời điểm giao dịch.

**Hủy subscription:** Bạn có thể hủy bất kỳ lúc nào. Dịch vụ tiếp tục hoạt động đến hết chu kỳ đã thanh toán.

**Hoàn tiền:** Chúng tôi cung cấp hoàn tiền 100% trong vòng 7 ngày đầu nếu bạn không hài lòng. Sau 7 ngày, không hoàn tiền cho chu kỳ hiện tại.

**Thanh toán USDT/VNPay/MoMo:** Thanh toán thủ công được xác nhận trong vòng 24 giờ làm việc. Sau khi xác nhận, subscription sẽ được kích hoạt ngay.`,
  },
  {
    title: "4. Chương trình Affiliate",
    content: `**Điều kiện tham gia:** Bất kỳ member nào đều có thể tham gia affiliate miễn phí.

**Hoa hồng:** 20% giá trị mỗi khoản thanh toán từ người bạn giới thiệu, áp dụng trong suốt thời gian họ là member.

**Cookie tracking:** Link affiliate có cookie 30 ngày. Nếu người dùng xóa cookie hoặc đăng ký sau 30 ngày, referral không được ghi nhận.

**Rút tiền:** Hoa hồng tối thiểu $20 mới có thể rút. Thanh toán qua USDT TRC-20 hoặc chuyển khoản ngân hàng trong vòng 7 ngày làm việc.

**Cấm spam:** Không được phép quảng cáo bằng spam email, comment dạo, hoặc quảng cáo giả mạo. Vi phạm sẽ bị xóa tài khoản affiliate và tịch thu hoa hồng tích lũy.`,
  },
  {
    title: "5. Quyền sở hữu trí tuệ",
    content: `**Nội dung của chúng tôi:** Toàn bộ giao diện, logo, tên thương hiệu, và code là tài sản của nguyenduchoa.com.

**Nội dung bạn tạo ra:** Bạn giữ toàn quyền sở hữu nội dung (văn bản, hình ảnh, video) được tạo ra bằng công cụ AI của chúng tôi. Chúng tôi không yêu cầu bản quyền đối với output của bạn.

**Giấy phép AI:** Việc sử dụng các mô hình AI của bên thứ ba (Google, OpenAI, v.v.) tuân theo điều khoản của nhà cung cấp tương ứng.`,
  },
  {
    title: "6. Hành vi bị cấm",
    content: `Bạn không được sử dụng dịch vụ để:

• Tạo nội dung vi phạm pháp luật, phỉ báng, hoặc xâm phạm quyền riêng tư
• Tạo spam, deepfake gây hại, hoặc nội dung lừa đảo
• Cố gắng xâm nhập, reverse engineer, hoặc vô hiệu hóa bảo mật hệ thống
• Tạo nhiều tài khoản để lạm dụng trial miễn phí
• Bán lại hoặc cấp phép lại dịch vụ cho bên thứ ba mà không có thỏa thuận bằng văn bản`,
  },
  {
    title: "7. Giới hạn trách nhiệm",
    content: `Dịch vụ được cung cấp "như hiện trạng". Chúng tôi không đảm bảo dịch vụ hoạt động liên tục 100% hoặc không có lỗi.

Chúng tôi không chịu trách nhiệm cho bất kỳ thiệt hại gián tiếp, ngẫu nhiên, hoặc hậu quả nào phát sinh từ việc sử dụng hoặc không thể sử dụng dịch vụ.

Trách nhiệm tối đa của chúng tôi không vượt quá số tiền bạn đã thanh toán trong 3 tháng gần nhất.`,
  },
  {
    title: "8. Chấm dứt dịch vụ",
    content: `Chúng tôi có quyền tạm ngừng hoặc chấm dứt tài khoản của bạn nếu vi phạm điều khoản này, mà không cần thông báo trước trong trường hợp vi phạm nghiêm trọng.

Khi tài khoản bị chấm dứt do vi phạm, bạn sẽ mất quyền truy cập ngay lập tức và không được hoàn tiền.`,
  },
  {
    title: "9. Luật áp dụng",
    content: `Điều khoản này được điều chỉnh bởi pháp luật nước Cộng hòa Xã hội Chủ nghĩa Việt Nam. Mọi tranh chấp sẽ được giải quyết tại tòa án có thẩm quyền tại Việt Nam.`,
  },
];

export default function TermsPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Điều khoản sử dụng</h1>
          <p className="text-white/50">Cập nhật lần cuối: 01/06/2024</p>
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
          <h3 className="text-white font-semibold mb-2">Câu hỏi về điều khoản</h3>
          <p className="text-white/50 text-sm mb-3">
            Nếu có bất kỳ câu hỏi nào về điều khoản sử dụng, vui lòng liên hệ:
          </p>
          <a href="mailto:hello@nguyenduchoa.com" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            hello@nguyenduchoa.com
          </a>
        </div>
      </div>
    </div>
  );
}
