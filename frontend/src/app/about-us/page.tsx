'user client';

import Layout from '../components/Layout'; // ✅ Correct path
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { ArrowLeft, Users, Heart, Globe, MessageSquare } from "lucide-react";
import Link from "next/link";

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "Founder & CEO",
      avatar: "PS",
      bio: "Passionate about creating sustainable sharing economies and reducing waste through community-driven initiatives.",
    },
    {
      name: "Rahul Mehra",
      role: "CTO",
      avatar: "RM",
      bio: "Tech enthusiast with a vision to leverage technology for creating meaningful connections between people and resources.",
    },
    {
      name: "Ankit Patel",
      role: "Head of Operations",
      avatar: "AP",
      bio: "Expert in logistics and operations with experience in optimizing resource allocation and community management.",
    },
    {
      name: "Neha Gupta",
      role: "Marketing Director",
      avatar: "NG",
      bio: "Creative strategist focused on building authentic brand experiences and fostering community engagement.",
    },
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6 text-[#a47148]" />,
      title: "Community First",
      description: "We believe in the power of community and shared resources to create a more sustainable future.",
    },
    {
      icon: <Globe className="h-6 w-6 text-[#a47148]" />,
      title: "Environmental Impact",
      description: "By sharing items instead of buying new ones, we reduce waste and minimize our environmental footprint.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-[#a47148]" />,
      title: "Open Communication",
      description: "We foster transparent and honest communication between our users and within our team.",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-[#fdf6ee] to-[#f3e9da] min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="flex items-center mb-6">
            <Link href="/browse-items">
              <Button variant="ghost" className="text-[#7b5e57] hover:text-[#5c3a21] hover:bg-[#f3e5c3]/50 p-2">
                <ArrowLeft className="h-5 w-5" />
                <span className="ml-2">Back to Browse</span>
              </Button>
            </Link>
          </div>

          {/* Main Animated Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* Hero Section */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-6 inline-block p-4 rounded-full bg-gradient-to-br from-[#f3e5c3] to-[#dbc1ac]"
              >
                <Users className="h-12 w-12 text-[#7b5e57]" />
              </motion.div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#7b5e57] to-[#a47148] bg-clip-text text-transparent mb-4">
                About Us
              </h1>
              <p className="text-lg text-[#5c3a21] max-w-2xl mx-auto">
                We're on a mission to create a community where sharing resources becomes the norm, reducing waste and bringing people together through a culture of trust and collaboration.
              </p>
            </div>

            {/* Our Story */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-[#7b5e57] mb-4">Our Story</h2>
                <p className="text-[#5c3a21] mb-4">
                  Founded in 2023, our platform was born from a simple observation: most of us own items we rarely use, while simultaneously needing items we don't want to purchase. We saw an opportunity to connect these dots.
                </p>
                <p className="text-[#5c3a21]">
                  What started as a small community project has grown into a thriving marketplace where people can share everything from tools and equipment to electronics and outdoor gear.
                </p>
              </CardContent>
            </Card>

            {/* Our Values */}
            <div>
              <h2 className="text-2xl font-semibold text-[#7b5e57] mb-6 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 h-full">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="p-3 rounded-full bg-[#f3e5c3] mb-4">{value.icon}</div>
                        <h3 className="text-xl font-medium text-[#7b5e57] mb-2">{value.title}</h3>
                        <p className="text-[#5c3a21]">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Our Team */}
            <div>
              <h2 className="text-2xl font-semibold text-[#7b5e57] mb-6 text-center">Meet Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 h-full">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#dbc1ac] to-[#a47148] flex items-center justify-center text-white text-xl font-bold mb-4">
                          {member.avatar}
                        </div>
                        <h3 className="text-lg font-medium text-[#7b5e57]">{member.name}</h3>
                        <p className="text-sm text-[#a47148] mb-2">{member.role}</p>
                        <p className="text-sm text-[#5c3a21]">{member.bio}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-[#7b5e57] mb-4">Get in Touch</h2>
              <p className="text-[#5c3a21] mb-6">
                Have questions or want to learn more about our platform? We'd love to hear from you!
              </p>
              <Button className="bg-gradient-to-r from-[#a47148] to-[#7b5e57] hover:from-[#8b5e3c] hover:to-[#6b4f3f] text-white px-6">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
