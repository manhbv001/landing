'use client';

import { JetBrains_Mono } from 'next/font/google';
import { FC, useState } from 'react';

const Jetbrains = JetBrains_Mono({ weight: '700', subsets: ['latin'] });
const Jetbrains_Thin = JetBrains_Mono({ weight: '300', subsets: ['latin'] });

export interface IQuestionItemProps {
  headline: string;
  content: string;
}
const QuestionItem: FC<IQuestionItemProps> = ({ headline, content }) => {
  const [isExpand, setIsExpand] = useState(false);

  const toggleExpand = () => setIsExpand(!isExpand);

  return (
    <div className="py-8 px-2 border-b">
      <p
        style={Jetbrains.style}
        className="text-[20px] flex items-center justify-between"
      >
        There are many Different Matrix programs, why i should join King Matrix?
        <button onClick={toggleExpand}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_2194_28516)">
              <path
                d="M-5.24537e-07 12C-2.34843e-07 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 -8.1423e-07 12 -5.24537e-07C5.37258 -2.34843e-07 -8.1423e-07 5.37258 -5.24537e-07 12ZM22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.201 22.5 1.5 17.799 1.5 12C1.5 6.201 6.201 1.5 12 1.5C17.799 1.5 22.5 6.201 22.5 12Z"
                fill="#CC8C00"
              />
              <path
                d="M5.4751 10.2824L11.4751 16.2824C11.7676 16.5732 12.2401 16.5732 12.5326 16.2824L18.5326 10.2824L17.4676 9.22488L12.0001 14.6924L6.5326 9.22488L5.4751 10.2824Z"
                fill="#CC8C00"
              />
            </g>
            <defs>
              <clipPath id="clip0_2194_28516">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 24) rotate(-90)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </p>
      {isExpand ? (
        <ul
          style={Jetbrains_Thin.style}
          className="list-disc text-[#dfdfdf] text-[18px] ml-[20px] text-lg font-light"
        >
          <li className="mt-[10px]">100% Defi.</li>
          <li>100% Defi.</li>
          <li>3^20 Matrix.</li>
          <li>Clear strategy</li>
          <li>Transparent Pool.</li>
          <li>Intelligent Tokenomic.</li>
          <li>Long-term purposes.</li>
        </ul>
      ) : null}
    </div>
  );
};

export default QuestionItem;
