"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Search, MapPin, Star, ChevronRight, Clock, ShieldCheck, Users, LayoutDashboard } from 'lucide-react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const featuredItems = [
    {
      id: 1,
      name: 'Professional Drill Set',
      category: 'Tools',
      image: '/api/placeholder/400/250',
      price: '$8/day',
      rating: 4.8,
      distance: '0.5 miles',
      owner: 'Michael T.',
      ownerRating: 4.9
    },
    {
      id: 2,
      name: 'Portable Projector',
      category: 'Electronics',
      image: '/api/placeholder/400/250',
      price: '$15/day',
      rating: 4.7,
      distance: '1.2 miles',
      owner: 'Sarah L.',
      ownerRating: 5.0
    },
    {
      id: 3,
      name: 'Mountain Bike',
      category: 'Sports',
      image: '/api/placeholder/400/250',
      price: '$12/day',
      rating: 4.9,
      distance: '0.8 miles',
      owner: 'David R.',
      ownerRating: 4.8
    },
    {
      id: 4,
      name: 'Party Tent (10x20)',
      category: 'Events',
      image: '/api/placeholder/400/250',
      price: '$25/day',
      rating: 4.6,
      distance: '2.1 miles',
      owner: 'Emma K.',
      ownerRating: 4.7
    }
  ];

  const dashboardCards = [
    {
      title: 'Your Listings',
      count: 3,
      description: 'Manage items you’re lending',
      icon: <LayoutDashboard className="h-6 w-6 text-[#A67C52]" />
    },
    {
      title: 'Your Bookings',
      count: 5,
      description: 'View and track active rentals',
      icon: <Clock className="h-6 w-6 text-[#A67C52]" />
    },
    {
      title: 'Messages',
      count: 2,
      description: 'Connect with other users',
      icon: <Users className="h-6 w-6 text-[#A67C52]" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F1E9]">
      <Head>
        <title>RentKar - Borrow and lend items in your community</title>
        <meta name="description" content="A peer-to-peer rental platform for everyday items" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Dashboard Section */}
      <section className="pt-32 pb-16 px-4 bg-[#F5F1E9]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#3E2723] mb-8 text-center">
            Welcome to Your <span className="text-[#A67C52]">Dashboard</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dashboardCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold text-[#3E2723] mb-1">{card.title}</h3>
                <p className="text-[#A67C52] font-bold text-2xl mb-1">{card.count}</p>
                <p className="text-[#5D4037] text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The rest of your homepage continues here... */}
    </div>
  );
}
