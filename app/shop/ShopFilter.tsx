"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/products";

type Props = {
  products: Product[];
  categories: string[];
};

export default function ShopFilter({ products, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filtered =
    activeCategory === "Tất cả"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeCategory === cat
                ? "gradient-btn text-white"
                : "border border-white/10 text-white/60 hover:text-white hover:border-white/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <Link
            key={product.slug}
            href={`/shop/${product.slug}`}
            className="gradient-border rounded-2xl p-6 card-hover block group"
            style={{ background: "var(--card-bg)" }}
          >
            {/* Badge */}
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">{product.icon}</span>
              <div className="text-right">
                {product.originalPrice && (
                  <div className="text-white/30 text-xs line-through">
                    ${product.originalPrice}
                    {product.type !== "course" && "/tháng"}
                  </div>
                )}
                <div className="text-white font-bold text-xl">
                  ${product.price}
                  {product.type !== "course" && (
                    <span className="text-white/40 text-sm font-normal">/tháng</span>
                  )}
                </div>
                {product.originalPrice && (
                  <div className="text-green-400 text-xs font-medium">
                    Tiết kiệm {Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </div>
                )}
              </div>
            </div>

            <div className="mb-1 flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/50">
                {product.category}
              </span>
              {product.type === "subscription" && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                  15 ngày thử miễn phí
                </span>
              )}
            </div>

            <h2 className="text-white font-bold text-lg mt-3 mb-2 group-hover:gradient-text transition-all">
              {product.name}
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
              {product.description}
            </p>

            {/* Feature preview */}
            <ul className="space-y-1 mb-5">
              {product.features.slice(0, 3).map((feature) => (
                <li key={feature} className="text-white/40 text-xs flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  {feature}
                </li>
              ))}
              {product.features.length > 3 && (
                <li className="text-white/30 text-xs">
                  +{product.features.length - 3} tính năng khác...
                </li>
              )}
            </ul>

            <div className="gradient-btn text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center">
              Xem chi tiết →
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
