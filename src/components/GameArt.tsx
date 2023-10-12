import Image from 'next/image';
import { FC } from 'react';

export interface IGameArtProps {}
const GameArt: FC<IGameArtProps> = () => {
  return (
    <div className="container mx-auto">
      <div className="relative aspect-[86/10] mt-16">
        <Image
          fill
          alt="Heading"
          objectFit="conver"
          src="/images/game-art-heading.png"
        />
      </div>
      <div className="mt-16">
        <div>
          <div className="aspect-[5/3] relative">
            <Image
              src="/images/game-art-item1.png"
              objectFit="contain"
              fill
              alt="Game art item"
            />
            <button
              className="absolute"
              style={{ top: '50%', transform: 'translateX(-50%)' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <rect
                  x="31.542"
                  y="1.41421"
                  width="42.6068"
                  height="42.6068"
                  transform="rotate(45 31.542 1.41421)"
                  stroke="#FCC800"
                  strokeWidth="2"
                />
                <path
                  d="M23.6708 32.3391L33.8377 42.5027C34.2838 42.9477 35.0066 42.9477 35.4538 42.5027C35.9 42.0577 35.9 41.3349 35.4538 40.8899L26.0933 31.5328L35.4527 22.1757C35.8988 21.7307 35.8988 21.0079 35.4527 20.5618C35.0066 20.1168 34.2827 20.1168 33.8366 20.5618L23.6696 30.7252C23.2304 31.1656 23.2304 31.8998 23.6708 32.3391Z"
                  fill="#FCC800"
                />
              </svg>
            </button>
            <button
              className="absolute"
              style={{ top: '50%', right: 0, transform: 'translateX(50%)' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <rect
                  y="1.41421"
                  width="42.6068"
                  height="42.6068"
                  transform="matrix(-0.707107 0.707107 0.707107 0.707107 30.542 0.414214)"
                  stroke="#FCC800"
                  strokeWidth="2"
                />
                <path
                  d="M39.4132 32.3391L29.2463 42.5027C28.8002 42.9477 28.0774 42.9477 27.6301 42.5027C27.184 42.0577 27.184 41.3349 27.6301 40.8899L36.9906 31.5328L27.6313 22.1757C27.1851 21.7307 27.1851 21.0079 27.6313 20.5618C28.0774 20.1168 28.8013 20.1168 29.2474 20.5618L39.4143 30.7252C39.8536 31.1656 39.8536 31.8998 39.4132 32.3391Z"
                  fill="#FCC800"
                />
              </svg>
            </button>
          </div>
          <ul className="grid grid-cols-5 gap-x-5">
            <li className="col-span-1 relative aspect-[5/3]">
              <Image
                src="/images/game-art-item1.png"
                objectFit="contain"
                fill
                alt="Game art item"
              />
            </li>
            <li className="col-span-1 relative aspect-[5/3]">
              <Image
                src="/images/game-art-item2.png"
                objectFit="contain"
                fill
                alt="Game art item"
              />
            </li>
            <li className="col-span-1 relative aspect-[5/3]">
              <Image
                src="/images/game-art-item3.png"
                objectFit="contain"
                fill
                alt="Game art item"
              />
            </li>
            <li className="col-span-1 relative aspect-[5/3]">
              <Image
                src="/images/game-art-item4.png"
                objectFit="contain"
                fill
                alt="Game art item"
              />
            </li>
            <li className="col-span-1 relative aspect-[5/3]">
              <Image
                src="/images/game-art-item5.png"
                objectFit="contain"
                fill
                alt="Game art item"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GameArt;
