import { JetBrains_Mono } from 'next/font/google';
import Image from 'next/image';
import { FC } from 'react';
import QuestionItem from './QuestionItem';

const Jetbrains = JetBrains_Mono({ weight: '700', subsets: ['latin'] });
const Jetbrains_Thin = JetBrains_Mono({ weight: '300', subsets: ['latin'] });

export interface IQuestionsProps {}
const Questions: FC<IQuestionsProps> = () => {
  return (
    <div className="container mt-[200px] relative mx-auto">
      <div
        className="absolute w-[400px] -top-[20px] z-20 -translate-x-1/2 mx-auto aspect-[4]"
        style={{ left: 'calc(50% - 28px)' }}
      >
        <Image src="/images/question-heading.png" fill alt="question heading" />
      </div>
      <div className="w-full h-full absolute top-0">
        <Image src="/images/question-bg.png" fill alt="question bg" />
      </div>
      <div className="p-12 py-[120px] relative z-20">
        {[1, 2, 3, 4].map((item) => (
          <QuestionItem headline="" content="" key={item} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
