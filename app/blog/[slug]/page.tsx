import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, getRelatedPosts, posts } from "@/lib/posts";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | nguyenduchoa.com`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category, 3);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-16 border-b border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4">
              <Link
                href="/blog"
                className="text-white/40 hover:text-white text-sm transition-colors"
              >
                ← Quay lại Blog
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {post.category}
              </span>
              <span className="text-white/30 text-sm">{post.readTime} đọc</span>
              <span className="text-white/30 text-sm">
                {new Date(post.date).toLocaleDateString("vi-VN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">{post.excerpt}</p>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <article className="lg:col-span-2">
                <div
                  className="prose prose-invert max-w-none"
                  style={{
                    color: "rgba(240,240,245,0.7)",
                    lineHeight: "1.8",
                  }}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <style>{`
                  article h2 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                  }
                  article h3 {
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: rgba(255,255,255,0.9);
                    margin-top: 1.8rem;
                    margin-bottom: 0.75rem;
                  }
                  article p {
                    margin-bottom: 1rem;
                  }
                  article ul, article ol {
                    padding-left: 1.5rem;
                    margin-bottom: 1rem;
                  }
                  article li {
                    margin-bottom: 0.4rem;
                  }
                  article a {
                    color: #a78bfa;
                    text-decoration: underline;
                  }
                  article strong {
                    color: rgba(255,255,255,0.9);
                    font-weight: 600;
                  }
                `}</style>

                {/* CTA at bottom of article */}
                <div
                  className="mt-12 gradient-border rounded-2xl p-8 text-center"
                  style={{ background: "var(--card-bg)" }}
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    Sẵn sàng áp dụng ngay?
                  </h3>
                  <p className="text-white/50 text-sm mb-5">
                    Bắt đầu dùng thử miễn phí 15 ngày — không cần thẻ tín dụng.
                  </p>
                  <a
                    href="https://member.nguyenduchoa.com/register"
                    className="gradient-btn text-white font-semibold px-6 py-3 rounded-xl inline-block"
                  >
                    Dùng thử miễn phí →
                  </a>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* TOC */}
                <div
                  className="gradient-border rounded-xl p-5 sticky top-24"
                  style={{ background: "var(--card-bg)" }}
                >
                  <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                    Mục lục
                  </h4>
                  <nav>
                    <ul className="space-y-2">
                      {post.content
                        .match(/<h2>(.*?)<\/h2>/g)
                        ?.map((h, i) => {
                          const text = h.replace(/<\/?h2>/g, "");
                          return (
                            <li key={i}>
                              <span className="text-white/50 hover:text-purple-300 text-sm cursor-pointer transition-colors block py-1 border-l-2 border-transparent hover:border-purple-500 pl-3">
                                {text}
                              </span>
                            </li>
                          );
                        })}
                    </ul>
                  </nav>

                  <div className="mt-6 pt-5 border-t border-white/10">
                    <a
                      href="https://member.nguyenduchoa.com/register"
                      className="gradient-btn text-white text-sm font-medium px-4 py-2.5 rounded-lg w-full text-center block"
                    >
                      Dùng thử miễn phí 15 ngày
                    </a>
                  </div>
                </div>

                {/* Related posts */}
                {related.length > 0 && (
                  <div
                    className="gradient-border rounded-xl p-5"
                    style={{ background: "var(--card-bg)" }}
                  >
                    <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                      Bài viết liên quan
                    </h4>
                    <div className="space-y-4">
                      {related.map((rp) => (
                        <Link
                          key={rp.slug}
                          href={`/blog/${rp.slug}`}
                          className="block group"
                        >
                          <div className="text-white/70 group-hover:text-white text-sm font-medium leading-snug transition-colors">
                            {rp.title}
                          </div>
                          <div className="text-white/30 text-xs mt-1">{rp.readTime} đọc</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Newsletter */}
                <div
                  className="gradient-border rounded-xl p-5"
                  style={{ background: "var(--card-bg)" }}
                >
                  <h4 className="text-white font-semibold text-sm mb-2">
                    📬 Nhận bài viết mới nhất
                  </h4>
                  <p className="text-white/50 text-xs mb-4">
                    Subscribe để nhận ngay bài viết mới về AI Marketing mỗi tuần.
                  </p>
                  <a
                    href="https://member.nguyenduchoa.com/register"
                    className="border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 text-sm font-medium px-4 py-2.5 rounded-lg w-full text-center block transition-colors"
                  >
                    Đăng ký nhận tin
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
