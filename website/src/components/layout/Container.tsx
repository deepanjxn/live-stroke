import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto max-w-[1440px] px-5 tablet:px-16 desktop:px-[280px] ${className}`}>
      <div className="border-x border-gray-100">{children}</div>
    </div>
  );
}
