'use client'; // If you're using Next.js 13+ with app directory

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, User, ShoppingBag, Heart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Browse Items', path: '/browse' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#A67C52]">
            RentKar
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for items..."
                className="pl-10 pr-4 py-2 rounded-full border border-[#D2B48C] focus:border-[#A67C52] w-64"
              />
              <Search className="absolute left-3 top-2.5 text-[#5D4037] h-5 w-5" />
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-[#F5F1E9]">
                <Heart className="h-5 w-5 text-[#5D4037]" />
              </button>
              <button className="p-2 rounded-full hover:bg-[#F5F1E9]">
                <ShoppingBag className="h-5 w-5 text-[#5D4037]" />
              </button>
              <Link href="/login">
                <div className="flex items-center space-x-2 bg-[#A67C52] text-white px-4 py-2 rounded-full hover:bg-[#5D4037]">
                  <User className="h-4 w-4" />
                  <span>Sign In</span>
                </div>
              </Link>
            </div>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-[#5D4037]" /> : <Menu className="h-6 w-6 text-[#5D4037]" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#D2B48C] py-4 px-4 shadow-lg">
          <div className="flex items-center mb-4 relative">
            <input
              type="text"
              placeholder="Search for items..."
              className="pl-10 pr-4 py-2 rounded-full border border-[#D2B48C] focus:border-[#A67C52] w-full"
            />
            <Search className="absolute left-3 top-2.5 text-[#5D4037] h-5 w-5" />
          </div>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} className="block py-2 px-4 rounded hover:bg-[#F5F1E9]">
                {link.name}
              </Link>
            ))}
            <div className="border-t border-[#D2B48C] pt-3 mt-2">
              <Link href="/login" className="block py-2 px-4 text-[#A67C52] font-semibold">
                Sign In / Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
