// pages/list-item.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function ListItem() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    price: '',
    rentalPeriod: 'daily',
    location: '',
    images: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    // In a real app, you'd handle image uploads differently
    // This is just for demonstration purposes
    setFormData(prev => ({ ...prev, images: Array.from(e.target.files) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would normally send the data to your API
      console.log('Submitting item:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to success page or home page
      router.push('/listing-success');
    } catch (error) {
      console.error('Error submitting item:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>List Your Item - rentKaro</title>
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

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h1 className="text-3xl font-bold text-teal-700 mb-6">List Your Item</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Item Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-gray-700 font-medium mb-2">Category</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="furniture">Furniture</option>
                    <option value="appliances">Appliances</option>
                    <option value="tools">Tools & Equipment</option>
                    <option value="sports">Sports & Fitness</option>
                    <option value="clothing">Clothing & Accessories</option>
                    <option value="books">Books & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="price" className="block text-gray-700 font-medium mb-2">Rental Price (₹)</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="rentalPeriod" className="block text-gray-700 font-medium mb-2">Rental Period</label>
                  <select
                    id="rentalPeriod"
                    name="rentalPeriod"
                    value={formData.rentalPeriod}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  >
                    <option value="hourly">Per Hour</option>
                    <option value="daily">Per Day</option>
                    <option value="weekly">Per Week</option>
                    <option value="monthly">Per Month</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="images" className="block text-gray-700 font-medium mb-2">Upload Images</label>
                <input
                  type="file"
                  id="images"
                  name="images"
                  onChange={handleImageChange}
                  accept="image/*"
                  multiple
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <p className="text-sm text-gray-500 mt-1">Upload up to 5 images of your item (optional)</p>
              </div>
              
              <div className="flex justify-end space-x-4">
                <Link 
                  href="/browse" 
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors disabled:bg-teal-400"
                >
                  {isSubmitting ? 'Submitting...' : 'List Item'}
                </button>
              </div>
            </form>
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