import { FC, ReactNode } from 'react';

interface ReviewLayoutProps {
  children: ReactNode;
}

const ReviewLayout: FC<ReviewLayoutProps> = ({ children }) => {
  return <div className="bg-slate-200 p-10 rounded-md">{children}</div>;
};

export default ReviewLayout;
