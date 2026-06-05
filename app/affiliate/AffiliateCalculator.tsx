"use client";

import { useState } from "react";

const plans = [
  { name: "Subscription đơn", price: 9, commission: 0.2 },
  { name: "Bundle ALL Tools", price: 15, commission: 0.2 },
  { name: "Khóa học AI Marketing", price: 97, commission: 0.2, oneTime: true },
];

export default function AffiliateCalculator() {
  const [referrals, setReferrals] = useState(10);

  return (
    <div
      className="gradient-border rounded-2xl p-8"
      style={{ background: "var(--card-bg)" }}
    >
      <div className="mb-8">
        <label className="block text-white font-semibold mb-3">
          Số người bạn giới thiệu mỗi tháng:{" "}
          <span className="gradient-text text-xl">{referrals}</span>
        </label>
        <input
          type="range"
          min={1}
          max={200}
          value={referrals}
          onChange={(e) => setReferrals(Number(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #7c3aed ${(referrals / 200) * 100}%, #1f1f2e ${(referrals / 200) * 100}%)`,
          }}
        />
        <div className="flex justify-between text-white/30 text-xs mt-1">
          <span>1</span>
          <span>200</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {plans.map((plan) => {
          const monthly = plan.oneTime
            ? 0
            : Math.round(referrals * plan.price * plan.commission * 100) / 100;
          const oneTimeAmount = plan.oneTime
            ? Math.round(referrals * plan.price * plan.commission * 100) / 100
            : 0;
          const yearly = plan.oneTime
            ? oneTimeAmount
            : Math.round(monthly * 12 * 100) / 100;

          return (
            <div
              key={plan.name}
              className="rounded-xl p-4 border border-white/10 text-center"
            >
              <div className="text-white/60 text-xs mb-2">{plan.name}</div>
              <div className="text-2xl font-bold gradient-text">
                ${plan.oneTime ? oneTimeAmount.toFixed(2) : monthly.toFixed(2)}
              </div>
              <div className="text-white/40 text-xs mt-1">
                {plan.oneTime ? "một lần" : "mỗi tháng"}
              </div>
              {!plan.oneTime && (
                <div className="text-green-400 text-xs mt-2">
                  ≈ ${yearly.toFixed(0)}/năm
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="rounded-xl p-6 border border-purple-500/30 bg-purple-500/10 text-center">
        <div className="text-white/60 text-sm mb-1">
          Nếu tất cả {referrals} người chọn Bundle ALL Tools:
        </div>
        <div className="text-4xl font-bold gradient-text">
          ${(referrals * 15 * 0.2).toFixed(2)}
          <span className="text-lg text-white/40 font-normal">/tháng</span>
        </div>
        <div className="text-green-400 text-sm mt-2">
          = ${(referrals * 15 * 0.2 * 12).toFixed(0)}/năm thu nhập thụ động
        </div>
        <div className="text-white/30 text-xs mt-3">
          * Ước tính dựa trên mức hoa hồng 20%. Thu nhập thực tế phụ thuộc vào hiệu quả marketing của bạn.
        </div>
      </div>

      <div className="mt-6 text-center">
        <a
          href="https://member.nguyenduchoa.com/register"
          className="gradient-btn text-white font-semibold px-8 py-3 rounded-xl inline-block"
        >
          Bắt đầu kiếm hoa hồng ngay →
        </a>
      </div>
    </div>
  );
}
