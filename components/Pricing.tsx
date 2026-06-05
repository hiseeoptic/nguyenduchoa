"use client";

import { useState } from "react";

const features = [
  "Truy cập tất cả 6 công cụ AI",
  "Tạo nội dung không giới hạn",
  "Dashboard affiliate",
  "Hoa hồng 20% mỗi tháng",
  "Thanh toán USDT, Stripe, VNPay, Ngân hàng",
  "Hỗ trợ 24/7 qua Zalo/Telegram",
  "Cập nhật tính năng mới miễn phí",
  "Xuất file PDF, PNG, Video",
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="gia-ca" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6">
            <span className="text-emerald-400 text-sm font-medium">Giá cả minh bạch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Một giá, <span className="gradient-text">tất cả tính năng</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Không có gói ẩn, không phí bổ sung. Trả một lần, dùng toàn bộ hệ sinh thái.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${!isYearly ? "text-white" : "text-white/40"}`}>Hàng tháng</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-all ${isYearly ? "gradient-btn" : "bg-white/10"}`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-all ${
                  isYearly ? "left-8" : "left-1"
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? "text-white" : "text-white/40"}`}>
              Hàng năm{" "}
              <span className="text-emerald-400 font-medium ml-1">-35%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          <div
            className="rounded-2xl p-7 border border-white/5 card-hover"
            style={{ background: "var(--card-bg)" }}
          >
            <div className="mb-6">
              <div className="text-white/60 text-sm font-medium mb-1">Starter</div>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black text-white">
                  {isYearly ? "$58" : "$9"}
                </span>
                <span className="text-white/40 text-sm mb-1.5">{isYearly ? "/năm" : "/tháng"}</span>
              </div>
              {isYearly && (
                <div className="text-white/40 text-xs line-through mt-1">$108/năm</div>
              )}
              <p className="text-white/50 text-sm mt-3">
                Phù hợp cho cá nhân và người mới bắt đầu
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {features.slice(0, 4).map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/65 text-sm">{f}</span>
                </div>
              ))}
            </div>

            <a
              href="https://member.nguyenduchoa.com/register"
              className="block w-full text-center py-3 rounded-xl border border-white/10 hover:border-purple-500/40 text-white/80 hover:text-white text-sm font-medium transition-all"
            >
              Bắt đầu 15 ngày miễn phí
            </a>
          </div>

          {/* Pro — recommended */}
          <div className="rounded-2xl p-7 gradient-border card-hover relative" style={{ background: "var(--card-bg)" }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-btn text-white text-xs font-bold">
              Phổ biến nhất
            </div>

            <div className="mb-6">
              <div className="text-purple-400 text-sm font-medium mb-1">Pro</div>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black text-white">
                  {isYearly ? "$97" : "$15"}
                </span>
                <span className="text-white/40 text-sm mb-1.5">{isYearly ? "/năm" : "/tháng"}</span>
              </div>
              {isYearly && (
                <div className="text-white/40 text-xs line-through mt-1">$180/năm</div>
              )}
              <p className="text-white/50 text-sm mt-3">
                Phù hợp cho content creator và marketer chuyên nghiệp
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/75 text-sm">{f}</span>
                </div>
              ))}
            </div>

            <a
              href="https://member.nguyenduchoa.com/register"
              className="gradient-btn block w-full text-center py-3 rounded-xl text-white text-sm font-semibold"
            >
              Bắt đầu 15 ngày miễn phí
            </a>
          </div>

          {/* Business */}
          <div
            className="rounded-2xl p-7 border border-white/5 card-hover"
            style={{ background: "var(--card-bg)" }}
          >
            <div className="mb-6">
              <div className="text-amber-400 text-sm font-medium mb-1">Business</div>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black text-white">
                  {isYearly ? "$197" : "$35"}
                </span>
                <span className="text-white/40 text-sm mb-1.5">{isYearly ? "/năm" : "/tháng"}</span>
              </div>
              {isYearly && (
                <div className="text-white/40 text-xs line-through mt-1">$420/năm</div>
              )}
              <p className="text-white/50 text-sm mt-3">
                Phù hợp cho team và doanh nghiệp vừa và nhỏ
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {[...features, "Tài khoản nhóm (5 users)", "API Access", "Custom branding"].map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/65 text-sm">{f}</span>
                </div>
              ))}
            </div>

            <a
              href="https://member.nguyenduchoa.com/register"
              className="block w-full text-center py-3 rounded-xl border border-amber-500/30 hover:border-amber-500/60 text-amber-400 hover:text-amber-300 text-sm font-medium transition-all"
            >
              Liên hệ ngay
            </a>
          </div>
        </div>

        {/* Payment methods */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm mb-4">Chấp nhận thanh toán qua</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["💳 Thẻ quốc tế (Stripe)", "₮ USDT Crypto (TRC-20)", "🏦 Chuyển khoản ngân hàng", "📱 VNPay / MoMo"].map((m) => (
              <span
                key={m}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/3 text-white/60 text-sm"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
