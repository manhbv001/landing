import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import GameArt from '@/components/GameArt';
import HeaderBanner from '@/components/HeaderBanner';
import News from '@/components/News';
import Partners from '@/components/Partner';
import Questions from '@/components/Question';
import RoadMap from '@/components/RoadMap';
import Token from '@/components/Token';
import type { Metadata } from 'next';
import { Inria_Serif } from 'next/font/google';
import './globals.css';

const inter = Inria_Serif({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderBanner />
        <div
          style={{
            width: '100%',
            backgroundImage: "url('/images/middle-bg.jpg')",
            backgroundSize: 'cover',
          }}
        >
          <AboutUs />
          <Token />
        </div>
        <div
          style={{
            width: '100%',
            backgroundImage: "url('/images/game-art-bg.jpg')",
            backgroundSize: 'cover',
          }}
        >
          <GameArt />
          <Partners />
          <RoadMap />
        </div>
        <div
          style={{
            width: '100%',
            backgroundImage: "url('/images/partner-layout-bg.jpg')",
            backgroundSize: 'cover',
          }}
        >
          <News />
          <Questions />
          <Footer />
        </div>
      </body>
    </html>
  );
}
