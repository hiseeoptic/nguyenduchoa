"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Tôi có thể dùng thử miễn phí không?",
    a: "Có! Mỗi tài khoản mới được dùng thử miễn phí 15 ngày đầy đủ tính năng. Không cần thẻ tín dụng.",
  },
  {
    q: "Hoa hồng affiliate được tính như thế nào?",
    a: "Bạn nhận 20% hoa hồng từ mỗi thanh toán của người bạn giới thiệu. Ví dụ: 100 người × $9/tháng = bạn nhận $180/tháng. Hoa hồng được cộng dồn mỗi tháng.",
  },
  {
    q: "Tôi có thể hủy subscription bất cứ lúc nào không?",
    a: "Có. Bạn có thể hủy bất kỳ lúc nào mà không bị phí phạt. Tài khoản sẽ tiếp tục hoạt động đến hết kỳ thanh toán.",
  },
  {
    q: "Các phương thức thanh toán nào được chấp nhận?",
    a: "Chúng tôi chấp nhận thẻ quốc tế (Stripe), USDT TRC-20, chuyển khoản ngân hàng và VNPay/MoMo. Thanh toán USDT và ngân hàng được xác nhận thủ công trong 24 giờ.",
  },
  {
    q: "Tiền hoa hồng affiliate được rút như thế nào?",
    a: "Hoa hồng tích lũy trong ví affiliate của bạn và có thể rút về USDT (TRC-20) hoặc chuyển khoản ngân hàng. Rút tối thiểu $20.",
  },
  {
    q: "Có giới hạn số người dùng trong tài khoản không?",
    a: "Gói Starter và Pro dành cho 1 người. Gói Business cho phép 5 người dùng trong cùng 1 tài khoản. Liên hệ để thảo luận về nhu cầu lớn hơn.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Câu hỏi <span className="gradient-text">thường gặp</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/5 overflow-hidden hover:border-purple-500/20 transition-colors"
              style={{ background: "var(--card-bg)" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-white font-medium text-sm pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-white/40 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
