const products = [
  {
    name: "FlowVeo",
    tagline: "Tạo video AI chuyên nghiệp",
    description:
      "Tạo video chất lượng cao từ script, hình ảnh và âm thanh bằng AI. Phù hợp cho content creator và marketer.",
    icon: "🎬",
    color: "from-purple-600 to-blue-600",
    features: ["Text to Video", "AI Script Generator", "Auto Subtitle"],
    url: "https://flowveo.nguyenduchoa.com",
    badge: "Hot",
  },
  {
    name: "ThansOhoc",
    tagline: "AI viết nội dung tiếng Việt",
    description:
      "Công cụ AI viết nội dung chuẩn SEO cho thị trường Việt Nam. Blog, social media, email marketing.",
    icon: "✍️",
    color: "from-blue-600 to-cyan-600",
    features: ["SEO Content", "Social Media Posts", "Email Templates"],
    url: "https://thansohoc.nguyenduchoa.com",
    badge: null,
  },
  {
    name: "Content AI Writer",
    tagline: "AI Content cho mọi nhu cầu",
    description:
      "Viết bài chuẩn SEO, quảng cáo, copywriting với AI. Hỗ trợ đa ngôn ngữ và tối ưu conversion.",
    icon: "📝",
    color: "from-emerald-600 to-teal-600",
    features: ["Long-form Content", "Ad Copy", "Product Descriptions"],
    url: "https://contentaiwriter.com",
    badge: null,
  },
  {
    name: "AI Studio",
    tagline: "Tạo hình ảnh AI đỉnh cao",
    description:
      "Tạo hình ảnh nghệ thuật, ảnh sản phẩm, banner marketing với AI. Hàng trăm phong cách khác nhau.",
    icon: "🎨",
    color: "from-pink-600 to-rose-600",
    features: ["Text to Image", "Image to Image", "Style Transfer"],
    url: "https://studio.nguyenduchoa.com",
    badge: "Mới",
  },
  {
    name: "Storyboard AI",
    tagline: "Thiết kế storyboard tự động",
    description:
      "Tạo storyboard chuyên nghiệp cho video, phim quảng cáo chỉ trong vài phút bằng AI.",
    icon: "🎭",
    color: "from-orange-600 to-amber-600",
    features: ["Auto Storyboard", "Scene Generator", "Export PDF/PPT"],
    url: "https://storyboardai.app",
    badge: null,
  },
  {
    name: "SucKhoeChudong",
    tagline: "Nội dung sức khoẻ & VinaLink",
    description:
      "Nền tảng nội dung sức khoẻ chủ động kết hợp quản lý link thông minh. Theo dõi click và phân tích traffic.",
    icon: "🔗",
    color: "from-indigo-600 to-violet-600",
    features: ["Link Shortener", "Health Content", "Analytics"],
    url: "https://suckhoechudong.nguyenduchoa.com",
    badge: null,
  },
];

export default function Products() {
  return (
    <section id="san-pham" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
            <span className="text-purple-400 text-sm font-medium">Hệ sinh thái sản phẩm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            6 công cụ AI,{" "}
            <span className="gradient-text">1 hệ sinh thái</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Mỗi công cụ giải quyết một bài toán cụ thể. Kết hợp lại để tạo ra
            workflow tự động hóa toàn bộ công việc marketing của bạn.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="gradient-border rounded-2xl p-6 card-hover group relative overflow-hidden"
              style={{ background: "var(--card-bg)" }}
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-medium">
                  {product.badge}
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform`}
              >
                {product.icon}
              </div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                <p className="text-purple-400 text-sm font-medium mb-3">{product.tagline}</p>
                <p className="text-white/55 text-sm leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.features.map((f) => (
                  <span
                    key={f}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/60 text-xs"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium group-hover:gap-3 transition-all"
              >
                Khám phá ngay
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-white/50 text-sm mb-4">Tất cả sản phẩm đều có trong một subscription</p>
          <a
            href="https://member.nguyenduchoa.com/register"
            className="gradient-btn text-white font-semibold px-8 py-3.5 rounded-xl text-sm inline-block"
          >
            Dùng thử tất cả — Miễn phí 15 ngày
          </a>
        </div>
      </div>
    </section>
  );
}
