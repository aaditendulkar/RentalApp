"use client";

import { useState } from 'react';
import { Search, Star, Shield, Filter, ChevronDown, MapPin, HeartIcon } from 'lucide-react';
import Link from 'next/link';

export default function BrowseItemsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const items = [
    {
      id: 1,
      name: 'Professional Camera',
      category: 'Electronics',
      price: 1800,
      location: 'Andheri',
      image: '/api/placeholder/300/200',
      owner: {
        name: 'Arjun Sharma',
        rating: 4.8,
        trustScore: 98,
        reviews: 124,
      },
    },
    {
      id: 2,
      name: 'Mountain Bike',
      category: 'Sports',
      price: 1200,
      location: 'Bandra',
      image: '/api/placeholder/300/200',
      owner: {
        name: 'Priya Patel',
        rating: 4.5,
        trustScore: 92,
        reviews: 87,
      },
    },
    {
      id: 3,
      name: 'Tent (4 Person)',
      category: 'Outdoors',
      price: 1500,
      location: 'Powai',
      image: '/api/placeholder/300/200',
      owner: {
        name: 'Mihir Desai',
        rating: 4.9,
        trustScore: 99,
        reviews: 203,
      },
    },
    {
      id: 4,
      name: 'Power Drill',
      category: 'Tools',
      price: 800,
      location: 'Dadar',
      image: '/api/placeholder/300/200',
      owner: {
        name: 'Jyoti Singh',
        rating: 4.3,
        trustScore: 88,
        reviews: 56,
      },
    },
    {
      id: 5,
      name: 'Projector',
      category: 'Electronics',
      price: 2200,
      location: 'Juhu',
      image: '/api/placeholder/300/200',
      owner: {
        name: 'Deepak Gupta',
        rating: 4.7,
        trustScore: 95,
        reviews: 142,
      },
    },
    {
      id: 6,
      name: 'Kayak',
      category: 'Sports',
      price: 2500,
      location: 'Versova',
      image: '/api/placeholder/300/200',
      owner: {
        name: 'Isha Verma',
        rating: 4.6,
        trustScore: 93,
        reviews: 78,
      },
    },
  ];

  const categories = ['All', ...new Set(items.map((item) => item.category))];

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#F5F1E9]">
      {/* Header with Gradient Background */}
      <div className="bg-gradient-to-b from-[#D2B48C] to-[#F5F1E9] pt-16 pb-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E2723] text-center mb-6">
             <span className="text-[#A67C52] relative">
              Browse Items
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#A67C52]" />
            </span>
          </h1>
          <p className="text-lg text-[#5D4037] text-center mb-6 max-w-2xl mx-auto">
            Find what you need from our community of lenders. Rent items at affordable prices.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl py-8 px-4">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search for items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-[#D2B48C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A67C52] bg-white shadow-md transition-all"
            />
            <Search className="absolute left-3 top-3.5 text-[#A67C52]" size={18} />
          </div>

          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center space-x-2 bg-[#A67C52] px-4 py-3 rounded-lg shadow-md text-white hover:bg-[#8B6B4C] transition-all"
          >
            <Filter size={18} />
            <span>Filters</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${filtersOpen ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {/* Filter Options */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            filtersOpen ? 'max-h-40 opacity-100 mb-8' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-6 bg-white rounded-lg shadow-lg border border-[#D2B48C]/30 backdrop-blur-sm">
            <h3 className="text-[#3E2723] font-medium mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#A67C52] text-white shadow-md'
                      : 'bg-[#F5F1E9] text-[#5D4037] hover:bg-[#D2B48C] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-[#5D4037] font-medium">
            {filteredItems.length} items found
          </p>
          
          <div className="text-sm text-[#A67C52]">
            <span className="font-medium">Sort by:</span>
            <select className="ml-2 bg-white border border-[#D2B48C] rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#A67C52]">
              <option>Newest First</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${
                hoveredItem === item.id ? 'shadow-xl transform -translate-y-2' : 'shadow-md'
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-[#A67C52] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  ₹{item.price}/day
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-16" />
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-[#3E2723] mb-1">{item.name}</h3>
                  <button className="text-[#A67C52] hover:text-[#8B6B4C] transition-colors">
                    <HeartIcon size={20} />
                  </button>
                </div>
                
                <div className="flex items-center mb-3">
                  <span className="inline-block px-3 py-1 bg-[#F5F1E9] text-[#A67C52] text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-center text-[#5D4037] text-sm mb-4">
                  <MapPin size={16} className="mr-1 text-[#A67C52]" />
                  {item.location}
                </div>

                <div className="border-t border-[#F5F1E9] pt-4 mb-4">
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-[#3E2723]">{item.owner.name}</p>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-[#F5A623] fill-[#F5A623]" />
                      <span className="font-medium">{item.owner.rating}</span>
                      <span className="text-xs text-[#8B6B4C]">({item.owner.reviews})</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <Shield size={16} className="text-green-600 mr-1" />
                    <span className="text-xs text-[#5D4037]">{item.owner.trustScore}% Trust Score</span>
                  </div>
                </div>

                <button className="w-full bg-[#A67C52] text-white py-3 rounded-lg hover:bg-[#8B6B4C] transition-colors shadow-md font-medium">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty state - would display when no items match filter */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-white/60 rounded-xl shadow-md">
            <div className="text-[#A67C52] mb-4">
              <Search size={48} className="mx-auto opacity-50" />
            </div>
            <h3 className="text-xl font-semibold text-[#3E2723] mb-2">No items found</h3>
            <p className="text-[#5D4037] mb-4">Try adjusting your search or filters</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-[#A67C52] hover:text-[#8B6B4C] font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
        
        {/* If there are more than 6 items, show pagination */}
        {filteredItems.length > 6 && (
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="px-4 py-2 rounded-md bg-white border border-[#D2B48C] text-[#A67C52] hover:bg-[#F5F1E9] transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 rounded-md bg-[#A67C52] text-white">1</button>
              <button className="px-4 py-2 rounded-md bg-white border border-[#D2B48C] text-[#A67C52] hover:bg-[#F5F1E9] transition-colors">
                2
              </button>
              <button className="px-4 py-2 rounded-md bg-white border border-[#D2B48C] text-[#A67C52] hover:bg-[#F5F1E9] transition-colors">
                3
              </button>
              <button className="px-4 py-2 rounded-md bg-white border border-[#D2B48C] text-[#A67C52] hover:bg-[#F5F1E9] transition-colors">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer CTA */}
      <div className="mt-16 bg-gradient-to-b from-[#F5F1E9] to-[#D2B48C] py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-4">
            Have something to share?
          </h2>
          <p className="text-[#5D4037] mb-6 max-w-2xl mx-auto">
            List your items on RentKaro and start earning passive income while helping others access what they need.
          </p>
          <Link href="/list-item">
            <button className="bg-[#A67C52] text-white px-8 py-3 rounded-lg hover:bg-[#8B6B4C] transition-all shadow-lg font-medium">
              List an Item
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}