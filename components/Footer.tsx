import Link from "next/link";

const products = [
  { name: "FlowVeo", href: "https://flowveo.nguyenduchoa.com" },
  { name: "ThansOhoc", href: "https://thansohoc.nguyenduchoa.com" },
  { name: "Content AI Writer", href: "#" },
  { name: "AI Studio (Gen Image)", href: "https://studio.nguyenduchoa.com" },
  { name: "Storyboard AI", href: "#" },
  { name: "SucKhoeChudong (VinaLink)", href: "https://suckhoechudong.nguyenduchoa.com" },
];

const links = {
  "Hệ thống": [
    { name: "Dashboard Member", href: "https://member.nguyenduchoa.com" },
    { name: "Affiliate Portal", href: "https://member.nguyenduchoa.com/affiliate" },
    { name: "Đăng ký", href: "https://member.nguyenduchoa.com/register" },
    { name: "Đăng nhập", href: "https://member.nguyenduchoa.com/login" },
  ],
  "Hỗ trợ": [
    { name: "Zalo: 0xxx-xxx-xxx", href: "#lien-he" },
    { name: "Telegram", href: "https://t.me/nguyenduchoa" },
    { name: "Email", href: "mailto:hello@nguyenduchoa.com" },
    { name: "Chính sách hoàn tiền", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="lien-he" className="border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-btn flex items-center justify-center text-white font-bold">
                N
              </div>
              <span className="font-semibold text-white">
                nguyenduchoa<span className="gradient-text">.com</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Hệ sinh thái công cụ AI & Marketing số giúp bạn xây dựng kinh doanh online hiệu quả.
            </p>
            <div className="flex gap-3">
              <a
                href="https://t.me/nguyenduchoa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 hover:border-purple-500/40 flex items-center justify-center text-white/50 hover:text-white transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.008 9.454c-.148.665-.54.828-1.093.515l-3.01-2.217-1.454 1.4c-.16.16-.296.296-.607.296l.217-3.07 5.587-5.044c.243-.216-.053-.337-.375-.121L6.87 14.07l-2.962-.925c-.644-.202-.657-.644.135-.953l11.566-4.462c.537-.196 1.006.13.953.518z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/nguyenduchoa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 hover:border-purple-500/40 flex items-center justify-center text-white/50 hover:text-white transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@nguyenduchoa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 hover:border-purple-500/40 flex items-center justify-center text-white/50 hover:text-white transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Sản phẩm</h4>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-5">{section}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2024 nguyenduchoa.com · Made with ❤️ in Vietnam
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              Điều khoản sử dụng
            </Link>
            <Link href="/privacy" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              Chính sách bảo mật
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
