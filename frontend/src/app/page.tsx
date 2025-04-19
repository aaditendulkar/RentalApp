'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent } from './components/ui/card';

export default function Home() {
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // 3D tilt effect
  useEffect(() => {
    const card = cardRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      if (!card) return;
      const { clientX, clientY } = e;
      const { width, height, left, top } = card.getBoundingClientRect();

      const x = clientX - left;
      const y = clientY - top;
      const rotateX = ((y / height) - 0.5) * -15;
      const rotateY = ((x / width) - 0.5) * 15;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const resetTransform = () => {
      if (card) card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    card?.addEventListener('mousemove', handleMouseMove);
    card?.addEventListener('mouseleave', resetTransform);

    return () => {
      card?.removeEventListener('mousemove', handleMouseMove);
      card?.removeEventListener('mouseleave', resetTransform);
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-amber-100 text-brown-800 px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold mb-4 text-center"
      >
        Welcome to RentKaro
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-md sm:text-lg text-center max-w-xl mb-10 px-4"
      >
        Borrow what you need, share what you have. A community-driven platform for sharing everyday items.
      </motion.p>

      <motion.div
        ref={cardRef}
        whileHover={{ scale: 1.05 }}
        onClick={() => router.push('/items')}
        className="cursor-pointer"
      >
        <Card className="w-[320px] sm:w-[350px] h-[320px] sm:h-[350px] bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-transform duration-300 flex items-center justify-center p-8">
          <CardContent className="flex items-center justify-center w-full h-full">
            <Image
              src="/logo.png"
              alt="RentKaro Logo"
              width={220}
              height={220}
              className="object-contain"
            />
          </CardContent>
        </Card>
      </motion.div>

      <motion.button
        onClick={() => router.push('/how-it-works')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 px-6 py-3 rounded-full bg-amber-600 text-white font-semibold shadow-md hover:bg-amber-700 transition"
      >
        How It Works
      </motion.button>
    </main>
  );
}
