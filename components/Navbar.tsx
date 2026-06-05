"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-btn flex items-center justify-center text-white font-bold text-sm">
              N
            </div>
            <span className="font-semibold text-white text-sm hidden sm:block">
              nguyenduchoa<span className="gradient-text">.com</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/shop" className="text-sm text-white/60 hover:text-white transition-colors">
              Shop
            </Link>
            <Link href="/blog" className="text-sm text-white/60 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/affiliate" className="text-sm text-white/60 hover:text-white transition-colors">
              Affiliate
            </Link>
            <Link href="#gia-ca" className="text-sm text-white/60 hover:text-white transition-colors">
              Giá cả
            </Link>
            <Link href="#lien-he" className="text-sm text-white/60 hover:text-white transition-colors">
              Liên hệ
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://member.nguyenduchoa.com/login"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Đăng nhập
            </a>
            <a
              href="https://member.nguyenduchoa.com/register"
              className="gradient-btn text-white text-sm font-medium px-4 py-2 rounded-lg"
            >
              Bắt đầu miễn phí
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/70 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/5 bg-black/60 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-3">
            <Link href="/shop" onClick={() => setIsOpen(false)} className="block text-sm text-white/70 hover:text-white py-2">
              Shop
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="block text-sm text-white/70 hover:text-white py-2">
              Blog
            </Link>
            <Link href="/affiliate" onClick={() => setIsOpen(false)} className="block text-sm text-white/70 hover:text-white py-2">
              Affiliate
            </Link>
            <Link href="#gia-ca" onClick={() => setIsOpen(false)} className="block text-sm text-white/70 hover:text-white py-2">
              Giá cả
            </Link>
            <Link href="#lien-he" onClick={() => setIsOpen(false)} className="block text-sm text-white/70 hover:text-white py-2">
              Liên hệ
            </Link>
            <div className="pt-2 border-t border-white/5 flex flex-col gap-2">
              <a href="https://member.nguyenduchoa.com/login" className="text-sm text-white/70 hover:text-white py-2">
                Đăng nhập
              </a>
              <a
                href="https://member.nguyenduchoa.com/register"
                className="gradient-btn text-white text-sm font-medium px-4 py-2.5 rounded-lg text-center"
              >
                Bắt đầu miễn phí
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
