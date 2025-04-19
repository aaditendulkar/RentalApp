"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../layout';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Send,
  AlertCircle
} from 'lucide-react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setLoading(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#F5F1E9]">
        <Head>
          <title>Contact Us - RentKaro</title>
          <meta name="description" content="Get in touch with the RentKaro team" />
        </Head>
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-8 bg-gradient-to-b from-[#D2B48C] to-[#F5F1E9]">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold text-[#3E2723] mb-6">
               <span className="text-[#A67C52] relative">
                Get In Touch
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#A67C52]" />
              </span>
            </h1>
            <p className="text-xl text-[#5D4037] mb-8 max-w-2xl mx-auto leading-relaxed">
              Have questions about RentKaro? We're here to help you connect, share, and make the most of our community.
            </p>
          </div>
        </section>
        
        {/* Contact Options Tab Section */}
        <section className="py-12 px-8">
          <div className="container mx-auto max-w-6xl">
            <Tabs defaultValue="message" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mx-auto max-w-md mb-8 bg-[#F5F1E9] border border-[#D2B48C]/30">
                <TabsTrigger 
                  value="message" 
                  className="text-[#5D4037] data-[state=active]:bg-[#A67C52] data-[state=active]:text-white"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send Message
                </TabsTrigger>
                <TabsTrigger 
                  value="support" 
                  className="text-[#5D4037] data-[state=active]:bg-[#A67C52] data-[state=active]:text-white"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Direct Support
                </TabsTrigger>
                <TabsTrigger 
                  value="visit" 
                  className="text-[#5D4037] data-[state=active]:bg-[#A67C52] data-[state=active]:text-white"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Visit Us
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="message">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <Card className="bg-white/90 shadow-lg border-none">
                      <CardHeader>
                        <CardTitle className="text-2xl font-semibold text-[#3E2723]">Send us a message</CardTitle>
                        <CardDescription className="text-[#5D4037]">
                          Fill out the form below and we'll get back to you within 24 hours.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {formStatus === 'success' ? (
                          <Alert className="bg-[#A67C52]/10 border-[#A67C52] mb-4">
                            <AlertCircle className="h-4 w-4 text-[#A67C52]" />
                            <AlertDescription className="text-[#5D4037]">
                              Thank you for your message! We'll be in touch soon.
                            </AlertDescription>
                          </Alert>
                        ) : (
                          <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="name" className="text-[#5D4037]">Full Name</Label>
                                <Input 
                                  id="name" 
                                  placeholder="John Doe" 
                                  required 
                                  className="border-[#D2B48C]/30 focus:border-[#A67C52] focus:ring-[#A67C52]"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="email" className="text-[#5D4037]">Email Address</Label>
                                <Input 
                                  id="email" 
                                  type="email" 
                                  placeholder="john@example.com" 
                                  required 
                                  className="border-[#D2B48C]/30 focus:border-[#A67C52] focus:ring-[#A67C52]"
                                />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="subject" className="text-[#5D4037]">Subject</Label>
                              <Input 
                                id="subject" 
                                placeholder="How can we help you?" 
                                required 
                                className="border-[#D2B48C]/30 focus:border-[#A67C52] focus:ring-[#A67C52]"
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="message" className="text-[#5D4037]">Your Message</Label>
                              <Textarea 
                                id="message" 
                                placeholder="Tell us what you need..." 
                                rows={5}
                                required 
                                className="border-[#D2B48C]/30 focus:border-[#A67C52] focus:ring-[#A67C52] resize-none"
                              />
                            </div>
                            
                            <div>
                              <Button 
                                type="submit" 
                                className="bg-[#A67C52] hover:bg-[#5D4037] text-white w-full md:w-auto transition-all"
                                disabled={loading}
                              >
                                {loading ? (
                                  <span className="flex items-center">
                                    <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                                    Sending...
                                  </span>
                                ) : (
                                  <span className="flex items-center">
                                    <Send className="mr-2 h-4 w-4" />
                                    Send Message
                                  </span>
                                )}
                              </Button>
                            </div>
                          </form>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <Card className="bg-[#3E2723] text-white shadow-lg border-none h-full">
                      <CardHeader>
                        <CardTitle className="text-2xl font-semibold">Contact Information</CardTitle>
                        <CardDescription className="text-white/70">
                          Reach out to us directly through any of these channels.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="flex items-start">
                          <div className="p-3 rounded-full bg-[#A67C52]/20 mr-4">
                            <Mail className="h-6 w-6 text-[#A67C52]" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Email</h3>
                            <p className="text-white/70">support@rentkaro.com</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="p-3 rounded-full bg-[#A67C52]/20 mr-4">
                            <Phone className="h-6 w-6 text-[#A67C52]" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Phone</h3>
                            <p className="text-white/70">+91 98765 43210</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="p-3 rounded-full bg-[#A67C52]/20 mr-4">
                            <Clock className="h-6 w-6 text-[#A67C52]" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Hours</h3>
                            <p className="text-white/70">Mon - Fri: 9AM - 6PM</p>
                            <p className="text-white/70">Sat: 10AM - 2PM</p>
                          </div>
                        </div>
                        
                        <div className="flex mt-8 space-x-4">
                          <a href="#" className="p-2 rounded-full bg-[#A67C52]/20 hover:bg-[#A67C52]/40 transition-colors">
                            <svg className="h-5 w-5 text-[#A67C52]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                          </a>
                          <a href="#" className="p-2 rounded-full bg-[#A67C52]/20 hover:bg-[#A67C52]/40 transition-colors">
                            <svg className="h-5 w-5 text-[#A67C52]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                          <a href="#" className="p-2 rounded-full bg-[#A67C52]/20 hover:bg-[#A67C52]/40 transition-colors">
                            <svg className="h-5 w-5 text-[#A67C52]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="support">
                <Card className="bg-white/90 shadow-lg border-none">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-[#3E2723]">Direct Support Options</CardTitle>
                    <CardDescription className="text-[#5D4037]">
                      Choose the best way to get immediate assistance.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="bg-[#F5F1E9]/60 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                        <div className="mx-auto bg-[#A67C52] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                          <Phone className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="text-lg font-medium text-[#3E2723] mb-2">Phone Support</h3>
                        <p className="text-[#5D4037] mb-4">Available Monday-Friday, 9AM-6PM</p>
                        <p className="font-medium text-[#A67C52]">+91 98765 43210</p>
                      </div>
                      
                      <div className="bg-[#F5F1E9]/60 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                        <div className="mx-auto bg-[#A67C52] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                          <MessageSquare className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="text-lg font-medium text-[#3E2723] mb-2">Live Chat</h3>
                        <p className="text-[#5D4037] mb-4">Chat with our team in real-time</p>
                        <Button className="bg-[#A67C52] hover:bg-[#5D4037] text-white">
                          Start Chat
                        </Button>
                      </div>
                      
                      <div className="bg-[#F5F1E9]/60 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                        <div className="mx-auto bg-[#A67C52] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                          <Mail className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="text-lg font-medium text-[#3E2723] mb-2">Email Support</h3>
                        <p className="text-[#5D4037] mb-4">Response within 24 hours</p>
                        <p className="font-medium text-[#A67C52]">support@rentkaro.com</p>
                      </div>
                    </div>
                    
                    <div className="mt-12 p-6 bg-[#F5F1E9] rounded-lg border border-[#D2B48C]/30">
                      <h3 className="text-xl font-medium text-[#3E2723] mb-4">Frequently Asked Support Questions</h3>
                      <div className="space-y-4">
                        {[
                          { q: "How quickly can I expect a response?", a: "For phone and chat, support is immediate during business hours. Email queries are typically answered within 24 hours." },
                          { q: "Is weekend support available?", a: "Limited support is available on Saturdays from 10AM to 2PM. For urgent matters outside these hours, please use our emergency contact form." },
                          { q: "Can I schedule a callback?", a: "Yes! You can schedule a callback at your preferred time through our support portal or by sending an email with your availability." }
                        ].map((item, i) => (
                          <div key={i} className="p-4 bg-white rounded-md">
                            <h4 className="font-medium text-[#3E2723] mb-2">{item.q}</h4>
                            <p className="text-[#5D4037]">{item.a}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="visit">
                <Card className="bg-white/90 shadow-lg border-none">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-[#3E2723]">Visit Our Offices</CardTitle>
                    <CardDescription className="text-[#5D4037]">
                      We'd love to meet you in person! Find a RentKaro office near you.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-[#F5F1E9]/60 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-medium text-[#3E2723] mb-4 flex items-center">
                          <MapPin className="h-5 w-5 text-[#A67C52] mr-2" />
                          Mumbai Headquarters
                        </h3>
                        <div className="space-y-2 text-[#5D4037]">
                          <p>Level 8, Maker Chambers IV</p>
                          <p>Nariman Point, Mumbai 400021</p>
                          <p>Maharashtra, India</p>
                        </div>
                        <div className="mt-4 text-[#A67C52] font-medium">
                          <p>Open Mon-Fri, 9AM-6PM</p>
                        </div>
                      </div>
                      
                      <div className="bg-[#F5F1E9]/60 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-medium text-[#3E2723] mb-4 flex items-center">
                          <MapPin className="h-5 w-5 text-[#A67C52] mr-2" />
                          Bangalore Office
                        </h3>
                        <div className="space-y-2 text-[#5D4037]">
                          <p>91 Springboard, Koramangala</p>
                          <p>5th Block, Bangalore 560095</p>
                          <p>Karnataka, India</p>
                        </div>
                        <div className="mt-4 text-[#A67C52] font-medium">
                          <p>Open Mon-Fri, 9AM-6PM</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Map placeholder */}
                    <div className="relative w-full h-96 rounded-lg overflow-hidden bg-[#D2B48C]/20 mb-8">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-12 w-12 text-[#A67C52] mx-auto mb-4" />
                          <p className="text-[#5D4037]">Map would be displayed here</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#F5F1E9] p-6 rounded-lg border border-[#D2B48C]/30">
                      <h3 className="font-medium text-[#3E2723] mb-4">Planning Your Visit</h3>
                      <ul className="space-y-3 text-[#5D4037]">
                        <li className="flex items-start">
                          <span className="text-[#A67C52] mr-2">•</span>
                          <span>Appointments are recommended but not required. Walk-ins are welcome during business hours.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#A67C52] mr-2">•</span>
                          <span>Visitor parking is available at both locations with validation.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#A67C52] mr-2">•</span>
                          <span>Please bring a valid ID for security check-in at the reception.</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-8 bg-gradient-to-br from-[#D2B48C] to-[#A67C52]/70 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 floating-circle" />
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/5 floating-circle-slow" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the RentKaro Community
            </h2>
            
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Start sharing, borrowing, and building connections with people around you.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link href="/register">
                <Button variant="default" className="text-lg font-medium h-14 px-8 bg-white text-[#A67C52] hover:bg-white/90 hover:text-[#5D4037] shadow-lg hover:shadow-xl transition-all">
                  Create Account
                </Button>
              </Link>
              
              <Link href="/how-it-works">
                <Button variant="outline" className="text-lg font-medium h-14 px-8 bg-transparent border-white text-white hover:bg-white/10 transition-all">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CSS Animations */}
        <style jsx global>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }

          .floating-circle {
            animation: float 6s ease-in-out infinite;
          }
          
          .floating-circle-slow {
            animation: float 8s ease-in-out infinite;
          }
        `}</style>
      </div>
    </Layout>
  );
}