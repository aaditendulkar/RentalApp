import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Search, Clock, ShieldCheck, Users, Star, MessageCircle, CreditCard, ThumbsUp, AlertTriangle } from 'lucide-react';

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
        <title>How It Works - RentKar</title>
        <meta name="description" content="Learn how to borrow and lend items on RentKar" />
      </Head>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#D2B48C] to-[#F5F1E9]">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6">
            How <span className="text-[#A67C52]">RentKar</span> Works
          </h1>
          <p className="text-xl text-[#5D4037] mb-8 max-w-2xl mx-auto">
            Our platform connects people who need items with those who have them to share. 
            Here's your guide to borrowing and lending in our community.
          </p>
        </div>
      </section>
      
      {/* Steps Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#F5F1E9] flex items-center justify-center mr-4">
                    {step.icon}
                  </div>
                  <div className="mt-2">
                    <span className="text-[#A67C52] font-bold text-lg">Step {index + 1}</span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-[#3E2723] mb-3">{step.title}</h3>
                  <p className="text-[#5D4037] mb-4">{step.description}</p>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <div className="text-[#A67C52] mr-2">•</div>
                        <span className="text-sm text-[#5D4037]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trust & Safety */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#3E2723] mb-8 text-center">
            Trust & <span className="text-[#A67C52]">Safety</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F1E9] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <ShieldCheck className="h-8 w-8 text-[#A67C52] mr-3" />
                <h3 className="text-xl font-semibold text-[#3E2723]">Verified Profiles</h3>
              </div>
              <p className="text-[#5D4037]">
                Our multi-step verification process ensures users are who they say they are. 
                ID verification, email and phone confirmation add layers of security.
              </p>
            </div>
            
            <div className="bg-[#F5F1E9] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 text-[#A67C52] mr-3" />
                <h3 className="text-xl font-semibold text-[#3E2723]">Review System</h3>
              </div>
              <p className="text-[#5D4037]">
                After each transaction, both parties leave reviews. This builds a reputation 
                score that helps the community make informed decisions.
              </p>
            </div>
            
            <div className="bg-[#F5F1E9] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-[#A67C52] mr-3" />
                <h3 className="text-xl font-semibold text-[#3E2723]">Secure Payments</h3>
              </div>
              <p className="text-[#5D4037]">
                All transactions happen through our secure payment system. Deposits are held safely 
                and only released when both parties are satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 px-4 bg-[#F5F1E9]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#3E2723] mb-8 text-center">
            Frequently Asked <span className="text-[#A67C52]">Questions</span>
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#3E2723] mb-2">{faq.question}</h3>
                <p className="text-[#5D4037]">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-[#5D4037] mb-4">Still have questions? We're here to help!</p>
            <Link href="/contact">
              <button className="bg-[#A67C52] text-white py-3 px-8 rounded-md hover:bg-[#5D4037] transition-colors">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#D2B48C]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-4">
            Ready to start sharing?
          </h2>
          <p className="text-xl text-[#5D4037] mb-8 max-w-2xl mx-auto">
            Join our community today and discover the benefits of borrowing and lending with neighbors.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/register">
              <button className="bg-[#A67C52] text-white py-3 px-8 rounded-md hover:bg-[#5D4037] transition-colors text-lg font-medium">
                Create Account
              </button>
            </Link>
            <Link href="/browse">
              <button className="bg-white text-[#A67C52] py-3 px-8 rounded-md hover:bg-[#F5F1E9] transition-colors text-lg font-medium">
                Browse Items
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}