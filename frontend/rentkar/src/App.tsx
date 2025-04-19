import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar"; // Updated import path for Navbar
import "./styles/globals.css"; // Import global styles
import "./styles/tailwind.css"; // Import Tailwind CSS styles
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import BrowseItems from "./pages/BrowseItems";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/dashboard"; 

const App = () => (
  <BrowserRouter>
    <Toaster />
    <Sonner />
    <TooltipProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/browse" element={<BrowseItems />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
);

export default App;
