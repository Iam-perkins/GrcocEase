"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        <>
          {/* Header */}
          <header className="sticky top-0 z-50 bg-green-600 text-white shadow-lg">
            <div className="container mx-auto flex items-center justify-between p-4">
              {/* Logo */}
              <a href="/" className="text-3xl font-bold text-yellow-400">
                GrocEase 🇨🇲
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex gap-8 text-lg font-medium">
                <a href="/" className={pathname === "/" ? "text-yellow-400 font-bold" : "hover:text-yellow-400 transition"}>
                  Home
                </a>
                <a href="/shop" className={pathname === "/shop" ? "text-yellow-400 font-bold" : "hover:text-yellow-400 transition"}>
                  Shop
                </a>
              
                <a href="/categories" className={pathname === "/categories" ? "text-yellow-400 font-bold" : "hover:text-yellow-400 transition"}>
                  Categories
                </a>
                <a href="/about" className={pathname === "/about" ? "text-yellow-400 font-bold" : "hover:text-yellow-400 transition"}>
                  About Us
                </a>
                <a href="/contact" className={pathname === "/contact" ? "text-yellow-400 font-bold" : "hover:text-yellow-400 transition"}>
                  Contact
                </a>
              </nav>

              {/* Cart & Profile */}
              <div className="hidden md:flex items-center gap-6">
                <a href="/cart" className="text-yellow-400 text-3xl hover:scale-110 transition">🛒</a>
                <a href="/account" className="text-yellow-400 text-4xl font-bold hover:scale-110 transition">
                  👤
                </a>
              </div>

              {/* Mobile Menu Icon */}
              <button
                className="md:hidden text-yellow-400 text-3xl"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                ☰
              </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            {menuOpen && (
              <div className="md:hidden bg-green-500 text-white flex flex-col text-center p-4 space-y-4">
                <a href="/" className={pathname === "/" ? "text-yellow-400 font-bold" : "hover:text-yellow-400"} onClick={() => setMenuOpen(false)}>Home</a>
                <a href="/shop" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Shop</a>
                <a href="/deals" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Deals</a>
                <a href="/categories" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Categories</a>
                <a href="/about" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>About Us</a>
                <a href="/contact" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Contact</a>
                <a href="/cart" className="text-yellow-400 text-3xl" onClick={() => setMenuOpen(false)}>🛒</a>
                <a href="/account" className="text-yellow-400 text-4xl font-bold" onClick={() => setMenuOpen(false)}>👤</a>
              </div>
            )}
          </header>

          {/* Main Content */}
          <main className="min-h-screen">{children}</main>

          {/* Footer */}
          <footer className="bg-green-600 text-white py-10 mt-8">
            <div className="container mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left">
              {/* Column 1: Store Info */}
              <div>
                <h3 className="text-xl font-semibold text-yellow-400">About GrocEase</h3>
                <p className="text-sm text-gray-300">
                  Cameroon’s #1 premium online grocery store. Order fresh, high-quality food and essentials, delivered fast.
                </p>
              </div>

              {/* Column 2: Quick Links */}
              <div>
                <h4 className="text-xl font-semibold text-yellow-400">Quick Links</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li><a href="/shop" className="hover:text-yellow-400">Shop Now</a></li>
                  <li><a href="/categories" className="hover:text-yellow-400">Browse Categories</a></li>
                  <li><a href="/deals" className="hover:text-yellow-400">Best Deals</a></li>
                  <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
                  <li><a href="/contact" className="hover:text-yellow-400">Customer Support</a></li>
                </ul>
              </div>

              {/* Column 3: Contact Info */}
              <div>
                <h4 className="text-xl font-semibold text-yellow-400">Contact Us</h4>
                <p className="text-sm text-gray-300">📍 Yaoundé, Cameroon</p>
                <p className="text-sm text-gray-300">📞 +237 6XX-XXX-XXX</p>
                <p className="text-sm text-gray-300">✉ support@freshmart.cm</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center mt-6 text-gray-400 text-sm">
              Follow us on:
              <a href="#" className="ml-2 text-yellow-400 hover:underline">Facebook</a> |
              <a href="#" className="ml-2 text-yellow-400 hover:underline">Instagram</a> |
              <a href="#" className="ml-2 text-yellow-400 hover:underline">Twitter</a>
            </div>

            {/* Copyright */}
            <div className="text-center text-xs text-gray-400 mt-4">
              © {new Date().getFullYear()} GrocEase Cameroon. All rights reserved.
            </div>
          </footer>
        </>
      </body>
    </html>
  );
}
