"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Search, Clock, ShieldCheck, Users, Star, 
  CreditCard, ThumbsUp, AlertTriangle
} from 'lucide-react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/app/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Button } from '@/app/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';
import { Badge } from '@/app/components/ui/badge';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Create your account',
      description: 'Sign up and complete your profile with verification to build trust in the community.',
      icon: <Users className="h-10 w-10 text-[#A67C52]" />,
      details: [
        'Add a profile picture and bio',
        'Verify your identity with secure methods',
        'Connect your preferred payment method'
      ]
    },
    {
      title: 'Browse & discover items',
      description: 'Search for what you need by category, location, or specific keywords.',
      icon: <Search className="h-10 w-10 text-[#A67C52]" />,
      details: [
        'Filter by distance, price, and availability',
        'View detailed item descriptions and images',
        'Check owner profiles and ratings'
      ]
    },
    {
      title: 'Request & book items',
      description: 'Send booking requests with your specific dates and communicate with owners.',
      icon: <Clock className="h-10 w-10 text-[#A67C52]" />,
      details: [
        'Request specific rental periods',
        'Discuss pickup or delivery options',
        'Get instant confirmation for available items'
      ]
    },
    {
      title: 'Secure payment',
      description: 'Make secure payments through our platform with transparent pricing.',
      icon: <CreditCard className="h-10 w-10 text-[#A67C52]" />,
      details: [
        'View breakdown of rental fees',
        'Security deposits managed securely',
        'Payment released only after successful return'
      ]
    },
    {
      title: 'Use & enjoy',
      description: 'Pick up the item and use it for your agreed rental period.',
      icon: <ThumbsUp className="h-10 w-10 text-[#A67C52]" />,
      details: [
        'Follow any usage instructions from the owner',
        'Contact owner if you need assistance',
        'Request extensions if needed'
      ]
    },
    {
      title: 'Return & review',
      description: 'Return the item in the same condition and leave a review about your experience.',
      icon: <Star className="h-10 w-10 text-[#A67C52]" />,
      details: [
        'Coordinate return logistics',
        'Share your experience with the community',
        'Build your profile reputation'
      ]
    }
  ];
  
  const faqs = [
    {
      question: 'What happens if an item gets damaged?',
      answer: 'Our platform includes protection policies. Renters are responsible for items while in their possession, but owners can set security deposits and our resolution center helps mediate any disputes.'
    },
    {
      question: 'How are payments handled?',
      answer: 'All payments are processed securely through our platform. Payment is only released to the owner after the renter confirms successful receipt of the item. Security deposits are also held by the platform and returned after proper return of items.'
    },
    {
      question: 'How do I know if someone is trustworthy?',
      answer: 'Our verification system includes ID verification, user reviews, and reputation scores. Users build trust through successful transactions and community engagement. You can view detailed profiles and ratings before agreeing to any rental.'
    },
    {
      question: 'What if I need to cancel a booking?',
      answer: 'Each owner sets their own cancellation policy, which is clearly displayed before booking. Our platform supports flexible, moderate, and strict cancellation options with appropriate refund policies for each.'
    },
    {
      question: 'Can I extend my rental period?',
      answer: 'Yes, you can request an extension through the platform. If the owner approves and the item isn\'t booked by someone else, your rental period will be extended and payment adjusted accordingly.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F1E9]">
      <Head>
        <title>How It Works - RentKaro</title>
        <meta name="description" content="Learn how to borrow and lend items on RentKaro" />
      </Head>
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-8 bg-gradient-to-b from-[#D2B48C] to-[#F5F1E9]">
        <div className="container mx-auto max-w-4xl text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#3E2723] mb-8">
              How <span className="text-[#A67C52] relative">
                RentKaro
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#A67C52]" />
              </span> Works
            </h1>
          </div>
          <p className="text-xl text-[#5D4037] mb-10 max-w-2xl mx-auto leading-relaxed">
            Our platform connects people who need items with those who have them to share. 
            Here's your guide to borrowing and lending in our community.
          </p>
          <div>
            <Badge variant="outline" className="px-6 py-3 border-[#A67C52] bg-white/30 text-[#5D4037] text-lg font-medium">
              Simple • Secure • Sustainable
            </Badge>
          </div>
        </div>
      </section>
      
      {/* Steps Section */}
      <section className="py-24 px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#3E2723] mb-16 text-center relative">
            <span className="relative">
              Your RentKaro Journey
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-[#A67C52]" />
            </span>
          </h2>
          
          <div className="space-y-16 relative">
            {/* Connecting line between steps */}
            <div className="absolute left-8 md:left-24 top-0 bottom-0 w-1 bg-gradient-to-b from-[#A67C52]/0 via-[#A67C52] to-[#A67C52]/0 hidden md:block" />
            
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card 
                  className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/90 hover:transform hover:scale-[1.02]"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#F5F1E9] flex items-center justify-center mr-4 shadow-md">
                        {step.icon}
                      </div>
                      <div className="mt-2">
                        <Badge className="bg-[#A67C52] hover:bg-[#A67C52]/90 text-white px-4 py-1.5 text-lg font-bold">STEP {index + 1}</Badge>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <CardHeader className="p-0 pb-4">
                        <CardTitle className="text-2xl font-semibold text-[#3E2723]">{step.title}</CardTitle>
                        <CardDescription className="text-[#5D4037] text-lg mt-2">{step.description}</CardDescription>
                      </CardHeader>
                      
                      <CardContent className="p-0">
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                          {step.details.map((detail, i) => (
                            <li 
                              key={i} 
                              className="flex items-start bg-[#F5F1E9]/50 p-4 rounded-md"
                            >
                              <div className="text-[#A67C52] mr-3 font-bold">•</div>
                              <span className="text-sm text-[#5D4037]">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>
                  </div>
                </Card>
                
                {/* Connector dots */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 md:left-24 top-full w-1 h-12 flex justify-center items-center hidden md:flex">
                    <div className="w-4 h-4 rounded-full bg-[#A67C52] pulse-animation" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trust & Safety */}
      <section className="py-24 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#3E2723] mb-12 text-center">
            Trust & <span className="text-[#A67C52]">Safety</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="h-8 w-8 text-[#A67C52]" />,
                title: 'Verified Profiles',
                description: 'Our multi-step verification process ensures users are who they say they are. ID verification, email and phone confirmation add layers of security.'
              },
              {
                icon: <Star className="h-8 w-8 text-[#A67C52]" />,
                title: 'Review System',
                description: 'After each transaction, both parties leave reviews. This builds a reputation score that helps the community make informed decisions.'
              },
              {
                icon: <AlertTriangle className="h-8 w-8 text-[#A67C52]" />,
                title: 'Secure Payments',
                description: 'All transactions happen through our secure payment system. Deposits are held safely and only released when both parties are satisfied.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="hover-lift transition-all duration-300"
              >
                <Card className="h-full bg-[#F5F1E9] border-none shadow-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A67C52]/5 to-transparent z-0" />
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-white/80 shadow-md mr-4">
                        {item.icon}
                      </div>
                      <CardTitle className="text-xl font-semibold text-[#3E2723]">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <p className="text-[#5D4037]">{item.description}</p>
                  </CardContent>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#A67C52]/10 z-0" />
                  <div className="absolute top-12 -left-4 w-12 h-12 rounded-full bg-[#A67C52]/5 z-0" />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-24 px-8 bg-[#F5F1E9]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#3E2723] mb-12 text-center">
            Frequently Asked <span className="text-[#A67C52]">Questions</span>
          </h2>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#D2B48C]/30">
                  <AccordionTrigger className="text-xl font-semibold text-[#3E2723] hover:text-[#A67C52] py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5D4037] pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-16 text-center">
            <Alert className="bg-[#A67C52]/10 border-[#A67C52]/30 mb-8">
              <AlertTitle className="text-[#A67C52]">Still have questions?</AlertTitle>
              <AlertDescription className="text-[#5D4037]">
                Our support team is ready to assist you with any queries.
              </AlertDescription>
            </Alert>
            
            <Link href="/contact" passHref>
              <Button className="bg-[#A67C52] text-white py-6 px-8 rounded-md hover:bg-[#5D4037] transition-all hover:shadow-lg">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-8 bg-gradient-to-br from-[#D2B48C] to-[#A67C52]/70 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 floating-circle" />
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/5 floating-circle-slow" />
          <div className="absolute top-40 right-40 w-24 h-24 rounded-full bg-[#3E2723]/5 floating-circle-reverse" />
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to start sharing?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join our community today and discover the benefits of borrowing and lending with neighbors.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/register" passHref>
              <Button variant="default" className="text-lg font-medium h-14 px-8 bg-white text-[#A67C52] hover:bg-white/90 hover:text-[#5D4037] shadow-lg hover:shadow-xl transition-all">
                Create Account
              </Button>
            </Link>
            
            <Link href="/browse" passHref>
              <Button variant="outline" className="text-lg font-medium h-14 px-8 bg-transparent border-white text-white hover:bg-white/10 transition-all">
                Browse Items
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CSS Animations for the page */}
      <style jsx global>{`
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
        
        .floating-circle {
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-circle-slow {
          animation: float 8s ease-in-out infinite;
        }
        
        .floating-circle-reverse {
          animation: floatReverse 10s ease-in-out infinite;
        }
        
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        .hover-lift:hover {
          transform: translateY(-10px);
        }
      `}</style>
    </div>
  );
}