export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number; // USD
  originalPrice?: number;
  type: "subscription" | "course" | "physical";
  category: string;
  icon: string;
  features: string[];
  url?: string; // external app URL if subscription
  checkoutUrl: string; // → member.nguyenduchoa.com/checkout?product=xxx
};

export const products: Product[] = [
  {
    slug: "flowveo",
    name: "FlowVeo Subscription",
    tagline: "Tạo video AI chuyên nghiệp trong vài phút",
    description:
      "Nền tảng tạo video AI thế hệ mới. Từ ý tưởng đến video hoàn chỉnh chỉ với vài dòng mô tả.",
    longDescription:
      "FlowVeo là giải pháp tạo video AI toàn diện dành cho marketer, doanh nghiệp và content creator Việt Nam. Với hơn 500 template chuyên nghiệp, FlowVeo giúp bạn tạo ra những video quảng cáo, video giới thiệu doanh nghiệp, và nội dung mạng xã hội chất lượng cao mà không cần bất kỳ kỹ năng video nào. Công nghệ AI tiên tiến của chúng tôi hiểu tiếng Việt và tạo ra video phù hợp với văn hóa và thị trường Việt Nam.",
    price: 9,
    type: "subscription",
    category: "Subscription",
    icon: "🎬",
    url: "https://flowveo.nguyenduchoa.com",
    checkoutUrl:
      "https://member.nguyenduchoa.com/checkout?product=flowveo&plan=monthly",
    features: [
      "Tạo video AI từ văn bản mô tả",
      "500+ template chuyên nghiệp",
      "Hỗ trợ tiếng Việt hoàn chỉnh",
      "Export HD 1080p và 4K",
      "Thêm logo và branding riêng",
      "Âm nhạc nền bản quyền",
      "Xuất nhiều định dạng (MP4, MOV, GIF)",
      "Lưu trữ cloud 10GB",
    ],
  },
  {
    slug: "thansohoc",
    name: "ThansOhoc Subscription",
    tagline: "Automation marketing thông minh, chạy 24/7",
    description:
      "Hệ thống automation marketing giúp bạn tự động hóa toàn bộ quy trình từ thu hút lead đến chốt sale.",
    longDescription:
      "ThansOhoc là nền tảng marketing automation mạnh mẽ được thiết kế đặc biệt cho doanh nghiệp Việt Nam. Từ chatbot thông minh, email marketing tự động, đến quản lý lead và phân tích conversion — ThansOhoc xử lý tất cả để bạn có thể tập trung vào những gì quan trọng hơn. Hệ thống AI của chúng tôi học hỏi và tối ưu liên tục, đảm bảo tỷ lệ chuyển đổi cao nhất có thể.",
    price: 9,
    type: "subscription",
    category: "Subscription",
    icon: "⚡",
    url: "https://thansohoc.nguyenduchoa.com",
    checkoutUrl:
      "https://member.nguyenduchoa.com/checkout?product=thansohoc&plan=monthly",
    features: [
      "Chatbot AI thông minh 24/7",
      "Email marketing automation",
      "Quản lý lead và pipeline bán hàng",
      "A/B testing tự động",
      "Phân tích và báo cáo chi tiết",
      "Tích hợp Zalo, Facebook Messenger",
      "Template email chuyên nghiệp",
      "CRM cơ bản tích hợp sẵn",
    ],
  },
  {
    slug: "ai-studio",
    name: "AI Studio Subscription",
    tagline: "Tạo hình ảnh AI đẹp mắt, không giới hạn sáng tạo",
    description:
      "Nền tảng tạo hình ảnh AI chuyên nghiệp với công nghệ Stable Diffusion tiên tiến, giao diện tiếng Việt thân thiện.",
    longDescription:
      "AI Studio là công cụ tạo hình ảnh AI toàn diện với giao diện tiếng Việt, được tối ưu cho nhu cầu của marketer và doanh nghiệp Việt Nam. Từ thumbnail YouTube ấn tượng, banner quảng cáo bắt mắt, đến hình ảnh sản phẩm chuyên nghiệp — AI Studio giúp bạn tạo ra mọi loại visual content trong vài giây. Không cần biết design, không cần Photoshop.",
    price: 9,
    type: "subscription",
    category: "Subscription",
    icon: "🎨",
    url: "https://studio.nguyenduchoa.com",
    checkoutUrl:
      "https://member.nguyenduchoa.com/checkout?product=ai-studio&plan=monthly",
    features: [
      "Tạo hình ảnh AI từ mô tả văn bản",
      "1000+ style và filter nghệ thuật",
      "Upscale hình ảnh lên 4K",
      "Xóa và thay thế background",
      "Chỉnh sửa hình ảnh bằng AI",
      "Tạo avatar và portrait chuyên nghiệp",
      "Batch generation (tạo nhiều cùng lúc)",
      "Lưu trữ không giới hạn",
    ],
  },
  {
    slug: "suckhoechudong-vinalink",
    name: "SucKhoeChudong VinaLink",
    tagline: "Nền tảng affiliate sức khỏe #1 Việt Nam",
    description:
      "Hệ thống affiliate marketing chuyên ngành sức khỏe với hàng nghìn sản phẩm chất lượng và hoa hồng hấp dẫn.",
    longDescription:
      "SucKhoeChudong VinaLink là nền tảng kết nối người bán và affiliate marketer trong lĩnh vực sức khỏe và làm đẹp. Với hơn 5.000 sản phẩm từ các thương hiệu uy tín, hoa hồng lên đến 40%, và hệ thống tracking chính xác — đây là cơ hội kiếm tiền lý tưởng cho bất kỳ ai đang xây dựng kênh nội dung về sức khỏe, dinh dưỡng, hay làm đẹp.",
    price: 9,
    type: "subscription",
    category: "Subscription",
    icon: "💚",
    url: "https://suckhoechudong.nguyenduchoa.com",
    checkoutUrl:
      "https://member.nguyenduchoa.com/checkout?product=suckhoechudong-vinalink&plan=monthly",
    features: [
      "Truy cập 5000+ sản phẩm sức khỏe",
      "Hoa hồng lên đến 40%",
      "Cookie tracking 90 ngày",
      "Dashboard theo dõi real-time",
      "Tài liệu marketing sẵn có",
      "Thanh toán tự động hàng tuần",
      "Hỗ trợ riêng 1-1",
      "Training và coaching affiliate",
    ],
  },
  {
    slug: "bundle-all-tools",
    name: "Bundle ALL Tools",
    tagline: "Trọn bộ công cụ AI — Tiết kiệm 58% so với mua lẻ",
    description:
      "Sở hữu toàn bộ hệ sinh thái công cụ AI của nguyenduchoa.com với một mức giá không thể tin được.",
    longDescription:
      "Đây là lựa chọn thông minh nhất dành cho bạn. Thay vì mua từng công cụ riêng lẻ với tổng chi phí $36/tháng, hãy đăng ký Bundle ALL Tools để có ngay FlowVeo, ThansOhoc, AI Studio và SucKhoeChudong VinaLink chỉ với $15/tháng. Tiết kiệm hơn $21 mỗi tháng, tương đương $252/năm — và bạn có thể bắt đầu ngay hôm nay với 15 ngày dùng thử miễn phí.",
    price: 15,
    originalPrice: 36,
    type: "subscription",
    category: "Bundle",
    icon: "🚀",
    checkoutUrl:
      "https://member.nguyenduchoa.com/checkout?product=bundle-all-tools&plan=monthly",
    features: [
      "FlowVeo — Tạo video AI",
      "ThansOhoc — Marketing automation",
      "AI Studio — Tạo hình ảnh AI",
      "SucKhoeChudong VinaLink — Affiliate sức khỏe",
      "Ưu tiên hỗ trợ khách hàng VIP",
      "Tham gia community riêng",
      "Truy cập beta features sớm nhất",
      "Discount riêng cho sản phẩm mới",
    ],
  },
  {
    slug: "khoa-hoc-ai-marketing",
    name: "Khóa học AI Marketing",
    tagline: "Từ người mới đến chuyên gia AI Marketing trong 8 tuần",
    description:
      "Khóa học toàn diện về ứng dụng AI trong marketing, kinh doanh online và xây dựng thu nhập thụ động.",
    longDescription:
      "Đây là khóa học AI Marketing thực chiến nhất dành cho người Việt Nam. Trong 8 tuần, bạn sẽ học cách sử dụng AI để tạo nội dung, xây dựng funnel bán hàng, chạy quảng cáo hiệu quả và xây dựng hệ thống affiliate marketing tự động. Tất cả bài học đều được dạy bằng tiếng Việt, với ví dụ thực tế từ thị trường Việt Nam. Sau khóa học, bạn sẽ có một hệ thống kiếm tiền online hoạt động thực sự — không phải lý thuyết.",
    price: 97,
    originalPrice: 197,
    type: "course",
    category: "Khóa học",
    icon: "📚",
    checkoutUrl:
      "https://member.nguyenduchoa.com/checkout?product=khoa-hoc-ai-marketing&plan=one-time",
    features: [
      "40+ video bài giảng HD",
      "8 tuần học có hệ thống",
      "Cộng đồng học viên riêng",
      "Templates và tài liệu thực hành",
      "Truy cập trọn đời không giới hạn",
      "Cập nhật nội dung miễn phí",
      "Certificate hoàn thành khóa học",
      "1 buổi coaching 1-1 với giảng viên",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentSlug: string, limit = 3): Product[] {
  return products.filter((p) => p.slug !== currentSlug).slice(0, limit);
}

export const productCategories = ["Tất cả", "Subscription", "Bundle", "Khóa học"];
