import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Make sure lucide-react is installed

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#8B4513]">RentKaro</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex justify-center flex-1">
          <NavigationMenuList className="gap-6">
            {["dashboard", "how-it-works", "browse", "about-us"].map((path, idx) => (
              <NavigationMenuItem key={idx}>
                <Link
                  to={`/${path === "dashboard" ? "dashboard" : path}`}
                  className="group text-sm font-medium text-[#666] hover:text-[#8B4513] transition-colors"
                >
                  <span className="relative capitalize">
                    {path.replace("-", " ")}
                    <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-[#8B4513] transform scale-x-0 transition-transform group-hover:scale-x-100" />
                  </span>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-colors"
          >
            Sign In
          </Button>
          <Button className="bg-[#8B4513] text-white hover:bg-[#A0522D] transition-colors">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#8B4513]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-3">
          {["dashboard", "how-it-works", "browse", "about-us"].map((path, idx) => (
            <Link
              key={idx}
              to={`/${path === "dashboard" ? "dashboard" : path}`}
              className="block text-sm font-medium text-[#666] hover:text-[#8B4513]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {path.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
            </Link>
          ))}
          <div className="flex flex-col space-y-2 pt-2">
            <Button
              variant="outline"
              className="w-full border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-colors"
            >
              Sign In
            </Button>
            <Button className="w-full bg-[#8B4513] text-white hover:bg-[#A0522D] transition-colors">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
