import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navigation from '@/components/navigation2/navigation';
// import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <Navigation />;
}

