"use client";

import { useState } from "react";
import Link from "next/link";
import { Post } from "@/lib/posts";

type Props = {
  posts: Post[];
  categories: string[];
};

export default function BlogFilter({ posts, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filtered =
    activeCategory === "Tất cả"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

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

      {/* Post grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="gradient-border rounded-2xl overflow-hidden card-hover block"
            style={{ background: "var(--card-bg)" }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {post.category}
                </span>
                <span className="text-white/30 text-xs">{post.readTime} đọc</span>
              </div>
              <h2 className="text-white font-bold text-lg mb-3 leading-snug line-clamp-2">
                {post.title}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed line-clamp-3 mb-5">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white/30 text-xs">
                  {new Date(post.date).toLocaleDateString("vi-VN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="text-purple-400 text-sm font-medium">
                  Đọc thêm →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-white/40">
          Chưa có bài viết trong danh mục này.
        </div>
      )}
    </>
  );
}
