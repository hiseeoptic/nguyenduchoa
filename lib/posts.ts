export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string
  date: string;
  category: string;
  readTime: string;
};

export const posts: Post[] = [
  {
    slug: "ai-marketing-la-gi-va-cach-ap-dung",
    title: "AI Marketing là gì? Hướng dẫn áp dụng AI vào kinh doanh online 2025",
    excerpt:
      "AI Marketing đang thay đổi cách chúng ta tiếp cận khách hàng. Tìm hiểu cách tận dụng trí tuệ nhân tạo để tăng doanh thu và tiết kiệm thời gian.",
    date: "2025-05-20",
    category: "AI Marketing",
    readTime: "8 phút",
    content: `
      <h2>AI Marketing là gì?</h2>
      <p>AI Marketing (Trí tuệ nhân tạo trong marketing) là việc ứng dụng các công nghệ AI như machine learning, xử lý ngôn ngữ tự nhiên (NLP), và computer vision vào các hoạt động marketing để tự động hóa, cá nhân hóa và tối ưu hóa chiến dịch tiếp thị.</p>

      <p>Thay vì phải thủ công phân tích dữ liệu khách hàng, viết nội dung hay tạo quảng cáo, AI có thể làm những công việc này nhanh hơn và chính xác hơn gấp nhiều lần.</p>

      <h2>Tại sao AI Marketing quan trọng?</h2>
      <p>Theo nghiên cứu từ McKinsey, các doanh nghiệp áp dụng AI trong marketing tăng trưởng doanh thu trung bình <strong>30-40%</strong> so với đối thủ chưa áp dụng. Đây là lý do:</p>
      <ul>
        <li><strong>Tiết kiệm thời gian:</strong> AI có thể tạo ra hàng trăm biến thể nội dung trong vài phút</li>
        <li><strong>Cá nhân hóa quy mô lớn:</strong> Gửi đúng thông điệp đến đúng người đúng thời điểm</li>
        <li><strong>Tối ưu chi phí:</strong> Giảm 60% chi phí sản xuất nội dung</li>
        <li><strong>Phân tích sâu hơn:</strong> Dự đoán hành vi khách hàng với độ chính xác cao</li>
      </ul>

      <h2>5 Cách áp dụng AI vào Marketing ngay hôm nay</h2>

      <h3>1. Tạo nội dung tự động</h3>
      <p>Sử dụng AI để viết bài blog, caption mạng xã hội, email marketing. Các công cụ như ChatGPT, Claude hay các platform chuyên biệt có thể tạo nội dung chất lượng cao chỉ trong vài giây.</p>

      <h3>2. Tạo hình ảnh và video AI</h3>
      <p>Thay vì thuê designer hay videographer đắt tiền, bạn có thể dùng AI để tạo ra những hình ảnh, thumbnail, thậm chí video chuyên nghiệp chỉ với mô tả bằng văn bản.</p>

      <h3>3. Chatbot chăm sóc khách hàng 24/7</h3>
      <p>Triển khai chatbot AI để tự động trả lời câu hỏi, tư vấn sản phẩm và hỗ trợ khách hàng mà không cần nhân viên trực 24/7.</p>

      <h3>4. Phân tích và dự đoán xu hướng</h3>
      <p>AI có thể phân tích hàng triệu điểm dữ liệu để dự đoán xu hướng thị trường, giúp bạn đón đầu cơ hội trước đối thủ.</p>

      <h3>5. Tối ưu quảng cáo tự động</h3>
      <p>Các nền tảng quảng cáo như Google, Facebook đều đã tích hợp AI để tự động tối ưu chi tiêu quảng cáo của bạn. Hãy tận dụng tối đa tính năng này.</p>

      <h2>Bắt đầu từ đâu?</h2>
      <p>Nếu bạn chưa biết bắt đầu từ đâu, hãy thử ngay bộ công cụ AI của chúng tôi tại nguyenduchoa.com. Chúng tôi cung cấp đầy đủ các công cụ từ tạo nội dung, hình ảnh, video đến quản lý kinh doanh — tất cả trong một hệ sinh thái thống nhất.</p>
    `,
  },
  {
    slug: "kiem-tien-online-voi-affiliate-marketing",
    title: "Kiếm tiền online bền vững với Affiliate Marketing — Hướng dẫn từ A đến Z",
    excerpt:
      "Affiliate Marketing là một trong những cách kiếm thu nhập thụ động hiệu quả nhất. Học cách bắt đầu, xây dựng và scale up thu nhập affiliate của bạn.",
    date: "2025-05-15",
    category: "Kinh doanh online",
    readTime: "12 phút",
    content: `
      <h2>Affiliate Marketing là gì?</h2>
      <p>Affiliate Marketing (Tiếp thị liên kết) là mô hình kiếm tiền online bằng cách giới thiệu sản phẩm/dịch vụ của người khác và nhận hoa hồng khi có người mua qua link của bạn.</p>

      <p>Đây là mô hình kinh doanh <strong>win-win</strong>: người bán có thêm khách hàng, bạn nhận được thu nhập mà không cần tạo sản phẩm riêng.</p>

      <h2>Tại sao chọn Affiliate Marketing?</h2>
      <ul>
        <li><strong>Không cần vốn:</strong> Bắt đầu hoàn toàn miễn phí</li>
        <li><strong>Thu nhập thụ động:</strong> Kiếm tiền ngay cả khi bạn đang ngủ</li>
        <li><strong>Làm việc từ xa:</strong> Chỉ cần laptop và internet</li>
        <li><strong>Không giới hạn thu nhập:</strong> Càng nhiều người mua, bạn càng nhiều tiền</li>
        <li><strong>Không cần lo kho hàng hay vận chuyển:</strong> Tất cả do nhà cung cấp lo</li>
      </ul>

      <h2>Bước 1: Chọn niche phù hợp</h2>
      <p>Niche (thị trường ngách) là lĩnh vực bạn sẽ tập trung. Để thành công, hãy chọn niche mà bạn:</p>
      <ul>
        <li>Có kiến thức hoặc đam mê</li>
        <li>Có đủ thị trường (người có nhu cầu)</li>
        <li>Có sản phẩm affiliate với hoa hồng tốt</li>
      </ul>

      <p>Các niche phổ biến và sinh lời cao: Sức khỏe & làm đẹp, Tài chính & đầu tư, Công nghệ & phần mềm, Kinh doanh online, Du lịch.</p>

      <h2>Bước 2: Xây dựng kênh nội dung</h2>
      <p>Bạn cần một "ngôi nhà" để thu hút và giữ chân khán giả:</p>
      <ul>
        <li><strong>Blog/Website:</strong> SEO tốt, thu nhập bền vững</li>
        <li><strong>YouTube:</strong> Lượng xem lớn, tỷ lệ chuyển đổi cao</li>
        <li><strong>TikTok/Reels:</strong> Viral nhanh, đặc biệt với người trẻ</li>
        <li><strong>Facebook Group:</strong> Cộng đồng trung thành, chuyển đổi tốt</li>
        <li><strong>Email List:</strong> Asset quý giá, kiểm soát hoàn toàn</li>
      </ul>

      <h2>Bước 3: Chọn chương trình affiliate</h2>
      <p>Không phải chương trình affiliate nào cũng như nhau. Hãy tìm những chương trình có:</p>
      <ul>
        <li>Hoa hồng cao (20-50%+ là tốt)</li>
        <li>Cookie tracking lâu dài (30-90 ngày)</li>
        <li>Sản phẩm chất lượng, uy tín</li>
        <li>Hỗ trợ marketing tốt</li>
        <li>Thanh toán đúng hạn, uy tín</li>
      </ul>

      <h2>Chiến lược scale up thu nhập</h2>
      <p>Khi đã có thu nhập ổn định, hãy scale up bằng cách:</p>
      <ol>
        <li>Tái đầu tư vào quảng cáo trả tiền</li>
        <li>Xây dựng email list và nurture campaigns</li>
        <li>Đa dạng hóa sang nhiều chương trình affiliate</li>
        <li>Tạo nội dung evergreen (không lỗi thời)</li>
        <li>Outsource những công việc không cần thiết phải tự làm</li>
      </ol>

      <h2>Tham gia Affiliate Program của chúng tôi</h2>
      <p>Nếu bạn đang tìm một chương trình affiliate đáng tin cậy, hãy xem xét chương trình của nguyenduchoa.com với hoa hồng <strong>20%</strong> và cookie tracking 90 ngày. Đăng ký tại <a href="https://member.nguyenduchoa.com/register">member.nguyenduchoa.com/register</a>.</p>
    `,
  },
  {
    slug: "cach-tao-video-ai-bang-flowveo",
    title: "Cách tạo video AI chuyên nghiệp bằng FlowVeo — Không cần kỹ năng video",
    excerpt:
      "FlowVeo giúp bạn tạo ra những video AI ấn tượng chỉ trong vài phút. Hướng dẫn từng bước từ ý tưởng đến video hoàn chỉnh sẵn sàng đăng lên mạng xã hội.",
    date: "2025-05-08",
    category: "Hướng dẫn công cụ",
    readTime: "6 phút",
    content: `
      <h2>FlowVeo là gì?</h2>
      <p>FlowVeo là nền tảng tạo video AI thế hệ mới, cho phép bạn tạo ra những video chuyên nghiệp chỉ bằng cách nhập mô tả văn bản. Không cần kỹ năng quay phim, không cần phần mềm chỉnh sửa phức tạp.</p>

      <h2>Những gì bạn có thể tạo với FlowVeo</h2>
      <ul>
        <li>Video quảng cáo sản phẩm</li>
        <li>Video giới thiệu doanh nghiệp</li>
        <li>Content TikTok và Reels</li>
        <li>Video hướng dẫn và tutorial</li>
        <li>Video giải thích (explainer videos)</li>
        <li>Thumbnail ấn tượng cho YouTube</li>
      </ul>

      <h2>Hướng dẫn từng bước</h2>

      <h3>Bước 1: Đăng nhập vào FlowVeo</h3>
      <p>Truy cập <a href="https://flowveo.nguyenduchoa.com">flowveo.nguyenduchoa.com</a> và đăng nhập bằng tài khoản nguyenduchoa.com của bạn.</p>

      <h3>Bước 2: Chọn template</h3>
      <p>FlowVeo có hơn 500 template được phân loại theo ngành nghề và mục đích sử dụng. Chọn template phù hợp với nhu cầu của bạn.</p>

      <h3>Bước 3: Nhập mô tả</h3>
      <p>Mô tả càng chi tiết, kết quả càng tốt. Hãy bao gồm:</p>
      <ul>
        <li>Sản phẩm/dịch vụ bạn muốn quảng cáo</li>
        <li>Đối tượng khán giả mục tiêu</li>
        <li>Tone giọng điệu (chuyên nghiệp, vui tươi, khẩn cấp...)</li>
        <li>Kết quả mong muốn (mua hàng, đăng ký, nhận thông tin...)</li>
      </ul>

      <h3>Bước 4: Tùy chỉnh</h3>
      <p>AI sẽ tạo ra video đầu tiên trong vài phút. Bạn có thể:</p>
      <ul>
        <li>Thay đổi màu sắc và font chữ</li>
        <li>Thêm logo và branding</li>
        <li>Điều chỉnh âm nhạc nền</li>
        <li>Chỉnh sửa văn bản overlay</li>
      </ul>

      <h3>Bước 5: Export và chia sẻ</h3>
      <p>Xuất video ở nhiều định dạng và độ phân giải khác nhau, tối ưu cho từng nền tảng.</p>

      <h2>Tips để có video chất lượng cao nhất</h2>
      <ol>
        <li>Viết script rõ ràng trước khi nhập vào AI</li>
        <li>Sử dụng từ khóa cụ thể và hình ảnh minh họa</li>
        <li>Thử nhiều template khác nhau và chọn cái tốt nhất</li>
        <li>Luôn xem lại và chỉnh sửa trước khi đăng</li>
        <li>A/B test nhiều phiên bản để tìm ra phiên bản hiệu quả nhất</li>
      </ol>
    `,
  },
  {
    slug: "xay-dung-personal-brand-tu-zero",
    title: "Xây dựng Personal Brand từ Zero — Bí quyết trở thành chuyên gia được công nhận",
    excerpt:
      "Personal brand không chỉ dành cho người nổi tiếng. Bất kỳ ai cũng có thể xây dựng thương hiệu cá nhân mạnh mẽ và kiếm tiền từ kiến thức của mình.",
    date: "2025-04-28",
    category: "Kinh doanh online",
    readTime: "10 phút",
    content: `
      <h2>Personal Brand là gì và tại sao quan trọng?</h2>
      <p>Personal brand là cách người khác nhận biết và ghi nhớ bạn. Đó là sự kết hợp giữa chuyên môn, cá tính và giá trị mà bạn mang lại cho cộng đồng.</p>

      <p>Trong thời đại số, personal brand là tài sản quý giá nhất của bạn. Nó giúp bạn:</p>
      <ul>
        <li>Thu hút cơ hội việc làm và hợp tác</li>
        <li>Bán sản phẩm/dịch vụ dễ dàng hơn</li>
        <li>Tăng giá trị chuyên môn và thu nhập</li>
        <li>Tạo ảnh hưởng và impact trong ngành</li>
      </ul>

      <h2>Bước 1: Xác định Unique Value Proposition</h2>
      <p>Câu hỏi quan trọng nhất: <strong>Bạn giúp ai, giải quyết vấn đề gì và bằng cách nào?</strong></p>
      <p>Ví dụ tốt: "Tôi giúp các bà mẹ bỉm sữa kiếm thêm thu nhập online bằng cách dạy họ bán hàng trên TikTok Shop."</p>
      <p>Ví dụ mơ hồ: "Tôi là chuyên gia marketing." — Quá chung chung, không ai nhớ!</p>

      <h2>Bước 2: Chọn nền tảng phù hợp</h2>
      <p>Đừng cố gắng có mặt khắp nơi ngay từ đầu. Hãy chọn 1-2 nền tảng và làm thật tốt:</p>
      <ul>
        <li><strong>LinkedIn:</strong> B2B, professionals, tìm việc, hợp tác kinh doanh</li>
        <li><strong>Facebook:</strong> Cộng đồng, bán hàng nội địa, người trung niên</li>
        <li><strong>TikTok:</strong> Viral nhanh, Gen Z và Millennials, nội dung giải trí</li>
        <li><strong>YouTube:</strong> Nội dung chuyên sâu, SEO lâu dài, thu nhập ổn định</li>
        <li><strong>Instagram:</strong> Visual content, lifestyle, thời trang, ẩm thực</li>
      </ul>

      <h2>Bước 3: Tạo nội dung nhất quán</h2>
      <p>Nội dung là cách bạn chứng minh chuyên môn và xây dựng lòng tin. Hãy:</p>
      <ul>
        <li>Đăng ít nhất 3-5 lần/tuần</li>
        <li>Chia sẻ kiến thức thực tế, không chỉ lý thuyết</li>
        <li>Kể chuyện cá nhân, thất bại và bài học</li>
        <li>Duy trì tone giọng nhất quán</li>
      </ul>

      <h2>Bước 4: Xây dựng email list</h2>
      <p>Mạng xã hội có thể thay đổi thuật toán hay thậm chí đóng cửa. Email list là tài sản thuộc về bạn vĩnh viễn. Hãy xây dựng nó ngay từ đầu.</p>

      <h2>Bước 5: Monetize personal brand</h2>
      <p>Khi đã có audience, có nhiều cách kiếm tiền:</p>
      <ul>
        <li><strong>Khóa học online:</strong> Thu nhập cao, scale vô giới hạn</li>
        <li><strong>Coaching 1-1:</strong> Thu nhập cao nhất, giới hạn thời gian</li>
        <li><strong>Affiliate marketing:</strong> Thu nhập thụ động</li>
        <li><strong>Sản phẩm digital:</strong> Ebook, template, preset</li>
        <li><strong>Sponsorship:</strong> Thương hiệu trả tiền cho bạn quảng cáo</li>
      </ul>

      <h2>Lỗi thường gặp khi xây dựng personal brand</h2>
      <ol>
        <li>Cố gắng làm hài lòng tất cả mọi người → Hãy có quan điểm riêng!</li>
        <li>Không nhất quán trong việc đăng bài → Consistency beats perfection!</li>
        <li>Chỉ tập trung vào số lượng follower → Quality over quantity!</li>
        <li>Không đầu tư vào chất lượng nội dung → Đầu tư vào AI tools để tạo nội dung tốt hơn!</li>
      </ol>
    `,
  },
  {
    slug: "so-sanh-cong-cu-ai-marketing-2025",
    title: "So sánh 10 công cụ AI Marketing tốt nhất 2025 — Review chi tiết từ người dùng thực tế",
    excerpt:
      "Thị trường AI Marketing đang bùng nổ với hàng trăm công cụ mới. Chúng tôi đã test và so sánh 10 công cụ tốt nhất để giúp bạn chọn đúng.",
    date: "2025-04-15",
    category: "AI Marketing",
    readTime: "15 phút",
    content: `
      <h2>Tiêu chí đánh giá</h2>
      <p>Chúng tôi đánh giá mỗi công cụ dựa trên 5 tiêu chí: Tính năng, Dễ sử dụng, Giá cả, Chất lượng output và Hỗ trợ khách hàng.</p>

      <h2>1. Công cụ tạo nội dung văn bản</h2>

      <h3>ChatGPT (OpenAI)</h3>
      <p><strong>Điểm mạnh:</strong> Đa năng, hiểu ngữ cảnh tốt, cộng đồng lớn<br/>
      <strong>Điểm yếu:</strong> Đôi khi thông tin lỗi thời, cần prompt tốt<br/>
      <strong>Giá:</strong> $20/tháng cho Plus<br/>
      <strong>Phù hợp:</strong> Tất cả loại content</p>

      <h3>Claude (Anthropic)</h3>
      <p><strong>Điểm mạnh:</strong> Văn bản tự nhiên hơn, ít lỗi ngữ pháp, an toàn<br/>
      <strong>Điểm yếu:</strong> Context window giới hạn ở plan miễn phí<br/>
      <strong>Giá:</strong> $20/tháng cho Pro<br/>
      <strong>Phù hợp:</strong> Long-form content, technical writing</p>

      <h2>2. Công cụ tạo hình ảnh AI</h2>

      <h3>Midjourney</h3>
      <p><strong>Điểm mạnh:</strong> Chất lượng hình ảnh tuyệt vời, aesthetic cao<br/>
      <strong>Điểm yếu:</strong> Chỉ có trên Discord, đắt<br/>
      <strong>Giá:</strong> $10-120/tháng<br/>
      <strong>Phù hợp:</strong> Artist, designer, content creator cao cấp</p>

      <h3>AI Studio (nguyenduchoa.com)</h3>
      <p><strong>Điểm mạnh:</strong> Giao diện tiếng Việt, tích hợp với ecosystem, giá hợp lý<br/>
      <strong>Điểm yếu:</strong> Mới ra mắt, đang phát triển thêm tính năng<br/>
      <strong>Giá:</strong> $9/tháng<br/>
      <strong>Phù hợp:</strong> Marketer Việt Nam muốn tạo visual content nhanh</p>

      <h2>3. Công cụ tạo video AI</h2>

      <h3>FlowVeo (nguyenduchoa.com)</h3>
      <p><strong>Điểm mạnh:</strong> Tích hợp hoàn chỉnh, hỗ trợ tiếng Việt, giá tốt<br/>
      <strong>Điểm yếu:</strong> Đang bổ sung thêm template<br/>
      <strong>Giá:</strong> $9/tháng<br/>
      <strong>Phù hợp:</strong> Video marketer, content creator, doanh nghiệp SME</p>

      <h3>Runway ML</h3>
      <p><strong>Điểm mạnh:</strong> Công nghệ tiên tiến, nhiều hiệu ứng<br/>
      <strong>Điểm yếu:</strong> Đắt, không có bản tiếng Việt<br/>
      <strong>Giá:</strong> $15-95/tháng<br/>
      <strong>Phù hợp:</strong> Professional video editor, film maker</p>

      <h2>Kết luận: Công cụ nào phù hợp với bạn?</h2>
      <p>Nếu bạn là marketer hay doanh nghiệp Việt Nam đang tìm kiếm bộ công cụ AI toàn diện với giá hợp lý:</p>
      <ul>
        <li>FlowVeo cho video content</li>
        <li>AI Studio cho hình ảnh</li>
        <li>ThansOhoc cho automation</li>
        <li>Content AI Writer cho văn bản</li>
      </ul>
      <p>Tất cả trong hệ sinh thái nguyenduchoa.com với giá chỉ từ $9/tháng/công cụ.</p>
    `,
  },
  {
    slug: "chien-luoc-content-marketing-2025",
    title: "Chiến lược Content Marketing 2025: Từ Zero đến 10.000 khách hàng tiềm năng",
    excerpt:
      "Content Marketing vẫn là vũ khí mạnh nhất để xây dựng thương hiệu và thu hút khách hàng. Nhưng năm 2025, cuộc chơi đã thay đổi — AI đang làm chủ.",
    date: "2025-04-02",
    category: "AI Marketing",
    readTime: "9 phút",
    content: `
      <h2>Content Marketing 2025: Gì đã thay đổi?</h2>
      <p>Nếu bạn nghĩ content marketing chỉ là viết blog và đăng Facebook, bạn đang tụt hậu so với đối thủ. Năm 2025, content marketing đã tiến hóa với:</p>
      <ul>
        <li>AI-generated content ở khắp nơi → Cần human touch hơn bao giờ hết</li>
        <li>Short-form video thống trị → TikTok, Reels, YouTube Shorts</li>
        <li>Nội dung personalized ở quy mô lớn</li>
        <li>Voice search và AI answer engines</li>
        <li>Interactive content (quiz, poll, calculator)</li>
      </ul>

      <h2>Framework AIDA trong thời đại AI</h2>

      <h3>A - Attention (Thu hút chú ý)</h3>
      <p>Bạn có <strong>3 giây</strong> để thu hút người xem trước khi họ scroll qua. Hãy dùng:</p>
      <ul>
        <li>Hook mạnh ở đầu video/bài viết</li>
        <li>Thumbnail ấn tượng (AI Studio giúp tạo điều này)</li>
        <li>Tiêu đề gây tò mò hoặc hứa hẹn lợi ích rõ ràng</li>
      </ul>

      <h3>I - Interest (Tạo hứng thú)</h3>
      <p>Sau khi có attention, hãy duy trì hứng thú bằng:</p>
      <ul>
        <li>Kể câu chuyện thực tế</li>
        <li>Chia sẻ số liệu và bằng chứng cụ thể</li>
        <li>Đặt câu hỏi tương tác</li>
      </ul>

      <h3>D - Desire (Tạo mong muốn)</h3>
      <p>Cho người xem thấy cuộc sống của họ sẽ tốt hơn như thế nào khi có sản phẩm/dịch vụ của bạn:</p>
      <ul>
        <li>Case study và success story</li>
        <li>Before & after</li>
        <li>Social proof (review, testimonial)</li>
      </ul>

      <h3>A - Action (Kêu gọi hành động)</h3>
      <p>CTA rõ ràng, cụ thể và dễ thực hiện:</p>
      <ul>
        <li>"Click link trong bio để đăng ký miễn phí"</li>
        <li>"Comment XIN để nhận tài liệu miễn phí"</li>
        <li>"Nhắn tin cho tôi để được tư vấn 1-1"</li>
      </ul>

      <h2>Content Calendar cho 30 ngày đầu tiên</h2>
      <p>Tuần 1: Giới thiệu bản thân và vấn đề bạn giải quyết<br/>
      Tuần 2: Chia sẻ kiến thức miễn phí, câu hỏi thường gặp<br/>
      Tuần 3: Case study và success story<br/>
      Tuần 4: CTA và soft sell</p>

      <h2>Đo lường hiệu quả</h2>
      <p>Các chỉ số cần theo dõi:</p>
      <ul>
        <li><strong>Reach:</strong> Bao nhiêu người thấy nội dung của bạn</li>
        <li><strong>Engagement rate:</strong> Like, comment, share/Reach</li>
        <li><strong>Click-through rate (CTR):</strong> Tỷ lệ click vào link</li>
        <li><strong>Conversion rate:</strong> Tỷ lệ chuyển đổi thành lead/khách hàng</li>
        <li><strong>Cost per acquisition (CPA):</strong> Chi phí để có một khách hàng mới</li>
      </ul>
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): Post[] {
  return posts
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}

export const categories = ["Tất cả", "AI Marketing", "Kinh doanh online", "Hướng dẫn công cụ"];
