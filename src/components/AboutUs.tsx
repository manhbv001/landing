import { JetBrains_Mono } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import FeaturedButton from './FeaturedButton';

const JetBrains = JetBrains_Mono({ weight: '500', subsets: ['latin'] });

export interface IAboutUsProps {}
const AboutUs: FC<IAboutUsProps> = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-auto w-[1460px] max-w-[100%] h-[70px] relative">
        <Image src="/images/about-us-frame.png" alt="" fill />
      </div>
      <div className="w-full max-w-[1107px] mx-auto mt-[134px]">
        <div
          className="w-[888px] max-w-[75%] h-[110px] relative z-[5] left-[50%]"
          style={{ transform: 'translateX(-50%)' }}
        >
          <Image
            src="/images/about-us-text.svg"
            alt="About text"
            style={{ objectFit: 'contain' }}
            fill
          />
        </div>
        <p
          className={`text-[20px] mt-[32px] text-center ${JetBrains.className}`}
          style={{
            lineHeight: 2,
          }}
        >
          Vikingdom is an eSports game developed with the blockchain
          technology.You can form a team with your friends to join battles and
          start earning with your skills.
        </p>
        <div className="text-center mt-8">
          <div className="flex gap-x-4 justify-center">
            <FeaturedButton url="/">
              <span className="flex-shrink-0 mr-3">FREE-TO-PLAY MODEL</span>
            </FeaturedButton>
            <FeaturedButton url="/">
              <span className="flex-shrink-0 mr-3">FREE-TO-PLAY MODEL</span>
            </FeaturedButton>
            <FeaturedButton url="/">
              <span className="flex-shrink-0 mr-3">FREE-TO-PLAY MODEL</span>
            </FeaturedButton>
          </div>
          <span style={JetBrains.style} className="block text-[20px] mt-[32px]">
            AVAILABLE DOWNLOAD
          </span>
          <div className="flex gap-x-3 justify-center mt-3">
            <div className="bg-black p-3 border rounded-lg">
              <Link href="/">
                <Image
                  src="/images/google-play.png"
                  alt="Download from Google Play"
                  width={150}
                  height={44}
                />
              </Link>
            </div>
            <div className="bg-black p-3 border rounded-lg">
              <Link href="/">
                <Image
                  src="/images/app-store.png"
                  alt="Download from Apple Store"
                  width={150}
                  height={44}
                />
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex mt-[100px]">
        <div className="relative w-1/2 aspect-[4/3] flex-shrink-0">
          <Image
            src="/images/about-us-thumb.png"
            alt="About us thumbnail"
            fill
          />
        </div>
        <div>
          <h3
            style={{
              backgroundImage: "url('/images/about-us-catchphrase-frame.png')",
              ...JetBrains.style,
              fontWeight: 800,
              fontSize: 45,
              color: 'rgba(204, 140, 0, 1), rgba(204, 140, 0, 0)',
              backgroundSize: 'cover',
            }}
            className="h-[144px] -translate-x-4 w-full aspect-[48/10] bg-no-repeat flex items-center justify-center uppercase"
          >
            FREE-TO-PLAY MODEL
          </h3>
          <p
            style={JetBrains.style}
            className="list-disc mt-[46px] text-[#ADADAD] text-[20px]"
          >
            Thetan Arena is an eSports game developed with the blockchain
            technology.You can form a team with your friends to join battles and
            start earning with your skills.
            <ul className="pl-8 list-disc mt-[20px]">
              <li>
                Thetan Arena is an eSports game developed with the blockchain
                technology.
              </li>
              <li>
                You can form a team with your friends to join battles and start
                earning with your skills.
              </li>
              <li>
                Thetan Arena is an eSports game developed with the blockchain
                technology.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
