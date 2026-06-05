import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.tagline} | nguyenduchoa.com`,
    description: product.description,
  };
}

const trustBadges = [
  { icon: "🔒", text: "Thanh toán bảo mật SSL" },
  { icon: "↩️", text: "Hoàn tiền 15 ngày" },
  { icon: "⚡", text: "Truy cập ngay lập tức" },
  { icon: "🎧", text: "Hỗ trợ 24/7" },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getRelatedProducts(product.slug, 3);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-sm text-white/40">
            <Link href="/shop" className="hover:text-white transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-white/60">{product.name}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Product Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-6xl">{product.icon}</span>
                  <div>
                    <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/50">
                      {product.category}
                    </span>
                    {product.type === "subscription" && (
                      <span className="ml-2 text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                        15 ngày thử miễn phí
                      </span>
                    )}
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                  {product.name}
                </h1>
                <p className="text-xl text-purple-300 mb-5 font-medium">{product.tagline}</p>
                <p className="text-white/60 leading-relaxed mb-8">{product.longDescription}</p>

                {/* Feature List */}
                <div className="mb-8">
                  <h3 className="text-white font-semibold mb-4">Tính năng bao gồm:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-white/60">
                        <span className="text-purple-400 mt-0.5 shrink-0">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4">
                  {trustBadges.map((badge) => (
                    <div key={badge.text} className="flex items-center gap-2 text-xs text-white/40">
                      <span>{badge.icon}</span>
                      <span>{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Purchase Card */}
              <div className="lg:sticky lg:top-24">
                <div
                  className="gradient-border rounded-2xl p-8"
                  style={{ background: "var(--card-bg)" }}
                >
                  {/* Price */}
                  <div className="mb-6">
                    {product.originalPrice && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white/30 line-through text-lg">
                          ${product.originalPrice}
                          {product.type !== "course" && "/tháng"}
                        </span>
                        <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                          Tiết kiệm {Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </span>
                      </div>
                    )}
                    <div className="text-5xl font-bold text-white">
                      ${product.price}
                      {product.type !== "course" && (
                        <span className="text-xl text-white/40 font-normal">/tháng</span>
                      )}
                    </div>
                    {product.type === "course" && (
                      <div className="text-white/50 text-sm mt-1">Thanh toán một lần, truy cập trọn đời</div>
                    )}
                    {product.type === "subscription" && (
                      <div className="text-white/50 text-sm mt-1">Hủy bất kỳ lúc nào</div>
                    )}
                  </div>

                  {/* CTA */}
                  <a
                    href={product.checkoutUrl}
                    className="gradient-btn text-white font-bold py-4 px-8 rounded-xl w-full text-center block text-lg mb-4"
                  >
                    Mua ngay →
                  </a>

                  {product.type === "subscription" && (
                    <a
                      href={product.url ?? product.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center border border-white/10 hover:border-white/30 text-white/60 hover:text-white py-3 px-8 rounded-xl transition-all text-sm mb-4"
                    >
                      Xem demo trực tiếp ↗
                    </a>
                  )}

                  {product.type === "subscription" && (
                    <div className="text-center text-white/40 text-xs mb-6">
                      ✓ Dùng thử miễn phí 15 ngày — Không cần thẻ tín dụng
                    </div>
                  )}

                  <div className="border-t border-white/10 pt-5 space-y-3">
                    {trustBadges.map((badge) => (
                      <div key={badge.text} className="flex items-center gap-3 text-sm text-white/40">
                        <span>{badge.icon}</span>
                        <span>{badge.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Affiliate upsell */}
                  <div className="mt-6 pt-5 border-t border-white/10 text-center">
                    <p className="text-white/30 text-xs mb-2">
                      Chia sẻ và kiếm hoa hồng 20%
                    </p>
                    <Link
                      href="/affiliate"
                      className="text-purple-400 hover:text-purple-300 text-xs transition-colors"
                    >
                      Tham gia chương trình Affiliate →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="py-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-white mb-8">
                Sản phẩm <span className="gradient-text">liên quan</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/shop/${rp.slug}`}
                    className="gradient-border rounded-2xl p-6 card-hover block"
                    style={{ background: "var(--card-bg)" }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-3xl">{rp.icon}</span>
                      <div className="text-right">
                        {rp.originalPrice && (
                          <div className="text-white/30 text-xs line-through">
                            ${rp.originalPrice}
                          </div>
                        )}
                        <span className="text-white font-bold">
                          ${rp.price}
                          {rp.type !== "course" && (
                            <span className="text-white/40 text-sm font-normal">/tháng</span>
                          )}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-white font-bold mb-2">{rp.name}</h3>
                    <p className="text-white/50 text-sm line-clamp-2">{rp.description}</p>
                    <div className="mt-4 text-purple-400 text-sm font-medium">
                      Xem chi tiết →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
