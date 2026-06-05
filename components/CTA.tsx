export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(124,58,237,0.4), transparent)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div
          className="rounded-3xl p-10 sm:p-16 gradient-border glow"
          style={{ background: "var(--card-bg)" }}
        >
          <div className="text-5xl mb-6">🚀</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Bắt đầu hành trình{" "}
            <span className="gradient-text">của bạn hôm nay</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Tham gia cùng hàng nghìn người đang sử dụng hệ sinh thái AI để
            xây dựng kinh doanh online và tạo thu nhập thụ động.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://member.nguyenduchoa.com/register"
              className="gradient-btn text-white font-semibold px-10 py-4 rounded-xl text-base"
            >
              Dùng thử 15 ngày miễn phí
            </a>
            <a
              href="https://t.me/nguyenduchoa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white/70 hover:text-white font-medium px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 transition-all text-base"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.008 9.454c-.148.665-.54.828-1.093.515l-3.01-2.217-1.454 1.4c-.16.16-.296.296-.607.296l.217-3.07 5.587-5.044c.243-.216-.053-.337-.375-.121L6.87 14.07l-2.962-.925c-.644-.202-.657-.644.135-.953l11.566-4.462c.537-.196 1.006.13.953.518z" />
              </svg>
              Chat với tôi
            </a>
          </div>

          <p className="text-white/30 text-sm mt-8">
            Không cần thẻ tín dụng · Hủy bất kỳ lúc nào · Hỗ trợ tiếng Việt
          </p>
        </div>
      </div>
    </section>
  );
}
