// app/dashboard/page.jsx
import React from "react";
import Link from "next/link";
import {
  Star,
  Users,
  PackageSearch,
  ClipboardList,
  MessageCircle,
} from "lucide-react";

const quickActions = [
  {
    title: "My Listings",
    description: "View and manage the items you’ve listed for rent.",
    icon: <PackageSearch className="h-8 w-8 text-[#A67C52]" />,
    link: "/dashboard/listings",
  },
  {
    title: "My Bookings",
    description: "Track your rental history and upcoming rentals.",
    icon: <ClipboardList className="h-8 w-8 text-[#A67C52]" />,
    link: "/dashboard/bookings",
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

function QuickActionCard({ title, description, icon, link }) {
  return (
    <Link
      href={link}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="ml-3 text-xl font-semibold text-[#3E2723]">{title}</h3>
      </div>
      <p className="text-[#5D4037] text-sm">{description}</p>
    </Link>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F5F1E9]">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#D2B48C] to-[#F5F1E9]">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6">
            Welcome to <span className="text-[#A67C52]">RentKaro</span> Dashboard
          </h1>
          <p className="text-xl text-[#5D4037] mb-8 max-w-2xl mx-auto">
            Manage your listings, bookings, and messages — all in one place.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickActions.map((item, index) => (
              <QuickActionCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#D2B48C]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-4">
            Ready to add a new item?
          </h2>
          <p className="text-xl text-[#5D4037] mb-8 max-w-2xl mx-auto">
            Grow your impact and earnings by sharing what you already own.
          </p>
          <Link href="/dashboard/new-listing">
            <button className="bg-[#A67C52] text-white py-3 px-8 rounded-md hover:bg-[#5D4037] transition-colors text-lg font-medium">
              Add New Listing
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}