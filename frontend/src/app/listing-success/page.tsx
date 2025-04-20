// pages/listing-success.js
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ListingSuccess() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  // Countdown redirect timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/browse');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <>
      <Head>
        <title>Listing Successful - rentKaro</title>
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100">
        <header className="bg-teal-600 text-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">rentKaro</Link>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/browse" className="hover:underline">Browse</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/account" className="hover:underline">My Account</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-teal-700 mb-4">Item Listed Successfully!</h1>
            
            <p className="text-gray-600 text-lg mb-8">
              Your item has been successfully listed on rentKaro and is now available for others to rent.
            </p>
            
            <div className="space-y-6">
              <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
                <h2 className="text-xl font-semibold text-teal-700 mb-2">What's Next?</h2>
                <ul className="text-left space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Keep an eye on your notifications for rental requests
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    You can manage your listings from your account dashboard
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Add more items to increase your visibility on rentKaro
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                <Link 
                  href="/account/listings" 
                  className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-medium"
                >
                  View My Listings
                </Link>
                <Link 
                  href="/list-item" 
                  className="px-6 py-3 bg-teal-100 text-teal-800 rounded-md hover:bg-teal-200 transition-colors font-medium"
                >
                  List Another Item
                </Link>
              </div>
              
              <p className="text-gray-500 text-sm">
                Redirecting to browse page in {countdown} seconds...
              </p>
            </div>
          </div>
        </main>
        
        <footer className="bg-teal-700 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">rentKaro</h3>
                <p className="text-teal-100">Rent anything, anytime, anywhere.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-teal-100 hover:text-white">Home</Link></li>
                  <li><Link href="/browse" className="text-teal-100 hover:text-white">Browse Items</Link></li>
                  <li><Link href="/list-item" className="text-teal-100 hover:text-white">List Your Item</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">Support</h4>
                <ul className="space-y-2">
                  <li><Link href="/faq" className="text-teal-100 hover:text-white">FAQ</Link></li>
                  <li><Link href="/contact" className="text-teal-100 hover:text-white">Contact Us</Link></li>
                  <li><Link href="/terms" className="text-teal-100 hover:text-white">Terms of Service</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">Contact</h4>
                <address className="not-italic text-teal-100">
                  <p>Email: support@rentkaro.com</p>
                  <p>Phone: +91 123 456 7890</p>
                </address>
              </div>
            </div>
            <div className="border-t border-teal-600 mt-6 pt-6 text-center text-teal-100">
              <p>&copy; {new Date().getFullYear()} rentKaro. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}