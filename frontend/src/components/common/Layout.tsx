'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, User, ChevronDown } from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    try {
      // Check if user is authenticated
      const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
      setIsAuthenticated(!!token);

      // Protect routes that require authentication
      const protectedRoutes = ['/profile', '/my-rentals', '/my-listings', '/list-item'];
      if (!token && protectedRoutes.includes(pathname)) {
        router.push('/login');
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
    }
  }, [pathname, router]);

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Browse Items', path: '/browseitems' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogout = () => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('authToken');
      }
      setIsAuthenticated(false);
      router.push('/');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle user dropdown
  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  // Don't show layout for login page
  if (pathname === '/login' || pathname === '/register') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E9]">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and Desktop Navigation */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="flex items-center">
                  <span className="text-2xl font-bold text-[#A67C52]">Rent</span>
                  <span className="text-2xl font-bold text-[#3E2723]">Karo</span>
                </Link>
              </div>
              <div className="hidden md:ml-8 md:flex md:space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`${
                      pathname === item.path
                        ? 'border-[#A67C52] text-[#3E2723] font-semibold'
                        : 'border-transparent text-[#5D4037] hover:border-[#D2B48C] hover:text-[#A67C52]'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#5D4037] hover:text-[#A67C52] focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop User Menu */}
            {isAuthenticated ? (
              <div className="hidden md:flex md:items-center md:ml-6">
                <div className="ml-3 relative">
                  <div>
                    <button
                      onClick={toggleUserMenu}
                      className="flex items-center text-[#5D4037] hover:text-[#A67C52] focus:outline-none transition-colors duration-200 rounded-full p-1"
                    >
                      <span className="sr-only">Open user menu</span>
                      <User className="h-6 w-6" />
                      <span className="ml-2 text-sm font-medium">My Account</span>
                      <ChevronDown 
                        size={16} 
                        className={`ml-1 transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>
                  </div>
                  {userMenuOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Link
                          href="/profile"
                          className="block px-4 py-2 text-sm text-[#5D4037] hover:bg-[#F5F1E9] hover:text-[#A67C52]"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          Profile
                        </Link>
                        <Link
                          href="/my-rentals"
                          className="block px-4 py-2 text-sm text-[#5D4037] hover:bg-[#F5F1E9] hover:text-[#A67C52]"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          My Rentals
                        </Link>
                        <Link
                          href="/my-listings"
                          className="block px-4 py-2 text-sm text-[#5D4037] hover:bg-[#F5F1E9] hover:text-[#A67C52]"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          My Listings
                        </Link>
                        <button
                          onClick={() => {
                            handleLogout();
                            setUserMenuOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-[#5D4037] hover:bg-[#F5F1E9] hover:text-[#A67C52]"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <Link
                  href="/list-item"
                  className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#A67C52] hover:bg-[#8B6B4C] focus:outline-none transition-colors duration-200 shadow-md"
                >
                  List an Item
                </Link>
              </div>
            ) : (
              <div className="hidden md:flex md:items-center">
                <Link
                  href="/login"
                  className="text-[#5D4037] hover:text-[#A67C52] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#A67C52] hover:bg-[#8B6B4C] focus:outline-none transition-colors duration-200 shadow-md"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${
                    pathname === item.path
                      ? 'bg-[#F5F1E9] text-[#3E2723]'
                      : 'text-[#5D4037] hover:bg-[#F5F1E9] hover:text-[#A67C52]'
                  } block px-3 py-2 rounded-md text-base font-medium`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {isAuthenticated ? (
                <>
                  <Link
                    href="/profile"
                    className="block px-3 py-2 rounded-md text-base font-medium text-[#5D4037] hover:bg-[#F5F1E9] hover:text-[#A67C52]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/my-rentals"
                    className="block px-3 py-2 rounded-md text-base font-medium text-[#5D4037] hover:bg-[#F5F1E9] hover:text-[#A67C52]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    My Rentals
                  </Link>
                  <Link
                    href="/my-listings"
                    className="block px-3 py-2 rounded-md text-base font-medium text-[#5D4037] hover:bg-[#F5F1E9] hover:text-[#A67C52]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    My Listings
                  </Link>
                  <Link
                    href="/list-item"
                    className="block px-3 py-2 rounded-md text-base font-medium text-[#5D4037] hover:bg-[#F5F1E9] hover:text-[#A67C52]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    List an Item
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#5D4037] hover:bg-[#F5F1E9] hover:text-[#A67C52]"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-[#5D4037] hover:bg-[#F5F1E9] hover:text-[#A67C52]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="block px-3 py-2 rounded-md text-base font-medium text-[#5D4037] hover:bg-[#F5F1E9] hover:text-[#A67C52]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center mb-4">
                <span className="text-2xl font-bold text-[#A67C52]">Rent</span>
                <span className="text-2xl font-bold text-[#3E2723]">Karo</span>
              </Link>
              <p className="text-[#5D4037]">
                RentKaro is your trusted platform for renting items from your neighbors. We connect people who need items with those who have them to share.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
