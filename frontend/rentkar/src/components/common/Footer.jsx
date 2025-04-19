import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#3E2723] text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#D2B48C]">RentKar</h3>
            <p className="mb-4 text-gray-300">
              A community-driven platform for sharing everyday items. Borrow what you need, share what you have.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#D2B48C] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#D2B48C] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#D2B48C] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D2B48C]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/browse">
                  <span className="hover:text-[#D2B48C] transition-colors">Browse Items</span>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works">
                  <span className="hover:text-[#D2B48C] transition-colors">How It Works</span>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <span className="hover:text-[#D2B48C] transition-colors">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-[#D2B48C] transition-colors">Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <span className="hover:text-[#D2B48C] transition-colors">FAQ</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D2B48C]">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/tools-diy">
                  <span className="hover:text-[#D2B48C] transition-colors">Tools & DIY</span>
                </Link>
              </li>
              <li>
                <Link href="/category/electronics">
                  <span className="hover:text-[#D2B48C] transition-colors">Electronics</span>
                </Link>
              </li>
              <li>
                <Link href="/category/outdoor-garden">
                  <span className="hover:text-[#D2B48C] transition-colors">Outdoor & Garden</span>
                </Link>
              </li>
              <li>
                <Link href="/category/party-events">
                  <span className="hover:text-[#D2B48C] transition-colors">Party & Events</span>
                </Link>
              </li>
              <li>
                <Link href="/category/sports-recreation">
                  <span className="hover:text-[#D2B48C] transition-colors">Sports & Recreation</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D2B48C]">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-[#D2B48C]" />
                <span>123 Sharing Street, Community City, CS 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#D2B48C]" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#D2B48C]" />
                <span>info@rentkar.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} RentKar. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link href="/terms">
              <span className="hover:text-[#D2B48C] transition-colors">Terms of Service</span>
            </Link>
            <Link href="/privacy">
              <span className="hover:text-[#D2B48C] transition-colors">Privacy Policy</span>
            </Link>
            <Link href="/cookies">
              <span className="hover:text-[#D2B48C] transition-colors">Cookie Policy</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;