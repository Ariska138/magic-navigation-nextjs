import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
// import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <Navigation />
    </div>
  );
}

