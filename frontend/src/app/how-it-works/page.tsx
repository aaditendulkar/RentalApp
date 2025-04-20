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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-28 md:pt-40 pb-16 md:pb-24 px-4 sm:px-8 bg-gradient-to-b from-[#D2B48C] to-[#F5F1E9]">
        <div className="container mx-auto max-w-4xl text-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3E2723] mb-6 md:mb-8">
              How <span className="text-[#A67C52] relative">
                RentKaro
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#A67C52]" />
              </span> Works
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-[#5D4037] mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            Our platform connects people who need items with those who have them to share. 
            Here's your guide to borrowing and lending in our community.
          </p>
          <div>
            <Badge variant="outline" className="px-3 sm:px-4 md:px-6 py-2 md:py-3 border-[#A67C52] bg-white/30 text-[#5D4037] text-base md:text-lg font-medium">
              Simple • Secure • Sustainable
            </Badge>
          </div>
        </div>
      </section>
      
      {/* Steps Section */}
      <section className="py-16 md:py-24 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3E2723] mb-10 md:mb-16 text-center">
            Your{" "}
            <span className="relative text-[#A67C52] font-bold inline-block">
              RentKaro
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#A67C52] rounded-md"></span>
            </span>{" "}
            Journey
          </h2>
          
          <div className="space-y-8 sm:space-y-12 md:space-y-16 relative">
            {/* Connecting line between steps */}
            <div className="absolute left-8 md:left-24 top-0 bottom-0 w-1 bg-gradient-to-b from-[#A67C52]/0 via-[#A67C52] to-[#A67C52]/0 hidden md:block" />
            
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card 
                  className="p-4 sm:p-6 md:p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/90 hover:transform hover:scale-[1.02]"
                >
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F5F1E9] flex items-center justify-center mr-3 sm:mr-4 shadow-md">
                        {step.icon}
                      </div>
                      <div className="mt-2">
                        <Badge className="bg-[#A67C52] hover:bg-[#A67C52]/90 text-white px-2 sm:px-3 md:px-4 py-1 md:py-1.5 text-base md:text-lg font-bold">STEP {index + 1}</Badge>
                      </div>
                    </div>
                    
                    <div className="flex-grow mt-4 md:mt-0">
                      <CardHeader className="p-0 pb-2 sm:pb-4">
                        <CardTitle className="text-xl sm:text-2xl font-semibold text-[#3E2723]">{step.title}</CardTitle>
                        <CardDescription className="text-[#5D4037] text-base sm:text-lg mt-1 sm:mt-2">{step.description}</CardDescription>
                      </CardHeader>
                      
                      <CardContent className="p-0">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mt-2 sm:mt-4">
                          {step.details.map((detail, i) => (
                            <li 
                              key={i} 
                              className="flex items-start bg-[#F5F1E9]/50 p-2 sm:p-4 rounded-md"
                            >
                              <div className="text-[#A67C52] mr-2 sm:mr-3 font-bold flex-shrink-0">•</div>
                              <span className="text-xs sm:text-sm text-[#5D4037]">{detail}</span>
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
      <section className="py-16 md:py-24 px-4 sm:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3E2723] mb-8 md:mb-12 text-center">
             <span className="text-[#A67C52]">Trust & Safety</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-[#A67C52]" />,
                title: 'Verified Profiles',
                description: 'Our multi-step verification process ensures users are who they say they are. ID verification, email and phone confirmation add layers of security.'
              },
              {
                icon: <Star className="h-6 w-6 sm:h-8 sm:w-8 text-[#A67C52]" />,
                title: 'Review System',
                description: 'After each transaction, both parties leave reviews. This builds a reputation score that helps the community make informed decisions.'
              },
              {
                icon: <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-[#A67C52]" />,
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
                  
                  <CardHeader className="relative z-10 p-4 sm:p-6">
                    <div className="flex items-center mb-2 sm:mb-4">
                      <div className="p-2 sm:p-3 rounded-full bg-white/80 shadow-md mr-3 sm:mr-4">
                        {item.icon}
                      </div>
                      <CardTitle className="text-lg sm:text-xl font-semibold text-[#3E2723]">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 p-4 sm:p-6 pt-0">
                    <p className="text-sm sm:text-base text-[#5D4037]">{item.description}</p>
                  </CardContent>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-[#A67C52]/10 z-0" />
                  <div className="absolute top-12 -left-4 w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-[#A67C52]/5 z-0" />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 md:py-24 px-4 sm:px-8 bg-[#F5F1E9]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3E2723] mb-8 md:mb-12 text-center">
          <span className="text-[#A67C52]">Frequently Asked Questions</span>
          </h2>
          
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
            <Accordion type="single" collapsible className="space-y-2 sm:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#D2B48C]/30">
                  <AccordionTrigger className="text-base sm:text-lg md:text-xl font-semibold text-[#3E2723] hover:text-[#A67C52] py-3 sm:py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-[#5D4037] pb-4 sm:pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-10 sm:mt-12 md:mt-16 text-center">
            <Alert className="bg-[#A67C52]/10 border-[#A67C52]/30 mb-6 sm:mb-8">
              <AlertTitle className="text-[#A67C52] text-base sm:text-lg">Still have questions?</AlertTitle>
              <AlertDescription className="text-sm sm:text-base text-[#5D4037]">
                Our support team is ready to assist you with any queries.
              </AlertDescription>
            </Alert>
            
            <Link href="/contact" passHref>
              <Button className="bg-[#A67C52] text-white py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 rounded-md hover:bg-[#5D4037] transition-all hover:shadow-lg text-sm sm:text-base">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-8 bg-gradient-to-br from-[#D2B48C] to-[#A67C52]/70 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 sm:w-32 h-20 sm:h-32 rounded-full bg-white/10 floating-circle" />
          <div className="absolute bottom-10 right-10 w-24 sm:w-40 h-24 sm:h-40 rounded-full bg-white/5 floating-circle-slow" />
          <div className="absolute top-40 right-40 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-[#3E2723]/5 floating-circle-reverse" />
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to start browsing?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-2">
           Start browsing today and discover the benefits of borrowing and lending with neighbors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            {/* <Link href="/register" passHref>
              <Button variant="default" className="text-base sm:text-lg font-medium h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 bg-white text-[#A67C52] hover:bg-white/90 hover:text-[#5D4037] shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                Create Account
              </Button>
            </Link> */}
            
            <Link href="/browse" passHref>
              <Button variant="outline" className="text-base sm:text-lg font-medium h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 bg-transparent border-white text-white hover:bg-white/10 transition-all w-full sm:w-auto">
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