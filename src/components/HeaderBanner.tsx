import { JetBrains_Mono } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import FeaturedButton from './FeaturedButton';

const JetBrains = JetBrains_Mono({ weight: '500', subsets: ['latin'] });

export interface IHeaderBannerProps {}
const HeaderBanner: FC<IHeaderBannerProps> = () => {
  return (
    <div className="relative">
      <div className="max-w-[913px] container mx-auto relative z-10">
        <ul className="flex justify-between uppercase">
          <li className="text-[20px] pt-[50px] hover:text-[#FCC800] transition-all">
            <a href="/">Home</a>
          </li>
          <li className="text-[20px] pt-[50px] hover:text-[#FCC800] transition-all">
            <a href="#earns">Earns</a>
          </li>
          <li className="text-[20px] pt-[50px] hover:text-[#FCC800] transition-all">
            <a href="#pvp-game">PVP Game</a>
          </li>
          <li className="">
            <Image
              src="/images/header-logo.png"
              width={222}
              height={210}
              alt="Header logo"
            />
          </li>
          <li className="text-[20px] pt-[50px] hover:text-[#FCC800] transition-all">
            <a href="#token">Token</a>
          </li>
          <li className="text-[20px] pt-[50px] hover:text-[#FCC800] transition-all">
            <a href="#roadmap">Roadmap</a>
          </li>
          <li className="text-[20px] pt-[50px] hover:text-[#FCC800] transition-all">
            <a href="#features">Features</a>
          </li>
        </ul>
      </div>
      <div
        className="max-h-[1080px] w-full top-0"
        style={{ aspectRatio: 17 / 10 }}
      >
        <Image
          src="/images/banner.png"
          alt="Banner"
          style={{ objectFit: 'cover' }}
          fill
        />
        <div
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          className="w-full absolute max-w-[1107px] top-[54%]"
        >
          <div
            className="w-[888px] max-w-[75%] h-[110px] relative z-[5] left-[50%]"
            style={{ transform: 'translateX(-50%)' }}
          >
            <Image
              src="/images/banner-text.svg"
              alt="Banner text"
              style={{ objectFit: 'contain' }}
              fill
            />
          </div>
          <p
            className={`mt-[32px] text-[20px] text-center ${JetBrains.className}`}
            style={{
              lineHeight: 2,
            }}
          >
            Thetan Arena is an eSports game developed with the blockchain
            technology.
            <br />
            You can form a team with your friends to join battles and start
            earning with your skills.
          </p>
          <div className="text-center mt-8">
            <FeaturedButton url="/">
              <span className="flex-shrink-0 mr-3">GO TO APP</span>
              <svg
                className="flex-shrink-0 pb-1"
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="24"
                viewBox="0 0 37 24"
                fill="none"
              >
                <path
                  d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM36.0607 13.0607C36.6464 12.4749 36.6464 11.5251 36.0607 10.9393L26.5147 1.3934C25.9289 0.807611 24.9792 0.807611 24.3934 1.3934C23.8076 1.97919 23.8076 2.92893 24.3934 3.51472L32.8787 12L24.3934 20.4853C23.8076 21.0711 23.8076 22.0208 24.3934 22.6066C24.9792 23.1924 25.9289 23.1924 26.5147 22.6066L36.0607 13.0607ZM2 13.5H35V10.5H2V13.5Z"
                  fill="white"
                />
              </svg>
            </FeaturedButton>
            <span
              style={JetBrains.style}
              className="block text-[20px] mt-[32px]"
            >
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
      </div>
    </div>
  );
};

export default HeaderBanner;
