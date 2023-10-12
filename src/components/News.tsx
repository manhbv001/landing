import { JetBrains_Mono } from 'next/font/google';
import Image from 'next/image';
import { FC } from 'react';

export interface INewsProps {}
const Jetbrains = JetBrains_Mono({ weight: '500', subsets: ['latin'] });

const News: FC<INewsProps> = () => {
  return (
    <div className="container mx-auto mt-[150px]">
      <div className="w-[90%] mx-auto aspect-[83/10] relative">
        <Image src="/images/news-heading.png" alt="News heading" fill />
      </div>
      <div className="mt-[92px]">
        <ul className="grid grid-cols-3 gap-x-[50px]">
          <li>
            <div className="aspect-[5/3] relative">
              <Image src="/images/news-item.png" alt="news item" fill />
            </div>
            <p
              className="mt-[28px] text-[24px] text-[#B3B3B3]"
              style={Jetbrains.style}
            >
              Thetan Arena is an eSports game developed with the blockchain
              technology.
            </p>
          </li>
          <li>
            <div className="aspect-[5/3] relative">
              <Image src="/images/news-item.png" alt="news item" fill />
            </div>
            <p
              className="mt-[28px] text-[24px] text-[#B3B3B3]"
              style={Jetbrains.style}
            >
              Thetan Arena is an eSports game developed with the blockchain
              technology.
            </p>
          </li>
          <li>
            <div className="aspect-[5/3] relative">
              <Image src="/images/news-item.png" alt="news item" fill />
            </div>
            <p
              className="mt-[28px] text-[24px] text-[#B3B3B3]"
              style={Jetbrains.style}
            >
              Thetan Arena is an eSports game developed with the blockchain
              technology.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default News;
