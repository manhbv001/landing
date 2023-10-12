import { JetBrains_Mono, Jomhuria } from 'next/font/google';
import Image from 'next/image';
import { FC } from 'react';
import FeaturedButton from './FeaturedButton';

export interface IPartnersProps {}
const JetBrains = JetBrains_Mono({ weight: '500', subsets: ['latin'] });
const Jumhuria = Jomhuria({ weight: '400', subsets: ['latin'] });

const Partners: FC<IPartnersProps> = () => {
  return (
    <div>
      <div className="relative w-[70%] top-[55px] left-[7%] mx-auto aspect-[21/10]">
        <Image src="/images/partner-heading.png" fill alt="partner heading" />
      </div>
      <div className="py-[150px] w-full relative">
        <div className="w-full h-full absolute top-0">
          <Image src="/images/partner-bg.png" fill alt="partner bg" />
        </div>
        <div className="absolute z-10 top-[50px] left-1/2 -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="207"
            height="31"
            viewBox="0 0 207 31"
            fill="none"
          >
            <path
              d="M0 1.01353L16.3302 17.3437C17.1915 18.205 18.3596 18.6889 19.5776 18.6889H41.9504C43.1684 18.6889 44.3365 19.1727 45.1978 20.034L54.4481 29.2843C55.3093 30.1455 56.4775 30.6294 57.6955 30.6294H153.089C154.307 30.6294 155.475 30.1455 156.337 29.2843L165.587 20.034C166.448 19.1727 167.616 18.6889 168.834 18.6889H188.911C190.129 18.6889 191.297 18.205 192.158 17.3437L206.5 1.01396C141 1.01347 66.0158 -0.750809 0 1.01353Z"
              fill="#CC8C00"
            />
          </svg>
        </div>
        <div className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 translate-y-[93%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="207"
            height="31"
            viewBox="0 0 207 31"
            fill="none"
          >
            <path
              d="M0 1.01353L16.3302 17.3437C17.1915 18.205 18.3596 18.6889 19.5776 18.6889H41.9504C43.1684 18.6889 44.3365 19.1727 45.1978 20.034L54.4481 29.2843C55.3093 30.1455 56.4775 30.6294 57.6955 30.6294H153.089C154.307 30.6294 155.475 30.1455 156.337 29.2843L165.587 20.034C166.448 19.1727 167.616 18.6889 168.834 18.6889H188.911C190.129 18.6889 191.297 18.205 192.158 17.3437L206.5 1.01396C141 1.01347 66.0158 -0.750809 0 1.01353Z"
              fill="#CC8C00"
            />
          </svg>
        </div>
        <div className="container relative z-10 mx-auto">
          <div>
            <p
              style={JetBrains.style}
              className="text-[16px] text-center mx-auto w-[930px] max-w-[95%]"
            >
              Thetan Arena can not embrace such impressive milestones without
              the non-stop companionship and support from our distinguished
              Backers and Investors. Guilds, communities, and KOLs & Ambassadors
              are also crucial cornerstones in our ecosystem.
            </p>
            <div className="flex justify-center gap-8 mt-8">
              <FeaturedButton disabled>KOLs</FeaturedButton>
              <FeaturedButton>KOLs</FeaturedButton>
              <FeaturedButton disabled>KOLs</FeaturedButton>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-4 gap-x-10 gap-y-8">
            <div className="col-span-1">
              <div className="relative aspect-square">
                <Image src="/images/partner-item.jpg" alt="Partner item" fill />
                <span
                  className="text-[46px] text-[#040203] flex items-center justify-center absolute bottom-4 w-[206px] h-[46px] z-10 bg-cover"
                  style={{
                    backgroundImage: "url('/images/partner-item-label.png')",
                    ...Jumhuria.style,
                  }}
                >
                  Name Boy
                </span>
              </div>
            </div>{' '}
            <div className="col-span-1">
              <div className="relative aspect-square">
                <Image src="/images/partner-item.jpg" alt="Partner item" fill />
                <span
                  className="text-[46px] text-[#040203] flex items-center justify-center absolute bottom-4 w-[206px] h-[46px] z-10 bg-cover"
                  style={{
                    backgroundImage: "url('/images/partner-item-label.png')",
                    ...Jumhuria.style,
                  }}
                >
                  Name Boy
                </span>
              </div>
            </div>{' '}
            <div className="col-span-1">
              <div className="relative aspect-square">
                <Image src="/images/partner-item.jpg" alt="Partner item" fill />
                <span
                  className="text-[46px] text-[#040203] flex items-center justify-center absolute bottom-4 w-[206px] h-[46px] z-10 bg-cover"
                  style={{
                    backgroundImage: "url('/images/partner-item-label.png')",
                    ...Jumhuria.style,
                  }}
                >
                  Name Boy
                </span>
              </div>
            </div>{' '}
            <div className="col-span-1">
              <div className="relative aspect-square">
                <Image src="/images/partner-item.jpg" alt="Partner item" fill />
                <span
                  className="text-[46px] text-[#040203] flex items-center justify-center absolute bottom-4 w-[206px] h-[46px] z-10 bg-cover"
                  style={{
                    backgroundImage: "url('/images/partner-item-label.png')",
                    ...Jumhuria.style,
                  }}
                >
                  Name Boy
                </span>
              </div>
            </div>{' '}
            <div className="col-span-1">
              <div className="relative aspect-square">
                <Image src="/images/partner-item.jpg" alt="Partner item" fill />
                <span
                  className="text-[46px] text-[#040203] flex items-center justify-center absolute bottom-4 w-[206px] h-[46px] z-10 bg-cover"
                  style={{
                    backgroundImage: "url('/images/partner-item-label.png')",
                    ...Jumhuria.style,
                  }}
                >
                  Name Boy
                </span>
              </div>
            </div>{' '}
            <div className="col-span-1">
              <div className="relative aspect-square">
                <Image src="/images/partner-item.jpg" alt="Partner item" fill />
                <span
                  className="text-[46px] text-[#040203] flex items-center justify-center absolute bottom-4 w-[206px] h-[46px] z-10 bg-cover"
                  style={{
                    backgroundImage: "url('/images/partner-item-label.png')",
                    ...Jumhuria.style,
                  }}
                >
                  Name Boy
                </span>
              </div>
            </div>{' '}
            <div className="col-span-1">
              <div className="relative aspect-square">
                <Image src="/images/partner-item.jpg" alt="Partner item" fill />
                <span
                  className="text-[46px] text-[#040203] flex items-center justify-center absolute bottom-4 w-[206px] h-[46px] z-10 bg-cover"
                  style={{
                    backgroundImage: "url('/images/partner-item-label.png')",
                    ...Jumhuria.style,
                  }}
                >
                  Name Boy
                </span>
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative aspect-square">
                <Image src="/images/partner-item.jpg" alt="Partner item" fill />
                <span
                  className="text-[46px] text-[#040203] flex items-center justify-center absolute bottom-4 w-[206px] h-[46px] z-10 bg-cover"
                  style={{
                    backgroundImage: "url('/images/partner-item-label.png')",
                    ...Jumhuria.style,
                  }}
                >
                  Name Boy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
