import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, title = 'RentKar - Community Item Sharing' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Borrow what you need, share what you have. A community-driven platform for sharing everyday items." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;