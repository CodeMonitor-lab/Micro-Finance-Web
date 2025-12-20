"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          MicroFinance
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          <Link href="/profile" className="hover:text-blue-600">Profile</Link>

          <Link
            href="/register"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Register
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col gap-4 px-4 py-4 text-sm font-medium">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2 text-center bg-blue-600 text-white rounded-md"
            >
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
