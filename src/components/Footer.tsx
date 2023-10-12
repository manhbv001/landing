import { JetBrains_Mono } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Jetbrains = JetBrains_Mono({ weight: '500', subsets: ['latin'] });
const JetbrainsThin = JetBrains_Mono({ weight: '400', subsets: ['latin'] });
const JetbrainsBold = JetBrains_Mono({ weight: '800', subsets: ['latin'] });

export interface IFooterProps {}
const Footer: FC<IFooterProps> = () => {
  return (
    <div className="mt-[160px]">
      <div className="relative">
        <div className="w-full h-[600px] absolute top-0">
          <Image src="/images/footer-bg.png" fill alt="footer bg" />
        </div>
        <div className="container mx-auto relative z-20 top-[142px]">
          <div className="flex gap-x-10">
            <div className="flex-shrink-0 w-[320px] h-[320px] relative">
              <Image src="/images/header-logo.png" alt="Logo" fill />
            </div>
            <div className="">
              <div
                className="inline-flex text-[#03031E] text-[16px] leading-10"
                style={Jetbrains.style}
              >
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">Marketplace</Link>
                  </li>
                  <li>
                    <Link href="/">Blog</Link>
                  </li>
                  <li>
                    <Link href="/">FAQ</Link>
                  </li>
                </ul>
                <ul className="ml-[56px]">
                  <li>
                    <Link href="/">Instruction</Link>
                  </li>
                  <li>
                    <Link href="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/">Support</Link>
                  </li>
                </ul>
                <ul className="ml-[56px]">
                  <li>
                    <Link href="/">About Wolfun</Link>
                  </li>
                  <li>
                    <Link href="/">Whiteper</Link>
                  </li>
                  <li>
                    <Link href="/">Audit Report</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-[32px]">
                <span
                  className="text-[#03031E] text-[16px] leading-10 font-[800]"
                  style={JetbrainsBold.style}
                >
                  Partership Inquiry
                </span>
                <p
                  className="max-w-[420px] mt-[16px] text-[#03031E] text-[16px] leading-8"
                  style={JetbrainsThin.style}
                >
                  Community/Business Partnership Email Us | Sign Up
                  <br />
                  Gaming Guild Application: Email Us | Sign Up
                  <br />
                  Creator Program: Email Us | Sign Up
                </p>
              </div>
            </div>
            <div className="ml-auto flex-shrink-0">
              <span className="text-[#03031E]" style={JetbrainsBold.style}>
                Community
              </span>
              <div className="mt-[14px] flex gap-x-[22px]">
                <Link href="/">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/twitter.svg" alt="Twitter logo" />
                </Link>
                <Link href="/">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/facebook.svg" alt="Facebook logo" />
                </Link>
                <Link href="/">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/pinterest.svg" alt="Pinterest logo" />
                </Link>
                <Link href="/">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/discord.svg" alt="Discord logo" />
                </Link>
              </div>
              <div className="mt-[32px]">
                <span
                  className="text-[#03031E] text-[16px] leading-10 font-[800]"
                  style={JetbrainsBold.style}
                >
                  Support Inquyniry
                </span>
                <p
                  className="mt-[16px] text-[#03031E] text-[16px] leading-8"
                  style={JetbrainsThin.style}
                >
                  Wolffun Helpshift
                  <br />
                  Discord - Game Support Channel
                  <br />
                  Discord - Marketplace Support Channel
                  <br />
                  Email Us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
