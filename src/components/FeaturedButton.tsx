import { Jomhuria } from 'next/font/google';
import Link from 'next/link';
import { CSSProperties, FC, PropsWithChildren } from 'react';

const jomhuriaFont = Jomhuria({ subsets: ['latin'], weight: '400' });

export interface IFeaturedButtonProps extends PropsWithChildren {
  url?: string;
  buttonStyles?: CSSProperties;
  disabled?: boolean;
}
const FeaturedButton: FC<IFeaturedButtonProps> = ({
  buttonStyles = {},
  children,
  url,
  disabled,
}) => {
  return (
    <div>
      <button
        style={{ paddingTop: 4, ...jomhuriaFont.style, ...buttonStyles }}
        className="relative text-[36px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="219"
          height="56"
          viewBox="0 0 219 56"
          fill="none"
        >
          <path
            d="M0 56V11.7681L9.5084 0H219V45.0435L210.718 56H0Z"
            fill={disabled ? '#999' : '#CC8C00'}
          />
        </svg>
        {url ? (
          <Link
            href={url}
            className="absolute flex items-center justify-center top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            {children}
          </Link>
        ) : (
          <div className="absolute flex items-center justify-center top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {children}
          </div>
        )}
      </button>
    </div>
  );
};

export default FeaturedButton;
