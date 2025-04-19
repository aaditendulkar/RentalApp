"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {
  Star,
  Users,
  PackageSearch,
  ClipboardList,
  MessageCircle,
  Plus,
} from "lucide-react";
import { motion } from "framer-motion";

const quickActions = [
  {
    title: "My Listings",
    description: "View and manage the items you've listed for rent.",
    icon: <PackageSearch className="h-8 w-8 text-[#A67C52]" />,
    link: "/dashboard/listings",
  },
  {
    title: "My Bookings",
    description: "Track your rental history and upcoming rentals.",
    icon: <ClipboardList className="h-8 w-8 text-[#A67C52]" />,
    link: "/dashboard/bookings"
  },
  {
    title: "Messages",
    description: "Chat with renters or item owners securely.",
    icon: <MessageCircle className="h-8 w-8 text-[#A67C52]" />,
    link: "/dashboard/messages",
  },
  {
    title: "Reviews",
    description: "Read and manage reviews about your items or behavior.",
    icon: <Star className="h-8 w-8 text-[#A67C52]" />,
    link: "/dashboard/reviews",
  },
  {
    title: "Profile Settings",
    description: "Update your personal info and verification details.",
    icon: <Users className="h-8 w-8 text-[#A67C52]" />,
    link: "/dashboard/profile",
  },
];

function QuickActionCard({ title, description, icon, link, index }) {
  // Create a staggered animation effect
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.03,
        rotate: [0, 0.5, 0, -0.5, 0],
        transition: { duration: 0.2 }
      }}
      className="perspective-1000"
    >
      <Link
        href={link}
        className="transform-style-3d bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 block h-full border-t-4 border-[#A67C52] overflow-hidden relative"
      >
        <div className="absolute -right-8 -top-8 w-20 h-20 rounded-full bg-[#A67C52]/5"></div>
        <div className="absolute -left-4 -bottom-4 w-16 h-16 rounded-full bg-[#A67C52]/10"></div>
        
        <div className="flex items-center mb-4 relative z-10">
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="p-3 rounded-full bg-[#F5F1E9] shadow-md"
          >
            {icon}
          </motion.div>
          <h3 className="ml-3 text-xl font-semibold text-[#3E2723]">{title}</h3>
        </div>
        <p className="text-[#5D4037] text-sm relative z-10">{description}</p>
      </Link>
    </motion.div>
  );
}

export default function Dashboard() {
  // Add subtle floating animation to decorative elements
  useEffect(() => {
    // This is where we would initialize any third-party 3D libraries
    // like Three.js if we were using it instead of CSS 3D
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F1E9] overflow-hidden">
      {/* Decorative 3D Elements */}
      <div className="fixed w-full h-full top-0 left-0 pointer-events-none z-0 perspective-1000">
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotateY: [0, 10, 0],
            rotateX: [0, 5, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/4 left-10 w-40 h-40 bg-[#A67C52]/10 rounded-full blur-2xl"
        />
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            rotateY: [0, -15, 0],
            rotateX: [0, 10, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-1/4 right-10 w-60 h-60 bg-[#D2B48C]/20 rounded-full blur-3xl"
        />
      </div>
      
      {/* Header Section */}
      <section className="pt-20 sm:pt-28 md:pt-32 pb-12 md:pb-16 px-4 bg-gradient-to-b from-[#D2B48C] to-[#F5F1E9] relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(166, 124, 82, 0.3) 0%, transparent 50%)',
            backgroundSize: '120% 120%',
          }}
        />
      
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 md:mb-6">
              Welcome to{" "}
              <motion.span 
                className="text-[#A67C52] relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                RentKaro
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#A67C52]" />
              </motion.span>{" "}
              Dashboard
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg sm:text-xl text-[#5D4037] mb-6 md:mb-8 max-w-2xl mx-auto"
          >
            Manage your listings, bookings, and messages — all in one place.
          </motion.p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 md:py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-8 ml-2"
          >
            Quick Actions
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {quickActions.map((item, index) => (
              <QuickActionCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-4 sm:p-8 bg-gradient-to-r from-[#A67C52]/20 to-[#F5F1E9] border-b border-[#D2B48C]/30">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#3E2723]">
                Your Activity Overview
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#D2B48C]/30">
              {[
                { label: "Active Listings", value: "5" },
                { label: "Current Rentals", value: "2" },
                { label: "Messages", value: "7" },
                { label: "Reviews", value: "16" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 text-center"
                >
                  <motion.p 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 10,
                      delay: 0.2 + index * 0.1
                    }}
                    className="text-3xl md:text-4xl font-bold text-[#A67C52]"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm md:text-base text-[#5D4037] mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-8 ml-2"
          >
            Recent Activity
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {[
              {
                title: "New booking request",
                desc: "John D. wants to rent your Lawn Mower",
                time: "10 mins ago",
                type: "booking"
              },
              {
                title: "Message received",
                desc: "Sara T. sent you a message about the Camera",
                time: "2 hours ago",
                type: "message"
              },
              {
                title: "New review",
                desc: "Mike P. gave your Tent a 5-star rating",
                time: "Yesterday",
                type: "review"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ backgroundColor: "#F5F1E9" }}
                className="p-4 border-b last:border-b-0 border-[#D2B48C]/30 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-[#3E2723]">{item.title}</p>
                    <p className="text-sm text-[#5D4037] mt-1">{item.desc}</p>
                  </div>
                  <span className="text-xs text-[#A67C52]">{item.time}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-[#D2B48C] to-[#A67C52]/70 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/5"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div 
            className="absolute top-40 right-40 w-24 h-24 rounded-full bg-[#3E2723]/5"
            animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to add a new item?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Grow your impact and earnings by sharing what you already own.
            </p>
            
            <Link href="/dashboard/new-listing">
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-[#A67C52] py-3 px-8 rounded-md hover:bg-white/90 hover:text-[#5D4037] transition-colors text-lg font-medium flex items-center gap-2 mx-auto"
              >
                <Plus size={20} />
                Add New Listing
                <motion.span
                  className="absolute inset-0 rounded-md"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    background: "radial-gradient(circle at center, rgba(166, 124, 82, 0.4) 0%, transparent 70%)",
                    filter: "blur(10px)"
                  }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CSS for 3D effects */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
          transition: transform 0.3s ease;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes floatReverse {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(15px) translateX(10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(166, 124, 82, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(166, 124, 82, 0); }
          100% { box-shadow: 0 0 0 0 rgba(166, 124, 82, 0); }
        }
      `}</style>
    </div>
  );
}