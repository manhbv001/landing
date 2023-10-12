import { JetBrains_Mono, Jomhuria } from 'next/font/google';
import Image from 'next/image';
import { FC } from 'react';
import './style.css';

export interface IRoadMapProps {}
const Jumhuria = Jomhuria({ weight: '400', subsets: ['latin'] });
const Jetbrains = JetBrains_Mono({ weight: '700', subsets: ['latin'] });

const RoadMapItem = ({ index }: { index: number }) => {
  return (
    <div
      className="aspect-[10/19] w-full relative flex justify-center"
      style={{
        backgroundImage: "url('/images/roadmap-item.png')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        marginTop: (5 - index) * 102,
      }}
    >
      <span
        className="text-[40px] absolute flex w-[88%] h-[60px] left-[-20%] top-[5%] justify-center items-center"
        style={{
          backgroundImage: "url('/images/roadmap-item-headline.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          ...Jumhuria.style,
          paddingRight: 12,
        }}
      >
        PHASE {index}
      </span>
      <ul
        className="pl-6 pt-[110px] list-disc text-[16px] max-w-[80%]"
        style={Jetbrains.style}
      >
        <li className="mb-[16px]">Tournament</li>
        <li className="mb-[16px]">Hero Rental System</li>
        <li className="mb-[16px]">MKP Upgrade</li>
        <li className="mb-[16px]">Creator Corner</li>
        <li className="mb-[16px]">Staking Program</li>
      </ul>
      <div
        className="absolute h-[1000px] w-[1px] bg-[#FCC800] top-[100%]"
        style={{
          height: 35 + (index - 1) * 102,
        }}
      ></div>
    </div>
  );
};

const RoadMap: FC<IRoadMapProps> = () => {
  return (
    <div className="mt-12 container mx-auto relative pt-[18%]">
      <div className="absolute w-[45%] aspect-[13/10] top-0">
        <Image src="/images/roadmap-logo.png" fill alt="Roadmap logo" />
      </div>
      <div>
        <div className="grid grid-cols-5 gap-x-16">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="col-span-1">
              <RoadMapItem index={item} />
            </div>
          ))}
        </div>
        <div className="h-[1px] w-full bg-[#FCC800] mt-[35px] roadmap-shadow " />
        <div className="h-[1px] w-full bg-[#FCC800] mt-[12px]" />
      </div>
    </div>
  );
};

export default RoadMap;
