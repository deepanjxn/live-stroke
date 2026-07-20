import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-page-bg p-6 ${className}`}
    >
      {children}
    </div>
  );
}
