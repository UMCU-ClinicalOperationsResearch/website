"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold gradient-text">
            Clinical Operations Research
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <Link href="/" className="px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition">Home</Link>
            <Link href="/research" className="px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition">Research</Link>
            <Link href="/team" className="px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition">Team</Link>
            <Link href="/publications" className="px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition">Publications</Link>
            <Link href="/videos" className="px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition">Videos</Link>
            <Link href="/blog" className="px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition">Blog</Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            <Link href="/" className="block py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition">Home</Link>
            <Link href="/research" className="block py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition">Research</Link>
            <Link href="/team" className="block py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition">Team</Link>
            <Link href="/publications" className="block py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition">Publications</Link>
            <Link href="/videos" className="block py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition">Videos</Link>
            <Link href="/blog" className="block py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition">Blog</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
