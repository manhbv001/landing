import { JetBrains_Mono } from 'next/font/google';
import Image from 'next/image';
import { FC } from 'react';
import FeaturedButton from './FeaturedButton';

const JetBrains = JetBrains_Mono({ weight: '500', subsets: ['latin'] });

export interface ITokenProps {}
const Token: FC<ITokenProps> = () => {
  return (
    <div id="token" className="container mx-auto -translate-y-20">
      <div className="relative w-full h-[2000px]">
        <Image
          src="/images/token-bg.png"
          alt="Token bg"
          fill
          style={{ objectFit: 'contain' }}
        />
        <div className="absolute z-10 top-[950px] w-full">
          <div className="flex w-full justify-center gap-x-4 -translate-x-4">
            <FeaturedButton buttonStyles={{ fontSize: 30 }}>
              UTILITY TOKEN
            </FeaturedButton>
            <FeaturedButton buttonStyles={{ fontSize: 30 }}>
              TOKENOMICS
            </FeaturedButton>
            <FeaturedButton buttonStyles={{ fontSize: 30 }}>DAO</FeaturedButton>
          </div>
          <p
            style={JetBrains.style}
            className="mx-auto w-[642px] max-w-[90%] text-[16px] font-[500] text-center mt-8"
          >
            By optimizing the two tokens ($THC & $THG), Thetan Arena aims at the
            ecosystem`s sustainability and scalability.Thetan Arena aims at the
            ecosystem`s sustainability and scalability.
          </p>
          <div className="p-[75px] grid grid-cols-4">
            <div className="col-span-1">
              <div className="flex flex-col gap-y-[50px]">
                <div
                  className="flex items-center justify-center w-full aspect-[18/10] bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/token-left-bg.png')",
                    ...JetBrains.style,
                  }}
                >
                  <div>
                    <span className="text-[20px] text-[700] uppercase">
                      Seed Round
                    </span>
                    <p className="text-[16px] text-[400] uppercase max-w-[200px]">
                      10%(Lock 6 months, Vesting Period 36 months)
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-center justify-center w-full aspect-[18/10] bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/token-left-bg.png')",
                    ...JetBrains.style,
                  }}
                >
                  <div>
                    <span className="text-[20px] text-[700] uppercase">
                      Seed Round
                    </span>
                    <p className="text-[16px] text-[400] uppercase max-w-[200px]">
                      10%(Lock 6 months, Vesting Period 36 months)
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-center justify-center w-full aspect-[18/10] bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/token-left-bg.png')",
                    ...JetBrains.style,
                  }}
                >
                  <div>
                    <span className="text-[20px] text-[700] uppercase">
                      Seed Round
                    </span>
                    <p className="text-[16px] text-[400] uppercase max-w-[200px]">
                      10%(Lock 6 months, Vesting Period 36 months)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 flex items-center justify-center -translate-x-5 translate-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/token-pie-chart.svg" alt="Chart" />
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-y-[50px]">
                <div
                  className="flex items-center justify-center w-full aspect-[18/10] bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/token-right-bg.png')",
                    ...JetBrains.style,
                  }}
                >
                  <div>
                    <span className="text-[20px] text-[700] uppercase">
                      Seed Round
                    </span>
                    <p className="text-[16px] text-[400] uppercase max-w-[200px]">
                      10%(Lock 6 months, Vesting Period 36 months)
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-center justify-center w-full aspect-[18/10] bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/token-right-bg.png')",
                    ...JetBrains.style,
                  }}
                >
                  <div>
                    <span className="text-[20px] text-[700] uppercase">
                      Seed Round
                    </span>
                    <p className="text-[16px] text-[400] uppercase max-w-[200px]">
                      10%(Lock 6 months, Vesting Period 36 months)
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-center justify-center w-full aspect-[18/10] bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/token-right-bg.png')",
                    ...JetBrains.style,
                  }}
                >
                  <div>
                    <span className="text-[20px] text-[700] uppercase">
                      Seed Round
                    </span>
                    <p className="text-[16px] text-[400] uppercase max-w-[200px]">
                      10%(Lock 6 months, Vesting Period 36 months)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
