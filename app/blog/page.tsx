import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogFilter from "./BlogFilter";
import { posts, categories } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — AI Marketing & Kinh doanh online | nguyenduchoa.com",
  description:
    "Bài viết chuyên sâu về AI Marketing, kinh doanh online, và cách xây dựng thu nhập thụ động. Cập nhật kiến thức mới nhất từ nguyenduchoa.com.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="py-16 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
                📝 Blog
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                AI Marketing &{" "}
                <span className="gradient-text">Kinh doanh online</span>
              </h1>
              <p className="text-white/50 text-lg">
                Kiến thức thực chiến về AI, marketing số và cách xây dựng thu nhập bền vững.
              </p>
            </div>
          </div>
        </section>

        {/* Blog listing with filter */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogFilter posts={posts} categories={categories} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
